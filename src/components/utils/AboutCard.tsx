import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

const AboutCard = ({ icon, title, description }: CardProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({ opacity: 1, x: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className="text-white bg-gradient-to-br from-violet-900 to-slate-950 border border-violet-900 p-4 flex flex-col justify-center items-center gap-y-2 rounded-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      {icon}
      <h1 className="text-xl font-medium">{title}</h1>
      <div className="text-center text-gray-300 font-medium">{description}</div>
    </motion.div>
  );
};

export default AboutCard;
