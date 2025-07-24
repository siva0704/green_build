
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const AboutUs = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-orange-200 animate-fade-in-up">
            <p className="text-slate-700 leading-relaxed mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg">
              <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text font-bold text-base sm:text-lg lg:text-xl">Green Build</span> is DVG's No.1 tech-enabled construction company that aims to make construction simple, transparent, and reliable. We provide end-to-end aka design-to-build construction services. We execute projects on a turnkey basis and provide real-time tracking, communication, quality checks, and updates on projects from day one till the handover of the keys. Our solution offers money safety to the customers, assured quality, transparency at every stage of construction, and zero tolerance for delays in the project lifecycle. Speak to our expert now to get started on the construction of your dream project.
            </p>
            
            <div className="animate-bounce-in animate-delay-300 mb-6 sm:mb-8">
              <Button 
                onClick={() => {
                  const contactFormSection = document.getElementById('contact-form-section');
                  if (contactFormSection) {
                    contactFormSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-6 sm:px-8 lg:px-12 py-3 lg:py-4 rounded-lg btn-hover hover-lift transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg lg:text-xl">
                Start Your Construction
              </Button>
            </div>
            
            <div className="border-t border-orange-200 pt-4 sm:pt-6 animate-fade-in-up animate-delay-500">
              <p className="text-slate-500 text-xs sm:text-sm lg:text-base">
                © 2025 AsterTechSolutions All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
