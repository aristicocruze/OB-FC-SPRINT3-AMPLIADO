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
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default LoginPage;
