
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


export const Header = () => {
  

  const handleContactUsClick = () => {
    // Smooth scroll to contact form section
    const contactFormSection = document.getElementById('contact-form-section');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 glass-morphism border-b border-emerald-200/20 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex-1 min-w-0 pr-2 sm:pr-3">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-emerald-600 font-inter leading-tight">
              Green Build
            </h1>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-slate-700 font-medium font-inter leading-tight">
              Interiors & Constructions Davangere
            </p>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <Button 
              onClick={handleContactUsClick}
              className="contact-us-btn gradient-emerald text-white font-semibold px-2 sm:px-3 lg:px-4 xl:px-6 py-1.5 sm:py-2 lg:py-2.5 text-xs sm:text-sm lg:text-base btn-hover shadow-professional hover:shadow-interactive rounded-lg whitespace-nowrap font-inter"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      
    </>
  );
};
