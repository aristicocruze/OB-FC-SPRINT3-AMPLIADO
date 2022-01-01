import MockData from "../../MOCK_DATA.json";
import "./dataTable.css";
import { useState } from "react";

function DataTable() {
  const [data, setData] = useState(MockData);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");

  const sorting = col => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? -1 : 1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="data-table">
      <div className="top-dataTable">
        {/* Search input */}
        <label>Alumnos</label>
        <input
          type="text"
          placeholder="Buscar por Nombre, Email o Palabra clave..."
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="bottom-dataTable">
        <table class="table table-sortable">
          <thead>
            <tr>
              <th onClick={() => sorting("Nombre")} className="filter">
                Nombre <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("Ciudad")} className="filter">
                Ciudad <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("Pais")} className="filter">
                Pais <i class="fas fa-sort"></i>
              </th>
              <th>Telefono</th>
              <th onClick={() => sorting("Email")} className="filter">
                Email <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("Etiquetas")} className="filter">
                Etiquetas <i class="fas fa-sort"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter(val => {
                if (search === "") {
                  return val;
                } else if (
                  val.Nombre.toLowerCase().includes(search.toLowerCase()) ||
                  val.Email.toLowerCase().includes(search.toLowerCase()) ||
                  val.Etiquetas.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(m => (
                <tr key={m.id}>
                  <td>{m.Nombre}</td>
                  <td>{m.Ciudad}</td>
                  <td>{m.Pais}</td>
                  <td>{m.Telefono}</td>
                  <td>{m.Email}</td>
                  <td className="tag-container">{m.Etiquetas}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
