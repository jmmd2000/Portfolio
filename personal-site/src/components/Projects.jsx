import classes from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={classes.projectsContainer}>
      <div className={classes.project}>
        <h3 className={classes.projectName}>JamesReviewsMusic</h3>
        <img
          src="./assets/projects/music.png"
          alt="Image of my music review website"
          className={classes.projectImage}
        />
        <p className={classes.projectDescription}>
          This site is built to allow me to review music and share my thoughts.
          Built with React, Firebase and the Spotify API.
        </p>
        <a
          href="http://jamesreviewsmusic.online/"
          className={classes.projectLink}
        >
          View Project
        </a>
      </div>

      <div className={classes.project}>
        <h3 className={classes.projectName}>RateFlix</h3>
        <img
          src="./assets/projects/movies.png"
          alt="Image of my movie rating app"
          className={classes.projectImagePortrait}
        />
        <p className={classes.projectDescription}>
          This app was my final project in Maynooth. It allows users to sign up,
          search for movies, add them to their watchlist, and rate them. Built
          with Dart/Flutter, Firebase and the TMDB API.
        </p>
        <a
          href="https://github.com/jmmd2000/MovieApp"
          className={classes.projectLink}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projects;
