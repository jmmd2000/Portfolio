import classes from "./Chip.module.css";
import PropTypes from "prop-types";

const Chip = ({ label }) => {
  Chip.propTypes = {
    label: PropTypes.string.isRequired,
  };
  return (
    <div className={classes.chip}>
      <span>{label}</span>
    </div>
  );
};

export default Chip;
