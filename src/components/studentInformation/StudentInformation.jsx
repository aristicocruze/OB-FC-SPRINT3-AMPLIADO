import "./studentInformation.css";

function StudentInformation() {
  return (
    <div className="studentInformation">
      <div className="student-img">
        <i class="fas fa-user-alt"></i>
      </div>
      <div className="information-wrapper">
        <h1 className="student-name">Nombre Apellido</h1>
        <div className="work-information">
          <div className="location-container">
            <p>
              <i class="fas fa-map-marker-alt"></i>Valencia, España
            </p>
            <p>
              <i class="far fa-compass"></i>En remoto, Sin traslado
            </p>
          </div>
        </div>
      </div>
      <div className="information-status">
        <p>Estado del candidato:</p>
        <h1>CONTRATADO</h1>
      </div>
    </div>
  );
}

export default StudentInformation;
