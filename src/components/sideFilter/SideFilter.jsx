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
    </div>
  );
}

export default SideFilter;
