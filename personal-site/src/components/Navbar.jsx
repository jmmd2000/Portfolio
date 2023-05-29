import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const clickHandler = (link) => {
    // Set the clicked link to active and scroll to that element minus an offset
    setActive(link);
    const offset = 150;
    const element = document.getElementById(link);
    console.log(element);

    if (element) {
      const position = element.offsetTop - offset;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Double the height of the navbar
      const offset = 300;
      const finalScrollPos = scrollPosition + offset;
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const educationSection = document.getElementById("education");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      // For the navbar to shrink on scroll
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Updates the navbar as the user manually scrolls
      if (
        finalScrollPos >= aboutSection.offsetTop &&
        finalScrollPos < skillsSection.offsetTop
      ) {
        setActive("about");
      } else if (
        finalScrollPos >= skillsSection.offsetTop &&
        finalScrollPos < educationSection.offsetTop
      ) {
        setActive("skills");
      } else if (
        finalScrollPos >= educationSection.offsetTop &&
        finalScrollPos < projectsSection.offsetTop
      ) {
        setActive("education");
      } else if (
        finalScrollPos >= projectsSection.offsetTop &&
        finalScrollPos < contactSection.offsetTop
      ) {
        setActive("projects");
      } else if (finalScrollPos >= contactSection.offsetTop) {
        setActive("contact");
      } else {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${classes.navContainer} ${
        isScrolled ? classes.navContainerShrunk : ""
      }`}
    >
      <h1
        className={classes.navHeader}
        onClick={() => clickHandler("hero")}
      >
        James Doyle
      </h1>
      <p
        // href="#about"
        className={`${classes.navItem} ${
          active === "about" ? classes.active : ""
        }`}
        onClick={() => clickHandler("about")}
      >
        About Me
      </p>
      <p
        // href="#skills"
        className={`${classes.navItem} ${
          active === "skills" ? classes.active : ""
        }`}
        onClick={() => clickHandler("skills")}
      >
        Skills
      </p>
      <p
        // href="#education"
        className={`${classes.navItem} ${
          active === "education" ? classes.active : ""
        }`}
        onClick={() => clickHandler("education")}
      >
        Education
      </p>
      <p
        // href="#projects"
        className={`${classes.navItem} ${
          active === "projects" ? classes.active : ""
        }`}
        onClick={() => clickHandler("projects")}
      >
        Projects
      </p>
      <p
        // href="#contact"
        className={`${classes.navItem} ${
          active === "contact" ? classes.active : ""
        }`}
        onClick={() => clickHandler("contact")}
      >
        Contact
      </p>
    </nav>
  );
};

export default Navbar;
