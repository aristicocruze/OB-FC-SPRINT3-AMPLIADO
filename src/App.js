import { BrowserRouter, Routes, Route } from "react-router-dom";

import Students from "./pages/students/Students";
import SingleStudent from "./pages/singleStudent/SingleStudent";
import LoginPage from "./components/login/LoginPage";

function App() {
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
