
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const CostEstimation = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  
  const handleStartConstructionClick = () => {
    // Smooth scroll to contact form section
    const contactFormSection = document.getElementById('contact-form-section');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const costOptions = [
    { name: "Basic", price: "₹ 2000 /sqft" },
    { name: "Classic", price: "₹ 2200 /sqft" },
    { name: "Premium", price: "₹ 2350 /sqft" },
    { name: "Royale", price: "₹ 2600 /sqft" },
    { name: "Interior", price: "₹ 1220 - 3000 /sqft" }
  ];

  return (
    <>
      <section 
        ref={sectionRef} 
        className={`py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 sm:mb-12 lg:mb-16 xl:mb-20 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-4 sm:mb-6 px-2 font-inter">
              Cost Estimation Of Constructing A House
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto px-4 font-inter">
              Transparent pricing with no hidden costs. Choose the package that fits your needs.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            {costOptions.map((option, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 xl:px-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-professional hover:shadow-interactive transition-all duration-300 animate-fade-in-left animate-delay-${(index + 3) * 100} hover-lift group border border-purple-100 mx-2`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-purple-600 font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl group-hover:scale-105 transition-transform duration-300 font-inter">
                    {option.name}
                  </span>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-slate-800 font-bold text-base sm:text-lg lg:text-xl xl:text-2xl block font-inter">
                    {option.price}
                  </span>
                  <span className="text-slate-500 text-sm sm:text-base font-inter">All inclusive pricing</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-bounce-in animate-delay-700">
            <Button 
              onClick={handleStartConstructionClick}
              className="start-construction-btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl btn-hover rounded-xl shadow-professional hover:shadow-interactive font-inter min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem]"
            >
              Start Your Construction
            </Button>
          </div>
        </div>
      </section>

      
    </>
  );
};
