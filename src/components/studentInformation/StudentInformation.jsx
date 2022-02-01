import "./studentInformation.css";

function StudentInformation({ name, country, jobMode, status }) {
  return (
    <div className="studentInformation">
      <div className="student-img">
        <i class="fas fa-user-alt"></i>
      </div>
      <div className="information-wrapper">
        <h1 className="student-name">{name}</h1>
        <div className="work-information">
          <div className="location-container">
            <p>
              <i class="fas fa-map-marker-alt"></i>
              {country}
            </p>
            <p>
              <i class="far fa-compass"></i>
              {jobMode}
            </p>
          </div>
        </div>
      </div>
      <div className="information-status">
        <p>Estado del candidato:</p>
        <h1 className={status}>{status}</h1>
      </div>
    </div>
  );
}

export default StudentInformation;
