import AboutCard from "./utils/AboutCard";

import { FaGraduationCap, FaFileCode } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import TechCircle from "./utils/TechCircle";

const About = () => {
  return (
    <section
      id="about"
      className="min-w-full px-6 pb-12 border-b border-t border-gray-800 flex justify-center items-center"
      style={{
        backgroundImage: 'url("images/backgroud.png")',
      }}
    >
      <div className="py-12 flex flex-col justify-center items-center gap-6">
        <h1 className="text-xl text-white font-medium md:text-3xl mb-6">
          About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AboutCard
            icon={<FaGraduationCap className="text-2xl" />}
            title="Education"
            description="BE in Artificial Intelligence and Data Science, Rizvi College of Engineeing"
          />
          <AboutCard
            icon={<FaFileCode className="text-2xl" />}
            title="My Skills"
            description={
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-300 font-medium text-center">
                  MERN, Python, Java, C programming, Excel, SQL
                </p>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  <TechCircle image="icons\javascript.svg" />
                  <TechCircle image="icons\typescript.svg" />
                  <TechCircle image="icons\react.svg" />
                  <TechCircle image="icons\next-js.svg" />
                  <TechCircle image="icons\tailwind.svg" />
                  <TechCircle image="icons\mongodb.svg" />
                </div>
              </div>
            }
          />
          <AboutCard
            icon={<IoPerson className="text-2xl" />}
            title="Hobbies"
            description="Coding, Puzzle Solving, Basketball"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
