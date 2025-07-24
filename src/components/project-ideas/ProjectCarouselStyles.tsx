
export const ProjectCarouselStyles = () => {
  return (
    <style>{`
      .project-idea-scroll-container {
        width: 100%;
        overflow: hidden;
        position: relative;
        mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
        -webkit-mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
      }
      
      .project-idea-scroll-track {
        display: flex;
        gap: 1rem;
        animation: project-idea-roll 60s linear infinite;
        width: max-content;
      }
      
      .project-idea-scroll-track:hover {
        animation-play-state: paused;
      }
      
      .project-idea-card {
        flex: 0 0 auto;
        width: 180px;
      }
      
      @media (min-width: 640px) {
        .project-idea-card {
          width: 220px;
        }
        .project-idea-scroll-track {
          gap: 1.25rem;
        }
      }
      
      @media (min-width: 768px) {
        .project-idea-card {
          width: 260px;
        }
        .project-idea-scroll-track {
          gap: 1.5rem;
        }
      }
      
      @media (min-width: 1024px) {
        .project-idea-card {
          width: 300px;
        }
        .project-idea-scroll-track {
          gap: 2rem;
        }
      }
      
      .image-card-hover:hover {
        transform: translateY(-8px) scale(1.02);
      }
      
      @keyframes project-idea-roll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      /* Make scrollable on mobile */
      @media (max-width: 768px) {
        .project-idea-scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .project-idea-scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .project-idea-scroll-track {
          animation: none;
        }
      }
    `}</style>
  );
};
