
// Utility functions for contact functionality

export const handleContactUsClick = () => {
  // Open default email client with prefilled email
  window.location.href = 'mailto:greenbuildconstruction8@gmail.com';
};

export const handleStartConstructionClick = () => {
  // Smooth scroll to contact form section
  const contactFormSection = document.getElementById('contact-form-section');
  if (contactFormSection) {
    contactFormSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleWhatsAppClick = () => {
  // Open WhatsApp with the specified phone number
  window.open('https://wa.me/918660271065', '_blank');
};

// Add event listeners for buttons with specific classes
export const initializeContactFunctionality = () => {
  // Contact Us buttons
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('contact-us-btn') || target.closest('.contact-us-btn')) {
      e.preventDefault();
      handleContactUsClick();
    }
  });

  // Start Construction buttons
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('start-construction-btn') || target.closest('.start-construction-btn')) {
      e.preventDefault();
      handleStartConstructionClick();
    }
  });

  // WhatsApp icon
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('whatsapp-icon') || target.closest('.whatsapp-icon')) {
      e.preventDefault();
      handleWhatsAppClick();
    }
  });
};

// Initialize on DOM load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeContactFunctionality);
}
