
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const FAQs = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

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
      className={`py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1e3a8a] text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 animate-fade-in-up bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent">
          FAQs
        </h2>
        
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up animate-delay-200">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4 lg:space-y-6">
            {[
              {
                id: "item-1",
                question: "What is Green Build ?",
                answer: "Green Build is a tech-enabled construction company simplifying home construction. It uses technology-based solutions to deliver high quality homes on time & within budget."
              },
              {
                id: "item-2",
                question: "Is Green Build an authentic company?",
                answer: "Yes, Green Build is a fully licensed and authentic construction company with all necessary certifications and registrations."
              },
              {
                id: "item-3",
                question: "Is it more expensive than local contractor?",
                answer: "While our initial costs may seem comparable, we provide better value through guaranteed timelines, quality assurance, and zero cost overruns."
              },
              {
                id: "item-4",
                question: "How can I track progress of project?",
                answer: "We provide real-time project tracking through our technology platform, allowing you to monitor progress from anywhere."
              },
              {
                id: "item-5",
                question: "What types of homes can Green Build construct?",
                answer: "We specialize in various home types including modern villas, traditional homes, apartments, and custom designs ranging from 1BHK to 4BHK configurations."
              },
              {
                id: "item-6",
                question: "Do you provide interior design services?",
                answer: "Yes, we offer comprehensive interior design services including space planning, furniture selection, and complete home decoration packages."
              },
              {
                id: "item-7",
                question: "What is the typical construction timeline?",
                answer: "Construction timelines vary based on project size, but typically range from 6-12 months for residential homes, with guaranteed completion dates."
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className={`bg-white/70 backdrop-blur-sm border border-blue-200 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-left animate-delay-${(index + 3) * 100}`}
              >
                <AccordionTrigger className="text-left font-bold text-[#333333] hover:no-underline px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg xl:text-xl hover:text-[#1e3a8a] transition-colors duration-300">
                  {index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#808080] px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center animate-bounce-in animate-delay-600">
          <Button 
            onClick={handleStartConstructionClick}
            className="start-construction-btn w-full max-w-xs sm:max-w-sm lg:max-w-lg bg-gradient-to-r from-[#00FF00] to-[#00DD00] hover:from-[#00DD00] hover:to-[#00BB00] text-black font-semibold py-3 sm:py-4 lg:py-5 xl:py-6 text-sm sm:text-base lg:text-lg xl:text-xl btn-hover hover-lift transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Construction
          </Button>
        </div>
      </div>
    </section>
  );
};
