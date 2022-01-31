import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./singleStudent.css";
import styles from "./singleStudent.module.css";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import TopSearch from "../../components/topSearch/TopSearch";
import PageRoute from "../../components/pageRoute/PageRoute";
import StudentInformation from "../../components/studentInformation/StudentInformation";

function SingleStudent() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //to get the id of the post
  const PF = "http://localhost:5000";
  const { user } = useContext(Context);
  const [candidate, setCandidate] = useState({});
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    const fetchCandidate = async () => {
      const res = await axios.get("/candidates/" + path);
      setCandidate(res.data);
    };
    fetchCandidate();
  }, [path]);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div className={styles.studentsContainer}>
      <SideNavBar />
      <div className={styles.insideContent}>
        <TopSearch />
        <PageRoute menuName={"Candidatos"} studentName={"Nombre Apellido"} />
        <div className={styles.tableWrapper}>
          <div className={styles.studentLeft}>
            <StudentInformation
              name={candidate.name}
              country={`${candidate.city}, ${candidate.country}`}
              jobMode={"En remoto, Sin traslado"}
              status={"CONTRATADO"}
            />

            <form className={styles.form}>
              <label className={styles.formLabel}>Nombre y Apellidos</label>
              <input
                className={styles.singleFormInput}
                type="text"
                name=""
                id=""
                placeholder="Nombre Alumno"
              />
              <div className={styles.formWrapper}>
                <div className={styles.formLeft}>
                  {/* Nº Teléfono */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Nº Teléfono
                  </label>
                  <input
                    className={`${styles.formInput} ${styles.formSplitInput}`}
                    type="text"
                    name=""
                    id=""
                    placeholder="+34 654 85 52 48"
                  />
                  {/* Pais */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    País
                  </label>
                  <select
                    placeholder="España"
                    className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                  >
                    <option>España</option>
                    <option>Francia</option>
                    <option>Republica Dominicana</option>
                    <option>Colombia</option>
                  </select>
                  {/* Traslado */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Traslado
                  </label>
                  <select
                    placeholder="No"
                    className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                  >
                    <option>Si</option>
                    <option>No</option>
                    <option>Mixto</option>
                  </select>
                  {/* Enlace LinkedIn */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Enlace a LinkedIn
                  </label>
                  <div className={styles.linkContainer}>
                    <input
                      className={`${styles.formInput} ${styles.formSplitInput}`}
                      type="text"
                      name=""
                      id=""
                      placeholder="https://linkedIn.com/user_Id343564543213456"
                    />
                    <i class="fas fa-link"> </i>
                  </div>
                </div>
                <div className={styles.formRight}>
                  {/* Email */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Email
                  </label>
                  <input
                    className={`${styles.formInput} ${styles.formSplitInput}`}
                    type="text"
                    name=""
                    id=""
                    placeholder="hcliment@gmail.com"
                  />
                  {/* Ciudad */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Ciudad
                  </label>
                  <select
                    placeholder="Valencia"
                    className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                  >
                    <option>Madrid</option>
                    <option>Valencia</option>
                    <option>Malaga</option>
                    <option>Galicia</option>
                  </select>
                  {/* Presencialidad */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Presencialidad
                  </label>
                  <select
                    placeholder="Remoto"
                    className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                  >
                    <option>En Remoto</option>
                    <option>Presencial</option>
                    <option>Mixto</option>
                  </select>
                  {/* Estado Laboral */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Estado laboral
                  </label>
                  <select
                    placeholder="Estado laboral"
                    className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                  >
                    <option>Contratado</option>
                    <option>En proceso</option>
                    <option>Desempleado</option>
                  </select>
                </div>
              </div>
              {/* Documento CV */}
              <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                Documento CV
              </label>
              <div>
                <button className={styles.btn}>
                  <i class="fas fa-cloud-upload-alt"></i> Subir de nuevo
                </button>
                <button className={`${styles.btn} ${styles.deleteBtn}`}>
                  <i class="far fa-trash-alt "></i> Borrar
                </button>
              </div>
            </form>
          </div>
          {/* Tabs */}
          <div className={styles.studentRight}>
            <div className={styles.blocTabs}>
              <button
                className={toggleState === 1 ? `tabs active-tabs` : "tabs"}
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
                <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                  Tecnologías
                </label>
                <input
                  className={`${styles.formInput} ${styles.formSplitInput}`}
                  type="text"
                  name=""
                  id=""
                  placeholder="Escribe para buscar...."
                />

                {/* Idiomas */}
                <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                  Idiomas
                </label>
                <input
                  className={`${styles.formInput} ${styles.formSplitInput}`}
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
