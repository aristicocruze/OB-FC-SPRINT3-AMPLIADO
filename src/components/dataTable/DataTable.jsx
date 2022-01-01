import MockData from "../../MOCK_DATA.json";
import "./dataTable.css";
import { useState } from "react";

function DataTable() {
  const [search, setSearch] = useState("");
  console.log(search);

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
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Pais</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Etiquetas</th>
            </tr>
          </thead>
          <tbody>
            {MockData.filter(val => {
              if (search === "") {
                return val;
              } else if (
                val.Nombre.toLowerCase().includes(search.toLowerCase()) ||
                val.Email.toLowerCase().includes(search.toLowerCase()) ||
                val.Etiquetas.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            }).map(m => (
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
