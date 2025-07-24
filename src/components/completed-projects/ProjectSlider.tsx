
import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

interface ProjectMedia {
  url: string;
  type: 'image' | 'video' | 'vimeo';
  title?: string;
}

interface ProjectSliderProps {
  projectMedia: ProjectMedia[];
  onCardClick: (mediaItem: ProjectMedia, index: number) => void;
}

export const ProjectSlider = ({ projectMedia, onCardClick }: ProjectSliderProps) => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="project-media-swiper"
        breakpoints={{
          320: {
            spaceBetween: 16,
          },
          640: {
            spaceBetween: 20,
          },
          1024: {
            spaceBetween: 24,
          },
        }}
      >
        {[...projectMedia, ...projectMedia].map((mediaItem, index) => (
          <SwiperSlide key={index} className="!w-[280px] sm:!w-[320px] lg:!w-[360px]">
            <div 
              className="bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8] rounded-xl flex items-center justify-center relative group cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl border border-white/50 overflow-hidden"
              style={{ height: '240px', willChange: 'transform', transform: 'translateZ(0)' }}
              onClick={() => onCardClick(mediaItem, index)}
            >
              {mediaItem.type === 'image' ? (
                <img
                  src={mediaItem.url}
                  alt={`Project ${(index % projectMedia.length) + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              ) : mediaItem.type === 'vimeo' ? (
                <>
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <Play className="w-12 h-12 mx-auto mb-2" fill="white" />
                      <p className="text-sm font-medium">{mediaItem.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/80 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={mediaItem.url}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/80 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Project {(index % projectMedia.length) + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .project-media-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};
