
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectCarousel } from "./project-ideas/ProjectCarousel";
import { ProjectDots } from "./project-ideas/ProjectDots";
import { ProjectCarouselStyles } from "./project-ideas/ProjectCarouselStyles";
import { projectImages, projectTitles } from "./project-ideas/projectData";

export const OurProjectIdeas = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={sectionRef} 
      className={`py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#333333] mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up bg-gradient-to-r from-[#333333] to-[#555555] bg-clip-text text-transparent">
          Our Project Ideas
        </h2>
        <p className="text-[#808080] mb-8 sm:mb-12 lg:mb-16 xl:mb-20 animate-fade-in-up animate-delay-200 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
          You'll find a collection of innovative ideas that We are passionate about developing.
        </p>
        
        <ProjectCarousel 
          projectImages={projectImages} 
          projectTitles={projectTitles} 
        />
        
        <ProjectDots />
      </div>
      
      <ProjectCarouselStyles />
    </section>
  );
};
