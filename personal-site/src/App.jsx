import "./App.css";
import ContentSection from "./components/ContentSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsGrid from "./components/SkillsGrid";
import TopThree from "./components/TopThree";

const artists = [
  {
    title: "Post Malone",
    image: "/src/assets/artists/postmalone.webp",
  },
  {
    title: "Billie Eilish",
    image: "/src/assets/artists/billieeilish.webp",
  },
  {
    title: "The Killers",
    image: "/src/assets/artists/thekillers.webp",
  },
];

const movies = [
  {
    title: "Into the Spider-Verse",
    image: "/src/assets/movies/spiderverse.webp",
  },
  {
    title: "The Truman Show",
    image: "/src/assets/movies/truman.webp",
  },
  {
    title: "The Martian",
    image: "/src/assets/movies/martian.webp",
  },
];

const games = [
  {
    title: "Minecraft",
    image: "/src/assets/games/minecraft.webp",
  },
  {
    title: "Factorio",
    image: "/src/assets/games/factorio.webp",
  },
  {
    title: "Spiderman",
    image: "/src/assets/games/spiderman.webp",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <ContentSection
        title="About Me"
        id="about"
      >
        <p>
          I recently finished up my Computer Science degree from Maynooth
          University and am itching to get started in the world of professional
          web development.
        </p>
        <p>
          I love music, and sometimes I review albums on my{" "}
          <a href="http://jamesreviewsmusic.online/">blog</a>. My current top
          three artists would have to be:
        </p>
        <TopThree contentObjects={artists} />
        <p>
          I spend a lot of time watching movies. Some of my favourites include:
        </p>
        <TopThree contentObjects={movies} />
        <p>I also play a lot of video games. My current favourites are:</p>
        <TopThree contentObjects={games} />
      </ContentSection>

      <ContentSection
        title="Skills"
        id="skills"
      >
        <SkillsGrid />
      </ContentSection>
      <ContentSection
        title="Education"
        id="education"
      >
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
      </ContentSection>
      <ContentSection
        title="Projects"
        id="projects"
      >
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
      </ContentSection>
      <ContentSection
        title="Contact"
        id="contact"
      >
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
        <p>I&apos;m James, a passionate frontend developer based in Dublin.</p>
        <p>
          With a lifelong love for web development that began in my childhood, I
          enjoy creating dynamic web applications using React. From crafting
          captivating user experiences to writing clean and efficient code, I
          bring enthusiasm and a fresh perspective to every project.
        </p>
        <p>
          If you&apos;re seeking a dedicated developer to join your team,
          let&apos;s connect and discuss how I can contribute to your success.
        </p>
      </ContentSection>
    </>
  );
}

export default App;
