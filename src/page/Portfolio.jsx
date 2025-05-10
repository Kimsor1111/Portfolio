import { ProjectCard } from "./../components";
import { Project } from "./../data/project";
const Portfolio = () => {
  return (
    <main className="w-full flex flex-col items-center pb-10">
      <h1 className="text-5xl mt-5 mb-5 lg:mb-10 text-white font-bold tracking-wider">
        Projects
      </h1>
      <div className="w-[90%] grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-x-5 gap-y-10">
        {Project.map(
          ({ title, img, list, github, live, technologies }, index) => (
            <ProjectCard
              key={index}
              title={title}
              img={img}
              list={list}
              github={github}
              live={live}
              technologies={technologies}
            />
          )
        )}
      </div>
    </main>
  );
};

export default Portfolio;
