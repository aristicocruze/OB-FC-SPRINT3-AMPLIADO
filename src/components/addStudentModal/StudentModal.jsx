import styles from "./studentModal.module.css";

function StudentModal({ handleClose, show }) {
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
          <button className={`${styles.basicBtn} ${styles.footerBtn}`}>
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
