import "./singleStudent.css";
import { useState } from "react";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import TopSearch from "../../components/topSearch/TopSearch";
import PageRoute from "../../components/pageRoute/PageRoute";
import StudentInformation from "../../components/studentInformation/StudentInformation";

function SingleStudent() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div className="students-container">
      <SideNavBar />
      <div className="inside-content">
        <TopSearch />
        <PageRoute menuName={"Candidatos"} studentName={"Nombre Apellido"} />
        <div className="table-wrapper">
          <div className="student-left">
            <StudentInformation />
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
              {/* Documento CV */}
              <label className="form-label split-label">Documento CV</label>
              <div className="btn-container">
                <button className="btn">
                  <i class="fas fa-cloud-upload-alt btn-icons"></i> Subir de
                  nuevo
                </button>
                <button className="btn delete-btn">
                  <i class="far fa-trash-alt btn-icons"></i> Borrar
                </button>
              </div>
            </form>
          </div>
          <div className="student-right">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Habilidades
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Currículum Vitae
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Procesos
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                {/* Tecnologías */}
                <label className="form-label split-label">Tecnologías</label>
                <input
                  className="form-input form-split-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Escribe para buscar...."
                />

                {/* Idiomas */}
                <label className="form-label split-label">Idiomas</label>
                <input
                  className="form-input form-split-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Escribe para buscar...."
                />
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <object
                  data={require("../../../src/CV.pdf")}
                  type="application/pdf"
                  width="100%"
                  height="750px"
                  aria-labelledby="label1"
                ></object>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <button className="add-btn">
                  <i class="fas fa-plus"></i> Añadir proceso
                </button>
                <div className="offers-wrapper">
                  <div className="offer-container">
                    <p className="offer-title">Título Oferta</p>
                    <p className="offer-title">7 candidatos</p>
                    <p className="offer-date">Fecha plazo</p>
                    <p className="offer-status">PDTE. Entrevista</p>
                  </div>
                </div>
                <div className="offers-wrapper">
                  <div className="offer-container">
                    <p className="offer-title">Título Oferta</p>
                    <p className="offer-title">7 candidatos</p>
                    <p className="offer-date">Fecha plazo</p>
                    <p className="offer-status entrevistado">Entrevistado</p>
                  </div>
                </div>
                <div className="offers-wrapper">
                  <div className="offer-container">
                    <p className="offer-title">Título Oferta</p>
                    <p className="offer-title">7 candidatos</p>
                    <p className="offer-date">Fecha plazo</p>
                    <p className="offer-status entrevistado">Entrevistado</p>
                  </div>
                </div>
                <div className="offers-wrapper">
                  <div className="offer-container">
                    <p className="offer-title">Título Oferta</p>
                    <p className="offer-title">7 candidatos</p>
                    <p className="offer-date">Fecha plazo</p>
                    <p className="offer-status contratado">Contratado</p>
                  </div>
                </div>
                <div className="offers-wrapper">
                  <div className="offer-container">
                    <p className="offer-title">Título Oferta</p>
                    <p className="offer-title">7 candidatos</p>
                    <p className="offer-date">Fecha plazo</p>
                    <p className="offer-status">PDTE. Entrevista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStudent;
