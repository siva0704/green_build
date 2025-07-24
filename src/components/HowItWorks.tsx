import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

export const HowItWorks = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    { number: 1, title: "Raise a Request" },
    { number: 2, title: "Meet our Expert" },
    { number: 3, title: "Book with us" },
    { number: 4, title: "Receive Plans" },
    { number: 5, title: "Track & Transact" },
    { number: 6, title: "Settle in" }
  ];

  const stepImages = [
    {
      src: "/lovable-uploads/c7fd2fd3-7330-4cae-a27e-9cc5657b1103.png",
      alt: "Person consulting on laptop - Raise a Request"
    },
    {
      src: "/lovable-uploads/d8a5bc3d-437b-48b8-b336-ca7818d67e8d.png",
      alt: "Professional meeting with expert - Meet our Expert"
    },
    {
      src: "/lovable-uploads/27c52f00-e267-4d09-889a-3c043433457f.png",
      alt: "Handshake agreement - Book with us"
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
      alt: "Architectural plans and blueprints - Receive Plans"
    },
    {
      src: "/lovable-uploads/392e0853-592b-4b67-8f22-e5501651f61f.png",
      alt: "Construction progress tracking - Track & Transact"
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
      alt: "Happy family in new home - Settle in"
    }
  ];

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 lg:mb-6 animate-fade-in-up bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent">
          How it works
        </h2>
        <p className="text-[#808080] mb-12 lg:mb-16 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Our house construction steps are simple and easy to understand:<br />
          <span className="font-semibold text-[#1e3a8a]">Plan - Build - Track - Settle in.</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12 lg:mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`flex flex-col items-center group hover-scale animate-scale-in animate-delay-${(index + 3) * 100} cursor-pointer`}
              onClick={() => handleStepClick(step.number)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStepClick(step.number);
                }
              }}
              aria-label={`Select step ${step.number}: ${step.title}`}
            >
              <div className={`w-16 h-16 lg:w-20 lg:h-20 ${
                activeStep === step.number 
                  ? 'bg-gradient-to-r from-[#00FF00] to-[#00DD00] text-black shadow-xl scale-110' 
                  : 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white shadow-lg group-hover:shadow-xl'
              } rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold mb-3 lg:mb-4 transition-all duration-300 group-hover:scale-110`}>
                {step.number}
              </div>
              <p className={`font-semibold text-sm lg:text-base max-w-24 text-center leading-tight transition-colors duration-300 ${
                activeStep === step.number 
                  ? 'text-[#00FF00]' 
                  : 'text-[#333333] group-hover:text-[#1e3a8a]'
              }`}>
                {step.title}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mb-12 lg:mb-16 animate-fade-in-up animate-delay-600">
          <div className="relative max-w-2xl mx-auto">
            <img 
              src={stepImages[activeStep - 1].src}
              alt={stepImages[activeStep - 1].alt}
              className="mx-auto rounded-2xl shadow-2xl w-full hover-lift transition-all duration-500 border-4 border-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <p className="text-sm lg:text-base text-[#808080] mt-4 font-medium">*T&C Apply</p>
        </div>
        
        <div className="animate-bounce-in animate-delay-700">
          <Button 
            onClick={() => {
              const contactFormSection = document.getElementById('contact-form-section');
              if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full max-w-md bg-gradient-to-r from-[#00FF00] to-[#00DD00] hover:from-[#00DD00] hover:to-[#00BB00] text-black font-semibold py-4 text-lg lg:text-xl btn-hover hover-lift transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Construction
          </Button>
        </div>
      </div>
    </section>
  );
};
