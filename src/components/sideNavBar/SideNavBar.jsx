import "./sideNavBar.css";
import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <div className="sideNavBar">
      <div className="sideNavBar-title">
        <p>
          <h1>
            <Link to="/" className="link">
              Open
            </Link>
          </h1>
          <Link to="/" className="link">
            Recruiter
          </Link>
        </p>
      </div>

      <div className="sideNavBar-menu">
        <h1>
          <i class="fas fa-briefcase"></i>
          <a href="/Ofertas" className="link">
            <Link to="/students" className="link">
              Ofertas
            </Link>
          </a>
        </h1>

        <h1>
          <i class="fas fa-user-friends"></i>
          <a href="/" className="link">
            <Link to="/students" className="link">
              Candidatos
            </Link>
          </a>
        </h1>
        <h1>
          <i class="far fa-building"></i>
          <a href="/Clientes" className="link">
            <Link to="/students" className="link">
              Clientes
            </Link>
          </a>
        </h1>
        <h1>
          <i class="far fa-calendar-alt"></i>
          <a href="/Entrevistas" className="link">
            <Link to="/students" className="link">
              Entrevistas
            </Link>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default SideNavBar;
