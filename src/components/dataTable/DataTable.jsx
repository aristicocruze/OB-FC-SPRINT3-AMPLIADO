import { useState, useEffect } from "react";
import axios from "axios";
import StudentModal from "../addStudentModal/StudentModal";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./dataTable.css";

function DataTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [handleShow, setHandleShow] = useState(false);
  const { location } = useLocation();

  // Get candidates data
  useEffect(() => {
    const fetchCandidates = async () => {
      const res = await axios.get("/candidates");
      setData(res.data);
      //console.log(res.data);
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
        <table className="table table-sortable">
          <thead>
            <tr>
              <th onClick={() => sorting("name")} className="filter">
                Nombre <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("city")} className="filter">
                Ciudad <i class="fas fa-sort"></i>
              </th>

              <th>Telefono</th>
              <th onClick={() => sorting("email")} className="filter">
                Email <i class="fas fa-sort"></i>
              </th>
              <th onClick={() => sorting("technologies")} className="filter">
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
                  val.name.toLowerCase().includes(search.toLowerCase()) ||
                  val.email.toLowerCase().includes(search.toLowerCase()) ||
                  val.technologies.includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(m => (
                <tr key={m.id}>
                  <td>
                    <Link to={`/single/${m._id}`} className="link">
                      {m.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/single/${m._id}`} className="link">
                      {`${m.city}, ${m.country}`}
                    </Link>
                  </td>

                  <td>
                    <Link to={`/single/${m._id}`} className="link">
                      {m.phoneNumber}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/single/${m._id}`} className="link">
                      {m.email}
                    </Link>
                  </td>
                  <td className="tag-container">
                    {m.technologies
                      .filter((item, index) => index < 2)
                      .map((tech, item) => {
                        return (
                          <td key={item} className="tag">
                            {`${tech}`}
                          </td>
                        );
                      })}
                    <h1 className="tags-counter">{`+ ${
                      m.technologies.length > 1
                        ? m.technologies.length - 2
                        : m.technologies.length
                    }`}</h1>
                  </td>
                  <td className="">
                    <div className={`${m.employment} status`}>
                      {m.employment}
                    </div>
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
