
import { Shield, IndianRupee } from "lucide-react";

export const ProjectGuarantees = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
      <div className="flex items-center gap-3 animate-fade-in-left animate-delay-400 hover-scale group">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
          <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div className="text-left">
          <p className="text-slate-700 font-bold text-base sm:text-lg">Guaranteed</p>
          <p className="text-slate-600 text-sm">On Time Delivery</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 animate-fade-in-right animate-delay-500 hover-scale group">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
          <IndianRupee className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <p className="text-slate-700 font-bold text-base sm:text-lg">Zero</p>
          </div>
          <p className="text-slate-600 text-sm">Cost Overruns</p>
        </div>
      </div>
    </div>
  );
};
