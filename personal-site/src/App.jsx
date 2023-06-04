import "./App.css";
import ContentSection from "./components/ContentSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsGrid from "./components/SkillsGrid";
import ModuleTable from "./components/ModuleTable";
import JobDescription from "./components/JobDescription";
import { maynooth } from "./inputs/grades";
import { fusio } from "./inputs/jobs";
import Projects from "./components/Projects";
import classes from "./components/HeroSection.module.css";
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <ContentSection
        title="The personal stuff."
        subtitle="About Me"
        id="about"
      >
        <p>
          I spend a lot of time listening to music, sometimes I write small{" "}
          <a href="http://jamesreviewsmusic.online/">reviews.</a> I enjoy movies
          when they&apos;re good. If I&apos;m not programming, I&apos;m probably
          playing video-games or spending time with my partner.
        </p>
        <p>
          I have a weird hobby where I try to recreate old forms and documents
          with HTML and CSS. It&apos;s great practice, and can be found on my{" "}
          <a href="https://codepen.io/jmmd2000">CodePen.</a>
        </p>
        <p>
          My passion for web development stems from the <span>CoderDojo</span>{" "}
          classes my Dad took me to as a kid. It wasn&apos;t until my teenage
          years when I went more in depth with programming that I realised it
          was what I wanted to do.
        </p>
        <p>
          I applied to many computer science courses after secondary school.
        </p>
        <p>Speaking of which...</p>
      </ContentSection>

      <ContentSection
        title="The academic stuff."
        subtitle="Education"
        id="education"
      >
        <p>
          Coming out of secondary school, I studied{" "}
          <span>Computer Systems and Networks</span> in{" "}
          <span>Dunboyne College,</span> and graduated with full honours. I
          really enjoyed my time here as it was the first proper taste of what I
          wanted to do.
        </p>
        <p>
          From there, I studied{" "}
          <span>Computer Science and Software Engineering</span> in{" "}
          <span>Maynooth University,</span> where I just graduated with a 2.1
          (3.3 GPA).
        </p>

        <ModuleTable
          title={"Year"}
          modules={maynooth}
        />

        <p>
          I had a wide range of modules here, from <span>calculus</span> and{" "}
          <span>operating systems</span> to <span>theoretical computation</span>{" "}
          and <span>cryptography</span>. Ultimately, I learned a lot from this
          course, but it was lacking in web technologies. Pretty much my entire
          knowledge of web development is self-taught.
        </p>
      </ContentSection>

      <ContentSection
        title="The professional stuff."
        subtitle="Experience"
        id="experience"
      >
        <JobDescription job={fusio} />
      </ContentSection>

      <ContentSection
        title="The knowledge stuff."
        subtitle="Skills"
        id="skills"
      >
        <SkillsGrid />
      </ContentSection>

      <ContentSection
        title="My stuff."
        subtitle="Projects"
        id="projects"
      >
        <p>
          All of my projects are on my{" "}
          <a href="https://github.com/jmmd2000">Github</a>, but my best are
          listed below.
        </p>
        <Projects />
      </ContentSection>
      <ContentSection
        title="The important stuff."
        subtitle="Contact"
        id="contact"
      >
        <p>Thanks for taking the time to look through my site.</p>
        <p>
          If you&apos;d like to get in touch, the best places are via the links
          below!
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
        <p>
          <span>James.</span>
        </p>
      </ContentSection>
    </>
  );
}

export default App;
