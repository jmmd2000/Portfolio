import classes from "./ModuleTable.module.css";
import PropTypes from "prop-types";

const ModuleTable = ({ modules, title }) => {
  ModuleTable.propTypes = {
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        moduleCode: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
  };

  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {modules.map((module) => (
          <tr key={module.moduleName}>
            <td>{module.moduleName}</td>
            <td>{module.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModuleTable;
