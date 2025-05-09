import { social } from "./../data/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <main
      className="w-full bg-[#121212] flex  flex-col items-center md:gap-10 gap-5 justify-center"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <h1 className="md:text-7xl text-5xl text-center text-white tracking-wider">
        Ang Kimsor
      </h1>
      <h1 className="md:text-3xl text-xl text-white tracking-wider">
        I'm{" "}
        <Typewriter
          words={["a Website Developer", "a Freelancer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
      <div className="flex gap-5 mt-5">
        {social.map(({ icon, path }, index) => (
          <Link
            to={path}
            key={index}
            className="md:size-[50px] size-[40px] flex items-center justify-center md:text-2xl text-lg rounded-full bg-white"
          >
            <FontAwesomeIcon icon={icon} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
