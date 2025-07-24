
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const CustomerComparison = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const handleStartConstructionClick = () => {
    // Smooth scroll to contact form section
    const contactFormSection = document.getElementById('contact-form-section');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const greenBuildFeatures = [
    "Facility for 100% Money Safety",
    "Top Quality Assurance", 
    "Monitor The Progress From Start To End",
    "ZERO Cost Overruns",
    "Guaranteed On Time Delivery"
  ];

  const contractorIssues = [
    "No Safety of Money & High Risk",
    "Improper quality checks",
    "Have to go to construction site",
    "Costs keep increasing",
    "No guarantee on timely delivery"
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 lg:py-24 gradient-bg-light fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 text-center mb-12 lg:mb-16 animate-fade-in-up">
          We serve our customers <span className="text-emerald-600">better than others</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-300 transform -translate-x-1/2 hidden lg:block opacity-50"></div>
          
          <div className="animate-fade-in-left animate-delay-200 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-professional hover:shadow-interactive transition-all duration-500 border border-emerald-200">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-8 text-center">
              Green Build
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {greenBuildFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 hover-lift transition-all duration-300 animate-slide-in-bottom animate-delay-${(index + 3) * 100} group p-4 rounded-xl hover:bg-emerald-50`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center animate-bounce-in shadow-professional group-hover:shadow-interactive transition-all duration-300 flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-base sm:text-lg lg:text-xl group-hover:text-emerald-700 transition-colors duration-300 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-right animate-delay-300 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-professional hover:shadow-interactive transition-all duration-500 border border-red-200">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mb-8 text-center">
              Contractors
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {contractorIssues.map((issue, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 hover-lift transition-all duration-300 animate-slide-in-bottom animate-delay-${(index + 3) * 100} group p-4 rounded-xl hover:bg-red-50`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center animate-bounce-in shadow-professional group-hover:shadow-interactive transition-all duration-300 flex-shrink-0 mt-1">
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-base sm:text-lg lg:text-xl group-hover:text-red-700 transition-colors duration-300 leading-relaxed">
                    {issue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8 animate-fade-in-up animate-delay-600">
          <p className="text-emerald-600 font-bold text-xl sm:text-2xl lg:text-3xl">
            Experience Tech-Enabled Construction with us
          </p>
        </div>
        
        <div className="text-center animate-bounce-in animate-delay-700">
          <Button 
            onClick={handleStartConstructionClick}
            className="start-construction-btn gradient-emerald text-white font-semibold px-8 sm:px-12 lg:px-16 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl btn-hover rounded-2xl shadow-professional hover:shadow-interactive"
          >
            Start Your Construction
          </Button>
        </div>
      </div>
    </section>
  );
};
