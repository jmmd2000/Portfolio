import classes from "./JobDescription.module.css";
import PropTypes from "prop-types";

const JobDescription = ({ job }) => {
  JobDescription.propTypes = {
    job: PropTypes.object.isRequired,
  };

  return (
    <div className={classes.descriptionContainer}>
      {/* <hr /> */}
      <h2 className={classes.jobTitle}>{job.title}</h2>
      <h3 className={classes.companyName}>{job.company.name}</h3>
      <p className={classes.companyAddress}>{job.company.address}</p>
      <p className={classes.companyNumber}>{job.company.number}</p>
      <a
        href={"https://" + job.company.website}
        className={classes.companyLink}
      >
        {job.company.website}
      </a>
      <p className={classes.jobDescription}>{job.description}</p>
      <h2 className={classes.jobTasksIntro}>Day to day tasks included:</h2>
      <ul className={classes.jobTasks}>
        {job.tasks.map((task) => (
          <li
            key={task}
            className={classes.task}
          >
            {task}
          </li>
        ))}
      </ul>
      {/* <hr /> */}
    </div>
  );
};

export default JobDescription;
