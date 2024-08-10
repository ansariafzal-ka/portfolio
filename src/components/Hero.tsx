import NavBar from "./NavBar";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("src/assets/backgroud-2.png")',
      }}
    >
      <NavBar />
      <div className="px-6 mt-24 flex flex-col justify-center items-center text-white gap-y-3">
        <p className="font-medium md:text-xl">
          Hello, I am Ansari Mohammed Afzal
        </p>
        <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold">
          Transforming Concepts <br /> into Seamless
          <span className="text-indigo-500">
            {" "}
            User <br /> Experiences
          </span>
        </h1>
        <a
          href="#projects"
          className="border border-gray-500 text-gray-300 px-12 py-2 mt-3 font-medium rounded-full hover:bg-indigo-950 hover:text-white hover:border-indigo-950 duration-300"
        >
          projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
