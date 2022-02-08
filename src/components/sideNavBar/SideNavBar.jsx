import "./sideNavBar.css";
import { Link } from "react-router-dom";

function SideNavBar({ tab }) {
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
      {/* Tabs */}
      <div className="sideNavBar-menu">
        {/* Ofertas tab */}
        {tab === "Ofertas" ? (
          <h1 className="selected">
            <i class="fas fa-briefcase icon-selected"></i>
            <a href="/Ofertas" className="link selected">
              <Link to="/students" className="link">
                Ofertas
              </Link>
            </a>
          </h1>
        ) : (
          <h1>
            <i class="fas fa-briefcase"></i>
            <a href="/Ofertas" className="link">
              <Link to="/students" className="link">
                Ofertas
              </Link>
            </a>
          </h1>
        )}

        {/* Candidatos tab */}
        {tab === "Candidatos" ? (
          <h1 className="selected">
            <i class="fas fa-user-friends "></i>
            <a href="/" className="link selected">
              <Link to="/students" className="link">
                Candidatos
              </Link>
            </a>
          </h1>
        ) : (
          <h1>
            <i class="fas fa-user-friends "></i>
            <a href="/" className="link">
              <Link to="/students" className="link">
                Candidatos
              </Link>
            </a>
          </h1>
        )}

        {/* Clientes tab */}
        {tab === "Clientes" ? (
          <h1 className="selected">
            <i class="far fa-building icon-selected"></i>
            <a href="/Clientes" className="link selected">
              <Link to="/students" className="link">
                Clientes
              </Link>
            </a>
          </h1>
        ) : (
          <h1>
            <i class="far fa-building"></i>
            <a href="/Clientes" className="link">
              <Link to="/students" className="link">
                Clientes
              </Link>
            </a>
          </h1>
        )}

        {/* Entrevistas tab */}
        {tab === "Entrevistas" ? (
          <h1 className="selected">
            <i class="far fa-calendar-alt icon-selected"></i>
            <a href="/Entrevistas" className="link selected">
              <Link to="/students" className="link">
                Entrevistas
              </Link>
            </a>
          </h1>
        ) : (
          <h1>
            <i class="far fa-calendar-alt"></i>
            <a href="/Entrevistas" className="link">
              <Link to="/students" className="link">
                Entrevistas
              </Link>
            </a>
          </h1>
        )}
      </div>
    </div>
  );
}

export default SideNavBar;
