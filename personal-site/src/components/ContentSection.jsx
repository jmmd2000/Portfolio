import classes from "./ContentSection.module.css";
import PropTypes from "prop-types";

const ContentSection = ({ title, subtitle, id, children }) => {
  ContentSection.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <section
      className={classes.section}
      id={id}
    >
      <p className={classes.sectionSubtitle}>{subtitle}</p>
      <h1 className={classes.sectionTitle}>{title}</h1>
      <div className={classes.sectionContent}>{children}</div>
    </section>
  );
};

export default ContentSection;
