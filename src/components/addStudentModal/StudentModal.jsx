import { useState, useRef } from "react";
import axios from "axios";
import styles from "./studentModal.module.css";

function StudentModal({ handleClose, show }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("España");
  const [city, setCity] = useState("Madrid");
  const [transfer, setTransfer] = useState("Si");
  const [attendance, setAttendance] = useState("Remoto");
  const [socialLink, setSocialLink] = useState("");
  const [picture, setPicture] = useState("");
  const [cv, setCv] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [languages, setLanguages] = useState([]);

  const [isEmailAvailable, setIsEmailAvailable] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();

    const newCandidate = {
      name,
      email,
      phoneNumber,
      country,
      city,
      transfer,
      attendance,
      socialLink,
      picture,
      cv,
      technologies,
      languages,
    };

    if (picture) {
      const data = new FormData();
      data.append("file", picture);
      try {
        const res = await axios.post("/upload", data);
        setPicture(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    // publish.
    if (isEmailAvailable) {
      try {
        const res = await axios.post("/candidates", newCandidate);
        window.location.replace("/single/" + res.data._id); //Change location to the new post.
        console.log(res.data);
      } catch (err) {
        console.log(`Error loading the candidate + ${err}`);
      }
    }
  };

  const checkEmail = async e => {
    setEmail(prev => (prev = emailRef.current.value));
    const emailToCheck = {
      email: emailRef.current.value,
    };
    console.log(emailRef.current.value);
    console.log(email);
    try {
      const res = await axios.post("/candidates/checkemail", emailToCheck);
      res.status === 200
        ? setIsEmailAvailable(true)
        : setIsEmailAvailable(false);
    } catch (err) {
      setIsEmailAvailable(false);
    }
  };
  return (
    <div
      className={
        show
          ? `${styles.modal} ${styles.displayBlock}`
          : `${styles.modal} ${styles.displayNone}`
      }
    >
      <section className={styles.modalMain}>
        <button
          type="button"
          onClick={handleClose}
          className={`${styles.closeModal}`}
        >
          X
        </button>
        <div className={styles.modalWrapper}>
          <div className={styles.modalLeft}>
            <p className={styles.modalTitle}>Nuevo Candidato</p>
            <form>
              <label className={styles.formLabel}>Nombre y Apellidos</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ej. Aristides Cruz"
                className={styles.completeInput}
                onChange={e => setName(e.target.value)}
              />
              <div className={styles.formSplit}>
                <div className={styles.splitLeft}>
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    País
                  </label>
                  <select
                    placeholder="Elige un país"
                    className={styles.formSelect}
                    onChange={e => setCountry(e.target.value)}
                  >
                    <option>España</option>
                    <option>Francia</option>
                    <option>Mexico</option>
                    <option>Republica Dominicana</option>
                  </select>
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Nº Teléfono
                  </label>
                  <input
                    type="text"
                    className={`${styles.formSelect} ${styles.basicTextInput}`}
                    placeholder="Ej: +34 612 34 56 78"
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Presencialidad
                  </label>
                  <select
                    placeholder="Elige un país"
                    className={styles.formSelect}
                    onChange={e => setAttendance(e.target.value)}
                  >
                    <option>Remoto</option>
                    <option>Presencial</option>
                    <option>Hibrido</option>
                  </select>
                </div>
                <div className={styles.splitRight}>
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Ciudad
                  </label>
                  <select
                    placeholder="Elige una ciudad"
                    className={styles.formSelect}
                    onChange={e => setCity(e.target.value)}
                  >
                    <option>Madrid</option>
                    <option>Valencia</option>
                    <option>Galicia</option>
                    <option>Ibiza</option>
                  </select>
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${styles.formSelect} ${styles.basicTextInput}`}
                    placeholder="Ej: user@mail.com"
                    ref={emailRef}
                    onChange={e => {
                      checkEmail(e.target.value);
                    }}
                  />
                  {/* Validacion email */}
                  {isEmailAvailable ? (
                    <p
                      className={`${styles.warningMessage} ${styles.correctMessage}`}
                    >
                      Email disponible
                    </p>
                  ) : (
                    <p
                      className={`${styles.warningMessage} ${styles.incorrectMessage}`}
                    >
                      Email se encuentra en uso
                    </p>
                  )}
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Traslado
                  </label>
                  <select
                    placeholder="Elige una opción"
                    className={styles.formSelect}
                    onChange={e => setTransfer(e.target.value)}
                  >
                    <option>Si</option>
                    <option>No</option>
                    <option>Mixto</option>
                  </select>
                </div>
              </div>
              <label className={styles.formLabel}>Perfil LinkedIn</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enlace a LinkedIn"
                className={styles.completeInput}
                onChange={e => setSocialLink(e.target.value)}
              />
            </form>
          </div>

          <div className={styles.modalRight}>
            <label className={styles.formLabel}>Foto de perfil</label>
            <div className={styles.uploadPicContainer}>
              <button className={styles.basicBtn}>
                <i class="fas fa-cloud-upload-alt"></i>Subir imagen
              </button>
              <p>
                Archivos soportados: .png, .jpg, y .jpeg Tamaño de archivo
                máximo: 2 MB
              </p>
            </div>
            <label className={styles.formLabel}>Documento CV</label>
            <div className={styles.uploadPicContainer}>
              <button className={`${styles.basicBtn} ${styles.largeBtn}`}>
                <i class="fas fa-cloud-upload-alt"></i>Subir documento PDF
              </button>
              <p>Archivos soportados: .pdf Tamaño de archivo máximo: 20 MB</p>
            </div>
            <label className={styles.formLabel}>Etiquetas</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Escribe para buscar...."
              className={`${styles.completeInput} ${styles.tagsInput}`}
              onChange={e => setTechnologies(e.target.value)}
            />
            <label className={styles.formLabel}>Idiomas</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Escribe para buscar...."
              className={`${styles.completeInput} ${styles.tagsInput}`}
              onChange={e => setLanguages(e.target.value)}
            />
          </div>
        </div>
        {/* Footer */}
        <div className={styles.ft}>
          <button
            className={`${styles.basicBtn} ${styles.footerBtn}`}
            onClick={handleSubmit}
          >
            Guardar
          </button>
          <button
            className={`${styles.basicBtn} ${styles.footerBtn}`}
            onClick={handleClose}
          >
            Cancelar
          </button>
        </div>
      </section>
    </div>
  );
}

export default StudentModal;
