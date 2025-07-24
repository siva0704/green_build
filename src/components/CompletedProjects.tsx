
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import { ProjectMediaViewer } from "./completed-projects/ProjectMediaViewer";
import { ProjectSlider } from "./completed-projects/ProjectSlider";
import { ProjectGuarantees } from "./completed-projects/ProjectGuarantees";
import { projectMedia } from "./completed-projects/projectMediaData";

export const CompletedProjects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [currentMedia, setCurrentMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);

  const handleCardClick = (mediaItem: { url: string; type: 'image' | 'video' }, index: number) => {
    setCurrentMedia(mediaItem);
  };

  const closeMediaViewer = () => {
    setCurrentMedia(null);
  };

  const handleStartConstructionClick = () => {
    // Smooth scroll to contact form section
    const contactFormSection = document.getElementById('contact-form-section');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4 animate-fade-in-up">
          Check our Completed Projects.
        </h2>
        <p className="text-base sm:text-lg text-[#808080] mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up animate-delay-200 font-medium">
          Trusted by 3000+ Happy Homeowners!
        </p>
        
        <ProjectSlider 
          projectMedia={projectMedia}
          onCardClick={handleCardClick}
        />
        
        <ProjectMediaViewer 
          currentMedia={currentMedia}
          onClose={closeMediaViewer}
        />
        
        <ProjectGuarantees />
        
        <div className="animate-bounce-in animate-delay-600">
          <Button 
            onClick={handleStartConstructionClick}
            className="start-construction-btn bg-[#00FF00] hover:bg-[#00DD00] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-hover rounded-xl shadow-professional hover:shadow-interactive"
          >
            Start Your Construction
          </Button>
        </div>
      </div>
    </section>
  );
};
