const TechCircle = ({ image }: { image: string }) => {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-gray-600 rounded-full p-2 flex items-center justify-center">
      <img className="w-6 h-6" src={image} alt="logo" />
    </div>
  );
};

export default TechCircle;
