import "./topSearch.css";

function TopSearch() {
  return (
    <div className="top-container">
      <div className="top-container-search">
        <i class="fas fa-search"></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar por Candidatos por Nombre, DNI, etc..."
        />
      </div>
      <div className="top-container-profile">
        <p> NA </p>
        <h4>
          UserName <i className="fas fa-chevron-down"></i>
        </h4>
      </div>
    </div>
  );
}

export default TopSearch;
