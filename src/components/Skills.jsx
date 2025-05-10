const Skills = ({ title, detail }) => {
  return (
    <>
      <p className="text-center text-white mb-2 mt-10 lg:text-2xl text-lg font-medium">
        {title}
      </p>
      <div className="w-full flex flex-wrap gap-y-10 gap-x-5 justify-center py-5 ">
        {detail.map(({ img, name, objectcontain }, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={img}
              alt=""
              className={`size-[80px]  ${
                objectcontain ? "object-contain" : "object-cover"
              }`}
            />
            <p className="text-white font-medium text-center mt-2">{name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
