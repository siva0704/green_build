
export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Updated to use the correct WhatsApp number from requirements
    window.open('https://wa.me/918660271065', '_blank');
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 xl:bottom-8 xl:right-8 z-40">
      <button 
        onClick={handleWhatsAppClick}
        className="whatsapp-icon w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 sm:border-2 lg:border-3 xl:border-4 border-white group relative animate-pulse-slow"
      >
        <img 
          src="/lovable-uploads/902dd56e-1a22-4b18-b984-3eb3b34b266c.png" 
          alt="WhatsApp" 
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 group-hover:rotate-12 transition-transform duration-300"
        />
        
        {/* Tooltip - hide on very small screens */}
        <div className="absolute bottom-full right-0 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
          Chat on WhatsApp
          <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>
    </div>
  );
};
