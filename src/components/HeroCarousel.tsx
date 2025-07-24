
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/lovable-uploads/07d0c1da-4d38-4d2a-97f3-b505fd0a12b4.png",
    alt: "Modern wireframe building architecture design"
  },
  {
    src: "/lovable-uploads/ecec804e-a88e-4ce3-a9d5-253ecffdb38d.png", 
    alt: "Contemporary luxury home architectural visualization"
  },
  {
    src: "/lovable-uploads/207af8a7-5183-4a38-8e78-c52185af5096.png",
    alt: "Construction site with workers and cranes at sunset"
  },
  {
    src: "/lovable-uploads/6395e780-0a2b-459d-91c5-450ece017b34.png",
    alt: "Digital blueprint construction technology concept"
  }
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Light Grey Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-700/90"></div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-emerald-400 scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
