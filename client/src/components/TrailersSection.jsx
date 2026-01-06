import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { Play } from "lucide-react";

const TrailersSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  };

  const embedUrl = `https://www.youtube.com/embed/${getYouTubeId(currentTrailer.videoUrl)}`;

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden relative' >
      <BlurCircle top='100px' right='-100px' />

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Trailers</h2>
      <p className="text-gray-400 mb-8">Watch the hottest upcoming releases</p>

      {/* Video Player */}
      <div className="relative mt-6 mb-10">
        <div className="mx-auto max-w-[960px] aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[960px] mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrailer(trailer)}
            className={`group relative aspect-video rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${currentTrailer.videoUrl === trailer.videoUrl ? 'ring-2 ring-red-500' : ''
              }`}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TrailersSection