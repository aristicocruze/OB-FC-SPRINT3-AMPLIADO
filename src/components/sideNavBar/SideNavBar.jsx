import "./sideNavBar.css";

function SideNavBar() {
    return (
        <div className="sideNavBar">
            <div className="sideNavBar-title">
                <p><h1>Open</h1>Recruiter</p>
            </div>

            <div className="sideNavBar-menu">
                <h1><i class="fas fa-briefcase"></i> Ofertas</h1>
                <h1><i class="fas fa-user-friends"></i>Candidatos</h1>
                <h1><i class="far fa-building"></i>Clientes</h1>
                <h1><i class="far fa-calendar-alt"></i>Entrevistas</h1>
            </div>
        </div>
    )
}

export default SideNavBar
