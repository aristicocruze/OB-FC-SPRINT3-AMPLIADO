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
import Pdf from "../../components/pdf/Pdf";

function SingleStudent() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //to get the id of the post
  const PF = "http://localhost:5050/images/";
  const { user } = useContext(Context);
  const [candidate, setCandidate] = useState({});
  const [toggleState, setToggleState] = useState(1);

  const [editMode, setEditMode] = useState(false);
  // Forms states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("España");
  const [city, setCity] = useState("Madrid");
  const [transfer, setTransfer] = useState("Si");
  const [attendance, setAttendance] = useState("Remoto");
  const [employment, setEmployment] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [picture, setPicture] = useState("");
  const [cv, setCv] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchCandidate = async () => {
      const res = await axios.get("/candidates/" + path);
      setCandidate(res.data);
      // states for elements in the form
      setName(res.data.name);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phoneNumber);
      setCountry(res.data.country);
      setCity(res.data.city);
      setTransfer(res.data.transfer);
      setAttendance(res.data.attendance);
      setEmployment(res.data.employment);
      setSocialLink(res.data.socialLink);
      setPicture(res.data.picture);
      setCv(res.data.cv);
      setTechnologies(res.data.technologies);
      setLanguages(res.data.languages);
    };
    fetchCandidate();
  }, [path]);

  // update form data
  const updateForm = async () => {
    const updatedCandidate = {
      name,
      email,
      phoneNumber,
      country,
      city,
      transfer,
      attendance,
      employment,
      socialLink,
      picture,
      cv,
      technologies,
      languages,
    };
    try {
      const res = await axios.put("/candidates/" + path, updatedCandidate);
      window.location.replace("/single/" + res.data._id); //render post again with updated data.
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCandidate = async () => {
    try {
      await axios.delete("/candidates/" + path);
      window.location.replace("/"); //Change location to home.
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div className={styles.studentsContainer}>
      <SideNavBar />
      <div className={styles.insideContent}>
        <TopSearch />
        <PageRoute menuName={"Candidatos"} studentName={candidate.name} />
        <div className={styles.tableWrapper}>
          <div className={styles.studentLeft}>
            <StudentInformation
              name={candidate.name}
              country={`${candidate.city}, ${candidate.country}`}
              jobMode={candidate.attendance}
              status={candidate.employment}
              profilePic={`${PF}${candidate.picture}`}
            />
            <div className={styles.upperBtns}>
              <div className="editBtn">
                {/* Edit Button */}
                <button
                  className={styles.editModeBtn}
                  onClick={() =>
                    editMode ? setEditMode(false) : setEditMode(true)
                  }
                >
                  Editar
                </button>
                {/* Guardar */}
                {editMode && (
                  <button
                    className={`${styles.editModeBtn} ${styles.saveBtn}`}
                    onClick={updateForm}
                  >
                    Guardar
                  </button>
                )}
              </div>
              <div className={styles.deleteWrapper}>
                {/* Eliminar */}
                {editMode && (
                  <button
                    className={`${styles.editModeBtn}`}
                    onClick={deleteCandidate}
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </div>
            {/* Edit label */}
            {editMode && (
              <p className={styles.editLabel}>Editando Formulario</p>
            )}{" "}
            <form className={styles.form}>
              {/* Nombre y apellido */}
              <label className={styles.formLabel}>Nombre y Apellidos</label>
              {editMode ? (
                <input
                  className={`${styles.singleFormInput} ${styles.editForm}`}
                  type="text"
                  name=""
                  id=""
                  placeholder="Nombre Alumno"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              ) : (
                <input
                  className={styles.singleFormInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="Nombre Alumno"
                  value={candidate.name}
                  readOnly
                />
              )}

              <div className={styles.formWrapper}>
                <div className={styles.formLeft}>
                  {/* Nº Teléfono */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Nº Teléfono
                  </label>
                  {editMode ? (
                    <input
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.editForm}`}
                      type="text"
                      name=""
                      id=""
                      placeholder="+34 654 85 52 48"
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                  ) : (
                    <input
                      className={`${styles.formInput} ${styles.formSplitInput}`}
                      type="text"
                      name=""
                      id=""
                      placeholder="+34 654 85 52 48"
                      value={candidate.phoneNumber}
                      readOnly
                    />
                  )}

                  {/* Pais */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    País
                  </label>
                  {editMode ? (
                    <select
                      placeholder="España"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect} ${styles.editForm}`}
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                    >
                      <option>España</option>
                      <option>Francia</option>
                      <option>Republica Dominicana</option>
                      <option>Colombia</option>
                    </select>
                  ) : (
                    <select
                      placeholder="España"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                      value={candidate.country}
                      readOnly
                    >
                      <option>España</option>
                      <option>Francia</option>
                      <option>Republica Dominicana</option>
                      <option>Colombia</option>
                    </select>
                  )}

                  {/* Traslado */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Traslado
                  </label>
                  {editMode ? (
                    <select
                      placeholder="No"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect} ${styles.editForm}`}
                      value={transfer}
                      onChange={e => setTransfer(e.target.value)}
                    >
                      <option>Si</option>
                      <option>No</option>
                      <option>Mixto</option>
                    </select>
                  ) : (
                    <select
                      placeholder="No"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                      value={candidate.transfer}
                      readOnly
                    >
                      <option>Si</option>
                      <option>No</option>
                      <option>Mixto</option>
                    </select>
                  )}

                  {/* Enlace LinkedIn */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Enlace a LinkedIn
                  </label>
                  {editMode ? (
                    <div className={styles.linkContainer}>
                      <input
                        className={`${styles.formInput} ${styles.formSplitInput} ${styles.editForm}`}
                        type="text"
                        name=""
                        id=""
                        placeholder="https://linkedIn.com/user_Id343564543213456"
                        value={socialLink}
                        onChange={e => setSocialLink(e.target.value)}
                      />
                      <i class="fas fa-link"> </i>
                    </div>
                  ) : (
                    <div className={styles.linkContainer}>
                      <input
                        className={`${styles.formInput} ${styles.formSplitInput}`}
                        type="text"
                        name=""
                        id=""
                        placeholder="https://linkedIn.com/user_Id343564543213456"
                        value={candidate.socialLink}
                        readOnly
                      />
                      <i class="fas fa-link"> </i>
                    </div>
                  )}
                </div>
                <div className={styles.formRight}>
                  {/* Email */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Email
                  </label>
                  {editMode ? (
                    <input
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.editForm}`}
                      type="text"
                      name=""
                      id=""
                      placeholder="hcliment@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  ) : (
                    <input
                      className={`${styles.formInput} ${styles.formSplitInput}`}
                      type="text"
                      name=""
                      id=""
                      placeholder="hcliment@gmail.com"
                      value={candidate.email}
                      readOnly
                    />
                  )}
                  {/* Ciudad */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Ciudad
                  </label>
                  {editMode ? (
                    <select
                      placeholder="Valencia"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect} ${styles.editForm}`}
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    >
                      <option>Madrid</option>
                      <option>Valencia</option>
                      <option>Malaga</option>
                      <option>Galicia</option>
                    </select>
                  ) : (
                    <select
                      placeholder="Valencia"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                      value={candidate.city}
                      readOnly
                    >
                      <option>Madrid</option>
                      <option>Valencia</option>
                      <option>Malaga</option>
                      <option>Galicia</option>
                    </select>
                  )}

                  {/* Presencialidad */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Presencialidad
                  </label>
                  {editMode ? (
                    <select
                      placeholder="Remoto"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect} ${styles.editForm}`}
                      value={attendance}
                      onChange={e => setAttendance(e.target.value)}
                    >
                      <option>Remoto</option>
                      <option>Presencial</option>
                      <option>Hibrido</option>
                    </select>
                  ) : (
                    <select
                      placeholder="Remoto"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                      value={candidate.attendance}
                      readOnly
                    >
                      <option>Remoto</option>
                      <option>Presencial</option>
                      <option>Hibrido</option>
                    </select>
                  )}

                  {/* Estado Laboral */}
                  <label className={`${styles.formLabel} ${styles.splitLabel}`}>
                    Estado laboral
                  </label>
                  {editMode ? (
                    <select
                      placeholder="Estado laboral"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect} ${styles.editForm}`}
                      value={employment}
                      onChange={e => setEmployment(e.target.value)}
                    >
                      <option>Contratado</option>
                      <option>pdte</option>
                      <option>Preseleccionado</option>
                    </select>
                  ) : (
                    <select
                      placeholder="Estado laboral"
                      className={`${styles.formInput} ${styles.formSplitInput} ${styles.formSelect}`}
                      value={candidate.employment}
                      readOnly
                    >
                      <option>Contratado</option>
                      <option>pdte</option>
                      <option>Preseleccionado</option>
                    </select>
                  )}
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
                <div className="tech-wrapper">
                  {candidate.technologies &&
                    candidate.technologies.map(tech => (
                      <div className="tech-container">
                        <h1 className="display-tech">{tech}</h1>
                      </div>
                    ))}
                </div>

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
                <div className="tech-wrapper">
                  {candidate.languages &&
                    candidate.languages.map(lang => (
                      <div className="tech-container">
                        <h1 className="display-tech">{lang}</h1>
                      </div>
                    ))}
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                {/* Render PDF file */}
                {candidate.cv ? (
                  <div className="pdf-display-container">
                    <Pdf directory={`${PF}${candidate.cv}`} />
                  </div>
                ) : (
                  <p>Aun no se ha agregado el cv</p>
                )}
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
