import "./sideFilter.css";

function SideFilter() {
  return (
    <div className="filter-wrapper">
      <div className="filter-title">
        <h1>Filtros de búsqueda</h1>
        <i class="far fa-trash-alt"></i>
      </div>
      <div className="filter-technologies">
        <h1>Tecnologías</h1>
        <div className="technologies-input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Escribe para buscar...."
          />
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="filter-country">
        <h1>País</h1>
        <div className="country-select">
          <select>
            <option>Espana</option>
            <option>Francia</option>
            <option>Canada</option>
            <option>Dominican Republic</option>
            <option>Mexico</option>
          </select>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="filter-country">
        <h1>Ciudad</h1>
        <div className="country-select">
          <select>
            <option>Valencia</option>
            <option>Madrid</option>
            <option>Sevilla</option>
            <option>Leon</option>
          </select>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="filter-mode">
        <h1 className="selection-title">Presencial / a distancia</h1>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          Presencial
        </label>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          En remoto
        </label>
      </div>
      <div className="filter-mode">
        <h1 className="selection-title">Posibilidad traslado</h1>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          Si
        </label>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          No
        </label>
      </div>
      <div className="filter-mode">
        <h1 className="selection-title">Estado</h1>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          Contratado
        </label>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          Pendiente de Ofertas
        </label>
        <label>
          <input type="checkbox" name="" id="" className="check-input" />
          Preseleccionado
        </label>
      </div>
    </div>
  );
}

export default SideFilter;
