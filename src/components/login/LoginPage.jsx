import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

import "./loginPage.css";

function LoginPage() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(isFetching);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="login-title">
          <p>OpenBootcamp</p>
          <h1>| Alumnos</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Introduce tu correo"
            ref={userRef}
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Introduce tu contraseña"
            ref={passwordRef}
          />
          <div className="remember-pass">
            <label>
              <input type="checkbox" /> Recuérdame
            </label>
            <p>He olvidado la contraseña</p>
          </div>

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>
        <footer>
          <p>Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
          <p>Todos los derechos reservados.</p>
          <p>Política de Privacidad</p>
        </footer>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default LoginPage;
