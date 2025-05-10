import { Skills as List } from "../components";
import { skills as Data } from "../data/skills";
const Skills = () => {
  return (
    <main className="w-full flex flex-col items-center py-10">
      <h1 className="text-5xl mt-5 mb-10 text-white font-bold tracking-wider">
        Skills
      </h1>
      <p className="text-white font-medium lg:text-2xl text-lg md:w-2/3 w-[90%] text-center">
        I love to learn new things and experiment with new technologies. These
        are some of the major languages, technologies, tools and platforms I
        have worked with:
      </p>
      <div className="md:w-2/3 w-[90%] ">
        {Data.map(({ title, detail }, index) => (
          <List key={index} title={title} detail={detail} />
        ))}
      </div>
    </main>
  );
};

export default Skills;
