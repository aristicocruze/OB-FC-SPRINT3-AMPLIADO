import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./studentModal.module.css";

function StudentModal({ handleClose, show }) {
  const [name, setName] = useState("newPost");
  const [email, setEmail] = useState("admisasdn@admin.com");
  const [phoneNumber, setPhoneNumber] = useState("newPhone");
  const [country, setCountry] = useState("newCountry");
  const [city, setCity] = useState("newCity");
  const [transfer, setTransfer] = useState("newtransfer");
  const [attendance, setAttendance] = useState("newattendance");
  const [socialLink, setSocialLink] = useState("newsocialLink");
  const [employment, setEmployment] = useState("pdte");
  const [picture, setPicture] = useState("");
  const [cv, setCv] = useState("newcv");
  const [technologies, setTechnologies] = useState([]);
  const [languages, setLanguages] = useState([]);

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
      employment,
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
    try {
      const res = await axios.post("/candidates", newCandidate);
      //window.location.replace("/single/" + res.data._id); //Change location to the new post.
      console.log(res.data);
    } catch (err) {
      console.log(`Error loading the candidate + ${err}`);
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
            <form onSubmit={handleSubmit}>
              <label className={styles.formLabel}>Nombre y Apellidos</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ej. Aristides Cruz"
                className={styles.completeInput}
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
                  />
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Presencialidad
                  </label>
                  <select
                    placeholder="Elige un país"
                    className={styles.formSelect}
                  >
                    <option>España</option>
                    <option>Francia</option>
                    <option>Mexico</option>
                    <option>Republica Dominicana</option>
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
                  />
                  <label
                    className={`${styles.formLabel} ${styles.labelContainer}`}
                  >
                    Traslado
                  </label>
                  <select
                    placeholder="Elige una opción"
                    className={styles.formSelect}
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
