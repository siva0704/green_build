
export const ProjectDots = () => {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fade-in-up animate-delay-600">
      {[0, 1, 2, 3, 4].map((dot, index) => (
        <div 
          key={dot}
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
            index === 0 
              ? 'bg-[#333333] animate-pulse-slow shadow-lg' 
              : 'bg-[#D3D3D3] hover:bg-[#333333] shadow-md'
          }`}
        ></div>
      ))}
    </div>
  );
};
