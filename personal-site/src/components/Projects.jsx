import classes from "./Projects.module.css";
import Chip from "./Chip";
const Projects = () => {
  return (
    <div className={classes.projectsContainer}>
      <div className={classes.project}>
        <img
          src="./assets/projects/music.png"
          alt="Image of my music review website"
          className={classes.projectImage}
        />
        <h3 className={classes.projectName}>JamesReviewsMusic</h3>
        <p className={classes.projectDescription}>
          This site is built to allow me to review music and share my thoughts.
        </p>
        <div className={classes.chipContainer}>
          <Chip label={"React"} />
          <Chip label={"Firebase"} />
          <Chip label={"Spotify API"} />
        </div>
        <a
          href="http://jamesreviewsmusic.online/"
          className={classes.projectLink}
        >
          View Project
        </a>
      </div>

      <div className={classes.project}>
        <img
          src="./assets/projects/movies.png"
          alt="Image of my movie rating app"
          className={classes.projectImagePortrait}
        />
        <h3 className={classes.projectName}>RateFlix</h3>
        <p className={classes.projectDescription}>
          This app was my final project in Maynooth. It allows users to sign up,
          search for movies, add them to their watchlist, and rate them.
        </p>
        <div className={classes.chipContainer}>
          <Chip label={"Dart"} />
          <Chip label={"Flutter"} />
          <Chip label={"Firebase"} />
          <Chip label={"TMDB API"} />
        </div>
        <a
          href="https://github.com/jmmd2000/MovieApp"
          className={classes.projectLink}
        >
          View Project
        </a>
      </div>

      <div className={classes.project}>
        <img
          src="./assets/projects/sorting.png"
          alt="Image of my movie rating app"
          className={classes.projectImage}
        />
        <h3 className={classes.projectName}>Sorting Visualiser</h3>
        <p className={classes.projectDescription}>
          This lets the user visualise how different sorting algorithms work.
        </p>
        <div className={classes.chipContainer}>
          <Chip label={"React"} />
          <Chip label={"HTML"} />
          <Chip label={"CSS"} />
        </div>
        <a
          href="https://jamesmddoyle.com/project/sorting-visualiser/"
          className={classes.projectLink}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projects;
