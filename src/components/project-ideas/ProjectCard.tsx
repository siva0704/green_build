
import { Image } from "lucide-react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  index: number;
}

export const ProjectCard = ({ imageUrl, title, index }: ProjectCardProps) => {
  return (
    <div className="project-idea-card">
      <div className="bg-white aspect-[4/5] rounded-xl overflow-hidden relative group cursor-pointer image-card-hover transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-200">
        <img 
          src={imageUrl} 
          alt={title || `Project Idea ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">
            {title || `Project Idea ${index + 1}`}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm">
            Explore Design
          </p>
        </div>
        
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
          <Image className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300"></div>
      </div>
    </div>
  );
};
