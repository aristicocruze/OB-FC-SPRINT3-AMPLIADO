import "./students.css";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import DataTable from "../../components/dataTable/DataTable";
import TopSearch from "../../components/topSearch/TopSearch";
import SideFilter from "../../components/sideFilter/SideFilter";
/***
 * This page is for the students
 * we have the left menu, students table, right filter and upper search
 */
function Students() {
  return (
    <div className="students-container">
      <SideNavBar />
      <div className="inside-content">
        <TopSearch />
        <div className="table-wrapper">
          <DataTable />
          <SideFilter />
        </div>
      </div>
    </div>
  );
}

export default Students;
