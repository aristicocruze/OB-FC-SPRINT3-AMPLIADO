import { useState, useEffect } from "react";
import axios from "axios";
import StudentModal from "../addStudentModal/StudentModal";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./dataTable.css";
import MockData from "../../MOCK_DATA.json";

function DataTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [handleShow, setHandleShow] = useState(false);
  const { location } = useLocation();

  useEffect(() => {
    const fetchCandidates = async () => {
      const res = await axios.get("/candidates");
      setData(res.data);
      console.log(res.data);
    };
    fetchCandidates();
  }, [location]);

  const showModal = () => {
    setHandleShow(true);
  };

  const hideModal = () => {
    setHandleShow(false);
  };

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
        <label>Candidatos</label>
        {/* <i class="fas fa-search"></i> */}
        <input
          type="text"
          placeholder="Buscar por Nombre, Email o Palabra clave..."
          onChange={e => {
            setSearch(e.target.value);
          }}
        />

        <StudentModal show={handleShow} handleClose={hideModal} />

        <button onClick={showModal}>
          <i class="fas fa-plus"></i> Añadir alumnos
        </button>
      </div>
      <div className="bottom-dataTable scroll">
        <table class="table table-sortable">
          <thead>
            <tr>
              <th onClick={() => sorting("Nombre")} className="filter">
                Nombre <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("Ciudad")} className="filter">
                Ciudad <i class="fas fa-sort"></i>
              </th>

              <th>Telefono</th>
              <th onClick={() => sorting("Email")} className="filter">
                Email <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("Etiquetas")} className="filter">
                Etiquetas <i class="fas fa-sort"></i>
              </th>
              <th>Estado</th>
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
                  <td>
                    <Link to="/single" className="link">
                      {m.name}
                    </Link>
                  </td>
                  <td>
                    <Link to="/single" className="link">
                      {`${m.city}, ${m.country}`}
                    </Link>
                  </td>

                  <td>
                    <Link to="/single" className="link">
                      {m.phoneNumber}
                    </Link>
                  </td>
                  <td>
                    <Link to="/single" className="link">
                      {m.email}
                    </Link>
                  </td>
                  <td className="tag-container">
                    {m.technologies.map(tech => {
                      return <td className="tag">{tech}</td>;
                    })}
                  </td>

                  <td>{m.employment}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
