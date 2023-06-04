import classes from "./SkillsGrid.module.css";
import { IoLogoHtml5 as HtmlIcon } from "react-icons/io5";
import { IoLogoCss3 as CssIcon } from "react-icons/io5";
import { IoLogoJavascript as JavascriptIcon } from "react-icons/io5";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { DiJava as JavaIcon } from "react-icons/di";
import { FaPhp as PhpIcon } from "react-icons/fa";
import { TbSql as SqlIcon } from "react-icons/tb";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { SiJquery as JqueryIcon } from "react-icons/si";
import { FaBootstrap as BootstrapIcon } from "react-icons/fa";
import { SiFlutter as FlutterIcon } from "react-icons/si";
import { SiDart as DartIcon } from "react-icons/si";
import { FiFigma as FigmaIcon } from "react-icons/fi";
import { SiCsharp as CsharpIcon } from "react-icons/si";
import { BsWordpress as WordpressIcon } from "react-icons/bs";
import { SiMongodb as MongodbIcon } from "react-icons/si";
import { SiPython as PythonIcon } from "react-icons/si";
import { SiVisualstudiocode as VscodeIcon } from "react-icons/si";
import { BsGit as GitIcon } from "react-icons/bs";
import { SiFirebase as FirebaseIcon } from "react-icons/si";
import { SiHaskell as HaskellIcon } from "react-icons/si";
import { DiProlog as PrologIcon } from "react-icons/di";
import { SiC as CIcon } from "react-icons/si";

const SkillsGrid = () => {
  return (
    <>
      <p className={classes.text}>I am most proficient with:</p>
      <div className={classes.primarySkills}>
        <div className={classes.skill}>
          <HtmlIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>HTML</h3>
        </div>

        <div className={classes.skill}>
          <CssIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>CSS</h3>
        </div>

        <div className={classes.skill}>
          <JavascriptIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>JavaScript</h3>
        </div>

        <div className={classes.skill}>
          <ReactIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>React</h3>
        </div>

        <div className={classes.skill}>
          <JavaIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Java</h3>
        </div>
      </div>
      <p className={classes.text}>I have experience with:</p>
      <div className={classes.secondarySkills}>
        <div className={classes.skill}>
          <FlutterIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Flutter</h3>
        </div>

        <div className={classes.skill}>
          <DartIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Dart</h3>
        </div>

        <div className={classes.skill}>
          <PhpIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>PHP</h3>
        </div>

        <div className={classes.skill}>
          <SqlIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>SQL</h3>
        </div>

        <div className={classes.skill}>
          <NodeIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>NodeJS</h3>
        </div>

        <div className={classes.skill}>
          <JqueryIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>jQuery</h3>
        </div>

        <div className={classes.skill}>
          <BootstrapIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Bootstrap</h3>
        </div>

        <div className={classes.skill}>
          <FigmaIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Figma</h3>
        </div>

        <div className={classes.skill}>
          <CsharpIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>C#</h3>
        </div>

        <div className={classes.skill}>
          <CIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>C</h3>
        </div>

        <div className={classes.skill}>
          <WordpressIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>WordPress</h3>
        </div>

        <div className={classes.skill}>
          <MongodbIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>MongoDB</h3>
        </div>

        <div className={classes.skill}>
          <PythonIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Python</h3>
        </div>

        <div className={classes.skill}>
          <VscodeIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>VSCode</h3>
        </div>

        <div className={classes.skill}>
          <FirebaseIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Firebase</h3>
        </div>

        <div className={classes.skill}>
          <GitIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Git</h3>
        </div>

        <div className={classes.skill}>
          <HaskellIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Haskell</h3>
        </div>

        <div className={classes.skill}>
          <PrologIcon className={classes.skillIcon} />
          <h3 className={classes.skillTitle}>Prolog</h3>
        </div>
      </div>
    </>
  );
};

export default SkillsGrid;
