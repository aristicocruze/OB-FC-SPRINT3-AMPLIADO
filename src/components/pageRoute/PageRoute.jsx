import "./pageRoute.css";

/**
 * This component is the page route in the top *
 * Ej. Candidatos < Aristides Cruz
 */

function PageRoute({ menuName, studentName }) {
  return (
    <div className="pageRoute">
      <p className="menuName">
        {menuName} <i class="fas fa-chevron-left"></i>
      </p>
      <p className="studentName">{studentName}</p>
    </div>
  );
}

export default PageRoute;
