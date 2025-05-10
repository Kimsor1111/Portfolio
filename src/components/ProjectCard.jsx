import { Link } from "react-router-dom";

const ProjectCard = ({ title, img, list, github, live, technologies }) => {
  return (
    <div className="rounded-md h-fit bg-[#060606] border border-white/30">
      <div className="w-full">
        <img src={img} alt="" className="rounded-t-md" />
      </div>
      <div className="py-5 px-10 flex flex-col items-center">
        <h1 className="w-full md:text-center text-white md:text-2xl text-3xl font-semibold tracking-wide">
          {title}
        </h1>
        <ul className="w-full text-white text-sm flex flex-col gap-2 list-disc mt-5">
          {list.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="text-white flex gap-5 mt-5">
          <Link
            to={github}
            className="px-4 py-1 rounded border border-white hover:bg-white hover:text-black font-medium"
          >
            GitHub
          </Link>
          <Link
            to={live}
            className="px-4 py-1 rounded border border-white hover:bg-white hover:text-black font-medium"
          >
            Live
          </Link>
        </div>
      </div>
      <div className="bg-[#181818] w-full flex-wrap rounded-b-md py-5 px-8 flex justify-center gap-4">
        {technologies.map((item, index) => (
          <span
            key={index}
            className="bg-white text-[11px] font-medium py-[1px] rounded-xl flex items-center justify-center px-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
