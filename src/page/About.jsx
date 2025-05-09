import Img from "./../assets/Kimsor.jpg";
const des = [
  "Hello! I'm Kimsor, a passionate and dedicated Website Developer with a strong focus on creating practical and user-focused solutions. I thrive on turning ideas into real-world applications that solve problems, improve user experiences, and bring value.",
  "With a solid background in Website Development, I've worked on projects ranging from dynamic websites and e-commerce. Whether I'm coding a responsive frontend and building secure backend APIs. I'm always learning and pushing my skills further.",
  "I'm driven by curiosity, creativity, and the belief that technology should be both functional and intuitive. When I'm not coding or designing, you'll find me exploring new tech trends, experimenting with ideas, or collaborating on innovative projects. Let's build something amazing together.",
];
const About = () => {
  return (
    <main
      className="w-full flex flex-col items-center"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <h1 className="text-5xl mt-5 lg:mb-20 text-white font-bold tracking-wider">
        About
      </h1>
      <div className="w-[90%] h-fit flex lg:flex-nowrap flex-wrap-reverse lg:gap-5 gap-10 py-10">
        <div className="xl:w-[65%] lg:w-[60%] w-full flex flex-col gap-5 justify-center lg:pr-40">
          {des.map((item, index) => (
            <p
              key={index}
              className="text-lg lg:text-start text-center text-[#f8f8f8] font-semibold"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="xl:w-[35%] lg:w-[40%] w-full lg:h-[550px] flex items-center justify-center">
          <img src={Img} alt="" className="lg:size-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default About;
