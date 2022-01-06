import "./sideNavBar.css";

function SideNavBar() {
  return (
    <div className="sideNavBar">
      <div className="sideNavBar-title">
        <p>
          <h1>Open</h1>Recruiter
        </p>
      </div>

      <div className="sideNavBar-menu">
        <h1>
          <i class="fas fa-briefcase"></i>
          <a href="/Ofertas" className="link">
            Ofertas
          </a>
        </h1>

        <h1>
          <i class="fas fa-user-friends"></i>
          <a href="/Candidatos" className="link">
            Candidatos
          </a>
        </h1>
        <h1>
          <i class="far fa-building"></i>
          <a href="/Clientes" className="link">
            Clientes
          </a>
        </h1>
        <h1>
          <i class="far fa-calendar-alt"></i>
          <a href="/Entrevistas" className="link">
            Entrevistas
          </a>
        </h1>
      </div>
    </div>
  );
}

export default SideNavBar;
