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
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="single" element={<SingleStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
