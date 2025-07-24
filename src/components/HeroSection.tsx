import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, FileText, Award, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { HeroCarousel } from "@/components/HeroCarousel";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const showSuccessPopup = () => {
    // Create and show popup
    const popup = document.createElement('div');
    popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 font-semibold';
    popup.textContent = 'Thanks for contacting us!';
    document.body.appendChild(popup);

    // Remove popup after 2 seconds
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      location: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.mobileNumber || !formData.location) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data object matching exactly what your Google Sheet expects
      const submissionData = {
        'Timestamp': new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        'Full Name': formData.fullName.trim(),
        'Mobile Number': formData.mobileNumber.trim(),
        'Location': formData.location.trim(),
        'Source': 'Hero Section',
        'Status': 'New'
      };

      console.log('Sending data to Google Sheets:', submissionData);
      console.log('Field names being sent:', Object.keys(submissionData));

      // Your Google Apps Script URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbxZjW3XWBwfMzsW6j5glz6iwPI_MBnG48khJyAaJIyO_j9eVA4VSoE1nKMPeJJ5zMY6/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // With no-cors mode, we can't check response status, so we assume success
      // if no network error occurs
      showSuccessPopup();
      resetForm();
      toast({
        title: "Success!",
        description: "Your form has been submitted successfully. We'll contact you soon!",
        variant: "default",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section 
      id="contact-form-section"
      ref={sectionRef} 
      className={`relative min-h-screen flex items-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      {/* Carousel Background */}
      <HeroCarousel />

      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-6 sm:pb-8 lg:pb-12 xl:pb-16">
        
        {/* Mobile: Hero Content First, Desktop: Form First */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:items-center">
          
          {/* Hero Content Section - First on mobile, Second on desktop */}
          <div className="text-white space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 mb-6 sm:mb-8 lg:mb-0 lg:order-2">
            <div className="animate-fade-in-up py-3 sm:py-4 lg:py-6 xl:py-8">
              {/* CONSTRUCT YOUR - Using Asterone font with larger mobile font size */}
              <div className="w-full mb-1.5 sm:mb-2 lg:mb-3 xl:mb-4">
                <h1 className="flex justify-center lg:justify-start">
                  <span className="whitespace-nowrap bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-2xl filter tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-asterone">
                    CONSTRUCT YOUR
                  </span>
                </h1>
              </div>
              
              {/* DREAM HOME - Using Asterone font with larger mobile font size */}
              <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-emerald-400 animate-pulse-slow drop-shadow-2xl filter font-asterone">
                  DREAM
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-emerald-400 animate-pulse-slow drop-shadow-2xl filter font-asterone">
                  HOME
                </span>  
              </div>
            </div>
            
            {/* Stats grid - Better mobile layout with Inter font */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 lg:gap-2 animate-fade-in-left animate-delay-200 hover-scale group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
                  <Home className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-inter">3000+</p>
                  <p className="text-xs sm:text-sm lg:text-base opacity-90 font-inter">Homes</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 lg:gap-2 animate-fade-in-left animate-delay-300 hover-scale group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-inter">700+</p>
                  <p className="text-xs sm:text-sm lg:text-base opacity-90 font-inter">Floor Plans</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 lg:gap-2 animate-fade-in-left animate-delay-400 hover-scale group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight font-inter">DVG's No.1</p>
                  <p className="text-xs opacity-90 leading-tight font-semibold text-center font-inter">Tech-Enabled Construction Company</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 lg:gap-2 animate-fade-in-left animate-delay-500 hover-scale group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight font-inter">10 YEAR</p>
                  <p className="text-xs opacity-90 leading-tight font-semibold font-inter">STRUCTURAL<br />WARRANTY</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section - Second on mobile, First on desktop */}
          <div className="glass-morphism p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-interactive animate-fade-in-left animate-delay-300 hover-lift border border-emerald-200/30 lg:order-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-1.5 sm:mb-2 lg:mb-3 text-slate-800 animate-fade-in-up font-inter">Book FREE Appointment</h3>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-600 mb-3 sm:mb-4 lg:mb-6 xl:mb-8 animate-fade-in-up animate-delay-100 font-inter">For Best Quality Construction At Affordable Rates</p>
            
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 lg:space-y-4 xl:space-y-6">
              <div className="animate-slide-in-bottom animate-delay-400">
                <Input 
                  placeholder="Full Name*" 
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="h-9 sm:h-10 lg:h-12 xl:h-14 text-xs sm:text-sm lg:text-base xl:text-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-md sm:rounded-lg shadow-sm hover:shadow-md font-inter" 
                  required
                />
              </div>
              
              <div className="flex gap-1.5 sm:gap-2 lg:gap-3 xl:gap-4 animate-slide-in-bottom animate-delay-500">
                <Select defaultValue="+91">
                  <SelectTrigger className="w-14 sm:w-16 lg:w-20 xl:w-24 h-9 sm:h-10 lg:h-12 xl:h-14 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md sm:rounded-lg text-xs sm:text-sm lg:text-base font-inter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 shadow-professional rounded-md sm:rounded-lg">
                    <SelectItem value="+91" className="font-inter">🇮🇳 +91</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  placeholder="Mobile Number*" 
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  className="flex-1 h-9 sm:h-10 lg:h-12 xl:h-14 text-xs sm:text-sm lg:text-base xl:text-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-md sm:rounded-lg shadow-sm hover:shadow-md font-inter" 
                  required
                />
              </div>
              
              <div className="animate-slide-in-bottom animate-delay-600">
                <Input 
                  placeholder="Location of your plot*" 
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="h-9 sm:h-10 lg:h-12 xl:h-14 text-xs sm:text-sm lg:text-base xl:text-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-md sm:rounded-lg shadow-sm hover:shadow-md font-inter" 
                  required
                />
              </div>
              
              <div className="animate-bounce-in animate-delay-700">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-emerald text-white font-semibold h-10 sm:h-12 lg:h-14 xl:h-16 text-xs sm:text-sm lg:text-base xl:text-lg btn-hover rounded-md sm:rounded-lg shadow-professional hover:shadow-interactive font-inter"
                >
                  {isSubmitting ? 'Submitting...' : 'Start Your Construction'}
                </Button>
              </div>
              
              <p className="text-xs animate-fade-in-up animate-delay-800 leading-relaxed text-slate-500 font-inter px-1">
                *By submitting this form, I confirm that I have read and agreed to accept Green Build's{" "}
                <a href="#" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all duration-300">privacy policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      
    </section>
  );
};
