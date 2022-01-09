import "./singleStudent.css";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import TopSearch from "../../components/topSearch/TopSearch";
import PageRoute from "../../components/pageRoute/PageRoute";

function SingleStudent() {
  return (
    <div className="students-container">
      <SideNavBar />
      <div className="inside-content">
        <TopSearch />
        <PageRoute menuName={"Candidatos"} studentName={"Nombre Apellido"} />
        <div className="table-wrapper">
          <div className="student-left">
            <form>
              <label className="form-label">Nombre y Apellidos</label>
              <input
                className="form-input"
                type="text"
                name=""
                id=""
                placeholder="Nombre Alumno"
              />
              <div className="form-wrapper">
                <div className="form-left">
                  {/* Nº Teléfono */}
                  <label className="form-label split-label">Nº Teléfono</label>
                  <input
                    className="form-input form-split-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="+34 654 85 52 48"
                  />
                  {/* Pais */}
                  <label className="form-label split-label">País</label>
                  <select
                    placeholder="España"
                    className="form-input form-split-input form-select"
                  >
                    <option>España</option>
                    <option>Francia</option>
                    <option>Republica Dominicana</option>
                    <option>Colombia</option>
                  </select>
                  {/* Traslado */}
                  <label className="form-label split-label">Traslado</label>
                  <select
                    placeholder="No"
                    className="form-input form-split-input form-select"
                  >
                    <option>Si</option>
                    <option>No</option>
                    <option>Mixto</option>
                  </select>
                  {/* Enlace LinkedIn */}
                  <label className="form-label split-label">
                    Enlace a LinkedIn
                  </label>
                  <div className="link-container">
                    <input
                      className="form-input form-split-input"
                      type="text"
                      name=""
                      id=""
                      placeholder="https://linkedIn.com/user_Id343564543213456"
                    />
                    <i class="fas fa-link"> </i>
                  </div>
                </div>
                <div className="form-right">
                  {/* Email */}
                  <label className="form-label split-label">Email</label>
                  <input
                    className="form-input form-split-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="hcliment@gmail.com"
                  />
                  {/* Ciudad */}
                  <label className="form-label split-label">Ciudad</label>
                  <select
                    placeholder="Valencia"
                    className="form-input form-split-input form-select"
                  >
                    <option>Madrid</option>
                    <option>Valencia</option>
                    <option>Malaga</option>
                    <option>Galicia</option>
                  </select>
                  {/* Presencialidad */}
                  <label className="form-label split-label">
                    Presencialidad
                  </label>
                  <select
                    placeholder="Remoto"
                    className="form-input form-split-input form-select"
                  >
                    <option>En Remoto</option>
                    <option>Presencial</option>
                    <option>Mixto</option>
                  </select>
                  {/* Estado Laboral */}
                  <label className="form-label split-label">
                    Estado laboral
                  </label>
                  <select
                    placeholder="Estado laboral"
                    className="form-input form-split-input form-select"
                  >
                    <option>Contratado</option>
                    <option>En proceso</option>
                    <option>Desempleado</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="student-right">tabs</div>
        </div>
      </div>
    </div>
  );
}

export default SingleStudent;
