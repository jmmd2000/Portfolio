import classes from "./HeroSection.module.css";

import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <div
      className={classes.heroContainer}
      id="hero"
    >
      <div className={classes.heroTopContent}>
        <img
          src="./assets/profile.webp"
          alt="An image of me, James Doyle."
          className={classes.heroImage}
        />
        <div className={classes.introContainer}>
          <p className={classes.heroSubtitle}>Hey there!</p>
          <h1 className={classes.heroTitle}>I&apos;m James,</h1>
          <p className={classes.introText}>
            a passionate frontend developer based in Dublin, Ireland.
          </p>
        </div>
      </div>
      <div className={classes.heroBottomContent}>
        <p className={classes.heroText}>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p className={classes.heroSubtext}>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <div className={classes.heroIcons}>
          <a href="https://github.com/jmmd2000">
            <GithubLogo
              className={classes.icon}
              title="Github"
            />
          </a>
          <a href="https://www.linkedin.com/in/james-doyle-4b47ba245/">
            <LinkedinLogo
              className={classes.icon}
              title="LinkedIn"
            />
          </a>
          <a href="mailto:jamesmddoyle@gmail.com">
            <Envelope
              className={classes.icon}
              title="Email"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
