import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <p>OpenBootcamp</p>
        <h1>| Alumnos</h1>
      </div>
      <div className="profile">
        <p> NA </p>
        <h4>
          UserName <i className="fas fa-chevron-down"></i>
        </h4>
      </div>
    </header>
  );
}

export default Header;
