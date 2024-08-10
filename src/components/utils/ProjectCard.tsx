interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  techCircles: JSX.Element[];
}

const ProjectCard = ({
  image,
  title,
  description,
  link,
  techCircles,
}: CardProps) => {
  return (
    <div className="mb-8 bg-gradient-to-br from-violet-900 to-slate-950 border border-violet-900 p-4 flex flex-col justify-center items-start gap-y-3 rounded-lg">
      <img
        className="rounded-lg w-full object-cover object-top min-h-[230px] max-h-[230px]"
        src={image}
        alt={title}
      />
      <a
        href={link}
        className="flex justify-center items-center gap-2 text-white text-2xl font-medium hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="icons\link.svg" alt="link" width={16} height={16} />
        {title}
      </a>
      <p className="text-gray-400 font-medium">{description}</p>
      <div className="flex justify-start items-center gap-2 mt-2">
        {techCircles}
      </div>
    </div>
  );
};

export default ProjectCard;
