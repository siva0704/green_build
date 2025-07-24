
import { Play } from "lucide-react";

interface ProjectMediaViewerProps {
  currentMedia: { url: string; type: 'image' | 'video' | 'vimeo'; title?: string } | null;
  onClose: () => void;
}

export const ProjectMediaViewer = ({ currentMedia, onClose }: ProjectMediaViewerProps) => {
  if (!currentMedia) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 video-modal-fade-in">
      <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden video-player-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          ×
        </button>
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.url}
            alt="Project"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        ) : currentMedia.type === 'vimeo' ? (
          <iframe
            src={`https://player.vimeo.com/video/${currentMedia.url}?badge=0&autopause=0&player_id=0&app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            className="w-full h-auto max-h-[80vh] aspect-video"
            title={currentMedia.title || "Video"}
          ></iframe>
        ) : (
          <video
            src={currentMedia.url}
            controls
            autoPlay
            className="w-full h-auto max-h-[80vh]"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      
      <style>{`
        .video-modal-fade-in {
          animation: modal-fade-in 0.3s ease-out;
        }
        
        .video-player-scale-in {
          animation: player-scale-in 0.4s ease-out;
        }
        
        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes player-scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
