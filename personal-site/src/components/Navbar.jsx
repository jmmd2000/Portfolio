import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { AiOutlineMenu as OpenMenu } from "react-icons/ai";
import { AiOutlineClose as CloseMenu } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [showItems, setShowItems] = useState(false);
  const [openIcon, setOpenIcon] = useState(true);

  const toggleItems = () => {
    setShowItems(!showItems);
    if (openIcon) {
      setOpenIcon(false);
    } else {
      setOpenIcon(true);
    }
  };

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
      const offset = 200;
      const finalScrollPos = scrollPosition + offset;
      const aboutSection = document.getElementById("about");
      const educationSection = document.getElementById("education");
      const experienceSection = document.getElementById("experience");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      // Updates the navbar as the user manually scrolls
      if (
        finalScrollPos >= aboutSection.offsetTop &&
        finalScrollPos < educationSection.offsetTop
      ) {
        setActive("about");
      } else if (
        finalScrollPos >= educationSection.offsetTop &&
        finalScrollPos < experienceSection.offsetTop
      ) {
        setActive("education");
      } else if (
        finalScrollPos >= experienceSection.offsetTop &&
        finalScrollPos < skillsSection.offsetTop
      ) {
        setActive("experience");
      } else if (
        finalScrollPos >= skillsSection.offsetTop &&
        finalScrollPos < projectsSection.offsetTop
      ) {
        setActive("skills");
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

  let width = window.innerWidth;

  useEffect(() => {
    console.log(width);
    if (width < 990) {
      setShowItems(false);
    } else {
      setShowItems(true);
    }
  }, [width]);

  return (
    <nav className={classes.navContainer}>
      <div
        className={classes.toggle}
        onClick={toggleItems}
      >
        {openIcon ? (
          <OpenMenu className={classes.icon} />
        ) : (
          <CloseMenu className={classes.icon} />
        )}
      </div>
      <h1
        className={classes.navHeader}
        onClick={() => clickHandler("hero")}
      >
        James Doyle
      </h1>
      <ul
        className={`${classes.navList} 
      ${showItems === false ? classes.hide : classes.show}`}
      >
        <li
          className={`${classes.navItem} ${
            active === "about" ? classes.active : ""
          } `}
          onClick={() => clickHandler("about")}
        >
          About Me
        </li>

        <li
          className={`${classes.navItem} ${
            active === "education" ? classes.active : ""
          }`}
          onClick={() => clickHandler("education")}
        >
          Education
        </li>
        <li
          className={`${classes.navItem} ${
            active === "experience" ? classes.active : ""
          }`}
          onClick={() => clickHandler("experience")}
        >
          Experience
        </li>
        <li
          className={`${classes.navItem} ${
            active === "skills" ? classes.active : ""
          }`}
          onClick={() => clickHandler("skills")}
        >
          Skills
        </li>
        <li
          className={`${classes.navItem} ${
            active === "projects" ? classes.active : ""
          }`}
          onClick={() => clickHandler("projects")}
        >
          Projects
        </li>

        <li
          className={`${classes.navItem} ${
            active === "contact" ? classes.active : ""
          }`}
          onClick={() => clickHandler("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
