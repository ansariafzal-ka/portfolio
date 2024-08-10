import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: CardProps) => {
  return (
    <div className="text-white bg-gradient-to-br from-violet-900 to-slate-950 border border-violet-900 p-4 flex flex-col justify-center items-center gap-y-2 rounded-lg">
      {icon}
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-center text-gray-300 font-medium">{description}</p>
    </div>
  );
};

export default AboutCard;
