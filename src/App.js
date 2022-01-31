import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

import Students from "./pages/students/Students";
import SingleStudent from "./pages/singleStudent/SingleStudent";
import LoginPage from "./components/login/LoginPage";

function App() {
  const { user } = useContext(Context);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Students /> : <LoginPage />}></Route>
          <Route
            path="/students"
            element={user ? <Students /> : <LoginPage />}
          ></Route>
          <Route
            path="/single/:id"
            element={user ? <SingleStudent /> : <LoginPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
