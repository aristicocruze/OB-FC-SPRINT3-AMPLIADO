import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

import "./loginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="left">
        <div className="login-title">
          <p>OpenBootcamp</p>
          <h1>| Alumnos</h1>
        </div>
        <form>
          <label>Email</label>
          <input type="text" name="" id="" placeholder="Introduce tu correo" />
          <label>Contraseña</label>
          <input type="password" placeholder="Introduce tu contraseña" />
          <div className="remember-pass">
            <label>
              <input type="checkbox" /> Recuérdame
            </label>
            <p>He olvidado la contraseña</p>
          </div>
          <Link to="students">
            <button type="submit" className="login-btn">
              Iniciar Sesión
            </button>
          </Link>
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
