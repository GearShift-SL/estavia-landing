// DemoVideo.tsx
import { useState } from 'react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import demoVideo from '../assets/videos/demo.mp4';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    // Gradient parent
    <div className="relative w-full bg-gradient-to-b from-blue-500/10 to-white">
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-16">
        {/* Video Container with negative margin for overflow effect */}
        <div className="relative rounded-2xl -mt-50  shadow-xl p-2">
          {!isPlaying ? (
            // GIF Preview with Play Button
            <div className="relative">
              <video
                src={demoVideo}
                loop
                muted
                playsInline
                autoPlay
                className="w-full rounded-2xl object-contain bg-transparent"
              />
              {/* <img src="/path-to-your-demo.gif" alt="Product Demo Preview" className="w-full rounded-lg" /> */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-[#4173DD] hover:bg-autovisita text-white rounded-3xl p-4
                     flex items-center justify-center gap-2 transition-all duration-200
                     shadow-lg hover:shadow-xl
                     hover:cursor-pointer
                     "
              >
                <IconPlayerPlayFilled size={32} />
                <span>
                  <strong>Descubre AutoVisita</strong> en 4 min
                </span>
              </button>

              {/* Put a dark layer over the video */}
              {/* <div className="absolute inset-0 bg-black/5 pointer-events-none" /> */}
            </div>
          ) : (
            // YouTube Embed
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="YOUR_YOUTUBE_EMBED_URL?autoplay=1"
                title="Product Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
