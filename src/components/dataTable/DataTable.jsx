import "./dataTable.css";
import MockData from "../../MOCK_DATA.json";

function DataTable() {
  return (
    <div className="data-table">
      <div className="top-dataTable">{/* Search input and Buttons */}</div>
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
            {MockData.map(m => (
              <tr key={m.id}>
                <td>{m.Nombre}</td>
                <td>{m.Ciudad}</td>
                <td>{m.Pais}</td>
                <td>{m.Telefono}</td>
                <td>{m.Email}</td>
                <td className="tag-container">
                  <td className="tag"> {m.Etiquetas}</td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
