
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OurProjectIdeas } from "@/components/OurProjectIdeas";
import { CompletedProjects } from "@/components/CompletedProjects";
import { CostEstimation } from "@/components/CostEstimation";
import { CustomerComparison } from "@/components/CustomerComparison";
import { HowItWorks } from "@/components/HowItWorks";
import { ConstructionMaterials } from "@/components/ConstructionMaterials";
import { InternshipOpportunity } from "@/components/InternshipOpportunity";
import { FAQs } from "@/components/FAQs";
import { AboutUs } from "@/components/AboutUs";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-16 sm:pt-18 lg:pt-20 xl:pt-24">
        <HeroSection />
        <OurProjectIdeas />
        <CompletedProjects />
        <CostEstimation />
        <CustomerComparison />
        <HowItWorks />
        <ConstructionMaterials />
        <InternshipOpportunity />
        <FAQs />
        <AboutUs />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
