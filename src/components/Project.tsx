import TechCircle from "./utils/TechCircle"; // Ensure correct path
import ProjectCard from "./utils/ProjectCard";

const techCirclesIdeaHub = [
  <TechCircle image="icons\next-js.svg" key="nextjs" />,
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\mongodb.svg" key="mongodb" />,
  <TechCircle image="icons\typescript.svg" key="typescript" />,
  <TechCircle image="icons\tailwind.svg" key="tailwind" />,
];

const techCirclesKanbanBuddy = [
  <TechCircle image="icons\next-js.svg" key="nextjs" />,
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\mongodb.svg" key="mongodb" />,
  <TechCircle image="icons\typescript.svg" key="typescript" />,
  <TechCircle image="icons\tailwind.svg" key="tailwind" />,
];

const techCirclesDashForge = [
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\mongodb.svg" key="mongodb" />,
  <TechCircle image="icons\javascript.svg" key="javascript" />,
  <TechCircle image="icons\tailwind.svg" key="tailwind" />,
];

const techCirclesCodeLangInsights = [
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\javascript.svg" key="javascript" />,
];

const techCirclesWanderWay = [
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\javascript.svg" key="javascript" />,
  <TechCircle image="icons\tailwind.svg" key="tailwind" />,
];
const techCirclesGeminiClone = [
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\javascript.svg" key="javascript" />,
  <TechCircle image="icons\tailwind.svg" key="tailwind" />,
];
const techCirclesTodo = [
  <TechCircle image="icons\next-js.svg" key="nextjs" />,
  <TechCircle image="icons\react.svg" key="react" />,
  <TechCircle image="icons\mongodb.svg" key="mongodb" />,
  <TechCircle image="icons\typescript.svg" key="typescript" />,
  <TechCircle image="icons\tailwind.svg" key="tailwind" />,
];

const Project = () => {
  return (
    <section id="projects" className="gradient-image border-t border-gray-500">
      <div className="px-6 py-12 flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-xl text-white font-medium md:text-3xl mb-6">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            image="images\ideahub.png"
            title="IdeaHub"
            description="This web application allows users to create, delete, and edit ideas, fostering a collaborative environment where community members can share and explore innovative thoughts. Built with Next.js and TypeScript, the app features a clean, responsive design achieved with Tailwind CSS and Shadcn. The backend is powered by MongoDB, ensuring efficient data management."
            link="https://ideahub-nextjs.vercel.app/"
            techCircles={techCirclesIdeaHub}
          />
          <ProjectCard
            image="images\kanban-buddy.png"
            title="Kanban Buddy"
            description="Kanban Buddy is a task management app built with Next.js and TypeScript, using MongoDB for data storage. It features NextAuth for secure login, Kanban boards with TODO, DOING, and DONE columns, and a clean design with Tailwind CSS and Shadcn, ensuring a responsive user experience."
            link="https://kanban-buddy-nextjs.vercel.app/"
            techCircles={techCirclesKanbanBuddy}
          />
          <ProjectCard
            image="images\dashforge.png"
            title="DashForge"
            description="Built with the MERN stack, this app allows users to log in with JWT, upload CSV files, and view charts and analytics based on the data. MongoDB stores the data, Tailwind CSS styles the frontend, and an integrated Gemini API chatbot provides additional support."
            link="https://github.com/ansariafzal-ka/dashforge"
            techCircles={techCirclesDashForge}
          />
          <ProjectCard
            image="images\codelanginsights.png"
            title="Code Lang Insights"
            description="This web app showcases the ranking of various programming languages based on the 2023 TIOBE index. Developed with React and simple CSS, it features a responsive design for seamless viewing across devices. Users can explore and compare the popularity of languages."
            link="https://codelanginsights-123.web.app/"
            techCircles={techCirclesCodeLangInsights}
          />
          <ProjectCard
            image="images\wanderway.png"
            title="WanderWay Landing Page"
            description="This landing page for a travel website, built with React and Tailwind CSS, offers a visually appealing introduction to various services. It features a responsive design, ensuring a smooth experience across all devices. While it’s a static page with no functionality, it effectively showcases the site’s aesthetic appeal."
            link="https://wanderway-landing-page.vercel.app/"
            techCircles={techCirclesWanderWay}
          />
          <ProjectCard
            image="images\gemini-clone.png"
            title="Gemini Clone"
            description="This web app features a chatbot powered by the Gemini API, built with React and JavaScript. Styled using Tailwind CSS, it offers a sleek and responsive design. Users can interact with the chatbot for various inquiries, enjoying a modern and intuitive interface for seamless conversations."
            link="https://gemini-clone-sigma-nine.vercel.app/"
            techCircles={techCirclesGeminiClone}
          />
          <ProjectCard
            image="images\todo.png"
            title="Todo Application"
            description="This simple todo application, built with Next.js, React, and MongoDB, allows users to perform CRUD operations on tasks. Styled with Tailwind CSS and Shadcn, it features a clean and responsive interface. Users can easily create, read, update, and delete tasks, enhancing their productivity and organization."
            link="https://todo-nextjs-application.vercel.app/"
            techCircles={techCirclesTodo}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
