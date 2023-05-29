import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div
      className={classes.heroContainer}
      id="hero"
    >
      <div className={classes.heroContent}>
        <img
          src="/src/assets/profile.webp"
          alt="An image of me, James Doyle."
          className={classes.heroImage}
        />
        <div className={classes.heroTextContainer}>
          <h1 className={classes.heroTitle}>Hey there! 👋</h1>
          <p className={classes.heroText}>
            I&apos;m James, a passionate frontend developer based in Dublin,
            Ireland.
          </p>
          <p className={classes.heroText}>
            With a lifelong love for web development that began in my childhood,
            I enjoy creating dynamic web applications using React. From crafting
            captivating user experiences to writing clean and efficient code, I
            bring enthusiasm and a fresh perspective to every project.
          </p>
          <p className={classes.heroText}>
            If you&apos;re seeking a dedicated developer to join your team,
            let&apos;s connect and discuss how I can contribute to your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
