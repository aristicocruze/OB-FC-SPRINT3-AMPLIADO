import "./students.css";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import DataTable from "../../components/dataTable/DataTable";
import TopSearch from "../../components/topSearch/TopSearch";
/***
 * This page is for the students
 * we have the left menu, students table, right filter and upper search
 */
function Students() {
  return (
    <div className="students-container">
      <SideNavBar />
      <TopSearch />
      <DataTable />
    </div>
  );
}

export default Students;
