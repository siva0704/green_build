
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const ConstructionMaterials = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const materials = [
    {
      title: "Premium Cement",
      description: "High-strength, premium-grade cement for structural durability in all weather conditions.",
      image: "/lovable-uploads/74e83edc-1e36-4258-9c48-106669639de5.png"
    },
    {
      title: "Steel Rebars",
      description: "Corrosion-resistant TMT rebars for maximum strength and safety in concrete structure.",
      image: "/lovable-uploads/57b5493e-68ee-4a8d-9ddc-f93d4887cf44.png"
    },
    {
      title: "Quality Bricks",
      description: "Eco-friendly, high-compression bricks for robust wall construction and insulation.",
      image: "/lovable-uploads/c9a50707-62f5-4d46-91c7-ecb7c088438c.png"
    },
    {
      title: "Granite Tiles",
      description: "Polished, slip-resistant granite tiles for elegant and durable flooring solutions.",
      image: "/lovable-uploads/7f3ef73c-a2bc-44db-b739-2d47f1670f16.png"
    },
    {
      title: "Roofing Materials",
      description: "Weather-resistant roofing solutions including tiles, sheets, and waterproofing materials.",
      image: "/lovable-uploads/9d3ca553-d650-4b08-a195-ce7132e54796.png"
    },
    {
      title: "Insulation Foam",
      description: "Advanced thermal insulation materials for energy-efficient temperature control.",
      image: "/lovable-uploads/a3edd0df-39c6-4128-93fd-b0b82a80aada.png"
    },
    {
      title: "Electrical Wiring",
      description: "Fire-resistant electrical cables and wiring systems for safe power distribution.",
      image: "/lovable-uploads/12b8c3f9-94e2-4960-9006-cc41cdce8964.png"
    },
    {
      title: "Plumbing Pipes",
      description: "Durable PVC and copper pipes for reliable water supply and drainage systems.",
      image: "/lovable-uploads/6c1b9b3e-6235-48db-abc4-31bf1fdf5446.png"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-100 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text mb-8 sm:mb-12 lg:mb-16 xl:mb-20 text-center animate-fade-in-up">
          CONSTRUCTION MATERIALS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {materials.map((material, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover-lift transition-all duration-500 animate-scale-in animate-delay-${(index + 2) * 100} border border-teal-200 group hover:shadow-2xl`}
            >
              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={material.image}
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-slate-800 font-bold mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl group-hover:text-teal-600 transition-colors duration-300">
                  {material.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
