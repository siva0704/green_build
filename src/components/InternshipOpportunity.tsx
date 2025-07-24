import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const InternshipOpportunity = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const offerings = [
    "Practical Experience: Work alongside experienced engineers and project managers on active construction sites.",
    "Skill Development: Gain insights into site supervision, project planning, quality control, and safety management.",
    "Learning Opportunities: Understand technical drawings, construction methodologies, and the use of industry-standard software.",
    "Mentorship: Receive guidance and support from our expert team to enhance your professional growth.",
    "Networking: Build connections within the construction industry that can help shape your career path"
  ];

  const galleryImages = [
    "/lovable-uploads/1e0bc941-ed68-4501-b461-fcbe4e0816b1.png",
    "/lovable-uploads/47d06bce-ed49-4bff-b8c3-6b205d913e36.png",
    "/lovable-uploads/cbe219a8-d38d-4602-a85b-bb7cad185043.png",
    "/lovable-uploads/556c5a6b-e37d-4a52-9ec8-bc21062f3891.png"
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2 sm:mb-3 lg:mb-4 animate-fade-in-up font-inter leading-tight">
            Internship Opportunity
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-800 font-semibold animate-fade-in-up animate-delay-200 font-inter leading-relaxed">
            For B.E in Civil Engineering Students.
          </p>
        </div>
        
        {/* Single Column Layout */}
        <div className="animate-fade-in-left animate-delay-300 space-y-4 sm:space-y-6">
          
          {/* Gallery Section - Mobile carousel */}
          <div className="lg:hidden">
            <div className="relative max-w-md mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={image}
                          alt={`Construction and engineering work ${index + 1}`}
                          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4" />
                <CarouselNext className="hidden sm:flex -right-4" />
              </Carousel>
              
              {/* Mobile carousel indicators */}
              <div className="flex justify-center mt-4 gap-2 sm:hidden">
                {galleryImages.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-indigo-300 rounded-full opacity-60"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Section for Desktop - Above paragraph */}
          <div className="hidden lg:block mb-6">
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src={image}
                            alt={`Construction and engineering work ${index + 1}`}
                            className="w-full h-72 xl:h-80 object-cover transition-all duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-6" />
                  <CarouselNext className="-right-6" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Introduction Paragraph - Wider on desktop */}
          <div className="space-y-4 max-w-none lg:max-w-4xl lg:mx-auto">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg font-inter">
              We are excited to offer a valuable internship opportunity for passionate and motivated civil engineering students who are eager to gain practical experience in the construction industry. This internship is designed to provide hands-on exposure to real-world construction projects, allowing interns to apply their academic knowledge while developing essential skills for their future careers.
            </p>
          </div>
          
          {/* What We Offer Section - Wider on desktop */}
          <div className="space-y-4 sm:space-y-5 max-w-none lg:max-w-4xl lg:mx-auto">
            <h3 className="text-indigo-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-inter">
              What We Offer:
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              {offerings.map((offer, index) => {
                const [title, description] = offer.split(':');
                return (
                  <div 
                    key={index} 
                    className={`group hover-lift transition-all duration-300 animate-slide-in-bottom animate-delay-${(index + 4) * 100} bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md border-l-4 border-indigo-500 font-inter`}
                  >
                    <div className="text-sm sm:text-base lg:text-lg">
                      <span className="font-bold text-indigo-600 block sm:inline">
                        {title}:
                      </span>
                      <span className="text-slate-700 block sm:inline sm:ml-1 mt-1 sm:mt-0 leading-relaxed">
                        {description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Button - Centered */}
          <div className="pt-4 sm:pt-6 animate-bounce-in animate-delay-600">
            {/* Mobile layout - full width */}
            <div className="lg:hidden">
              <Button 
                onClick={() => {
                  const contactFormSection = document.getElementById('contact-form-section');
                  if (contactFormSection) {
                    contactFormSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg btn-hover hover-lift transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base font-inter min-h-[3rem] sm:min-h-[3.5rem]">
                Start Your Construction
              </Button>
            </div>
            
            {/* Desktop layout - centered */}
            <div className="hidden lg:block">
              <div className="flex justify-center">
                <Button 
                  onClick={() => {
                    const contactFormSection = document.getElementById('contact-form-section');
                    if (contactFormSection) {
                      contactFormSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-12 py-5 rounded-lg btn-hover hover-lift transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg font-inter min-h-[4rem]">
                  Start Your Construction
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
