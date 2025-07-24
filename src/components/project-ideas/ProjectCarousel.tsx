
import { ProjectCard } from "./ProjectCard";

interface ProjectCarouselProps {
  projectImages: string[];
  projectTitles: string[];
}

export const ProjectCarousel = ({ projectImages, projectTitles }: ProjectCarouselProps) => {
  return (
    <div className="mb-8 sm:mb-12 overflow-hidden">
      <div className="project-idea-scroll-container">
        <div className="project-idea-scroll-track">
          {/* First set of cards */}
          {projectImages.map((imageUrl, index) => (
            <ProjectCard
              key={`first-${index}`}
              imageUrl={imageUrl}
              title={projectTitles[index]}
              index={index}
            />
          ))}
          
          {/* Duplicate set for seamless loop */}
          {projectImages.map((imageUrl, index) => (
            <ProjectCard
              key={`second-${index}`}
              imageUrl={imageUrl}
              title={projectTitles[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
