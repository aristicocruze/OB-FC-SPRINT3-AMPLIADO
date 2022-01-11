import React from "react";
import "./studentModal.css";

function StudentModal({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose} className="close-modal">
          X
        </button>
        <div className="modal-wrapper">
          <div className="modal-left">
            <p className="modal-title">Nuevo Candidato</p>
            <form>
              <label className="form-label">Nombre y Apellidos</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ej. Aristides Cruz"
                className="complete-input"
              />
              <div className="form-split">
                <div className="split-left">
                  <label className="form-label label-container">País</label>
                  <select placeholder="Elige un país" className="form-select">
                    <option>España</option>
                    <option>Francia</option>
                    <option>Mexico</option>
                    <option>Republica Dominicana</option>
                  </select>
                  <label className="form-label label-container">
                    Nº Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-select basic-text-input"
                    placeholder="Ej: +34 612 34 56 78"
                  />
                  <label className="form-label label-container">
                    Presencialidad
                  </label>
                  <select placeholder="Elige un país" className="form-select">
                    <option>España</option>
                    <option>Francia</option>
                    <option>Mexico</option>
                    <option>Republica Dominicana</option>
                  </select>
                </div>
                <div className="split-right">
                  <label className="form-label label-container">Ciudad</label>
                  <select
                    placeholder="Elige una ciudad"
                    className="form-select"
                  >
                    <option>Madrid</option>
                    <option>Valencia</option>
                    <option>Galicia</option>
                    <option>Ibiza</option>
                  </select>
                  <label className="form-label label-container">Email</label>
                  <input
                    type="text"
                    className="form-select basic-text-input"
                    placeholder="Ej: user@mail.com"
                  />
                  <label className="form-label label-container">Traslado</label>
                  <select
                    placeholder="Elige una opción"
                    className="form-select"
                  >
                    <option>Si</option>
                    <option>No</option>
                    <option>Mixto</option>
                  </select>
                </div>
              </div>
              <label className="form-label">Perfil LinkedIn</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enlace a LinkedIn"
                className="complete-input"
              />
            </form>
          </div>

          <div className="modal-right">
            <label className="form-label">Foto de perfil</label>
            <div className="upload-pic-container">
              <button className="basic-btn">
                <i class="fas fa-cloud-upload-alt upload-icon"></i>Subir imagen
              </button>
              <p>
                Archivos soportados: .png, .jpg, y .jpeg Tamaño de archivo
                máximo: 2 MB
              </p>
            </div>
            <label className="form-label">Documento CV</label>
            <div className="upload-pic-container">
              <button className="basic-btn large-btn">
                <i class="fas fa-cloud-upload-alt upload-icon"></i>Subir
                documento PDF
              </button>
              <p>Archivos soportados: .pdf Tamaño de archivo máximo: 20 MB</p>
            </div>
            {/* <label className="form-label">Etiquetas</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Escribe para buscar...."
              className="complete-input"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentModal;
