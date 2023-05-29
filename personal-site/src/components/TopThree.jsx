import classes from "./TopThree.module.css";
import PropTypes from "prop-types";

const TopThree = ({ contentObjects }) => {
  TopThree.propTypes = {
    contentObjects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <div className={classes.container}>
      {contentObjects.map((contentObject) => (
        <div
          className={classes.contentCard}
          key={contentObject.title}
        >
          <img
            className={classes.cardImage}
            src={contentObject.image}
            alt={contentObject.title}
          />
          <h4 className={classes.cardTitle}>{contentObject.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default TopThree;
