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
        backgroundImage: 'url("src/assets/backgroud-2.png")',
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
          <div className="text-white flex flex-col justify-center items-center gap-3 bg-gradient-to-br from-violet-900 to-slate-950 border border-violet-900 p-4 rounded-lg">
            <FaFileCode className="text-2xl" />
            <h1 className="text-xl font-medium">My Skills</h1>
            <p className="text-gray-300 font-medium text-center">
              MERN, Python, Java, C programming, Excel, SQL
            </p>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <TechCircle image="src\assets\icons\javascript.svg" />
              <TechCircle image="src\assets\icons\typescript.svg" />
              <TechCircle image="src\assets\icons\react.svg" />
              <TechCircle image="src\assets\icons\next-js.svg" />
              <TechCircle image="src\assets\icons\tailwind.svg" />
              <TechCircle image="src\assets\icons\mongodb.svg" />
            </div>
            <div></div>
          </div>
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
