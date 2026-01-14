import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData, dummyDateTimeData } from "../assets/assets";
import { Star, Calendar, Clock, Heart, Share2, Play } from "lucide-react";
import { AppContext } from "../context/AppContext";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, isMovieFavorite } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(Object.keys(dummyDateTimeData)[0]);

  // Find the movie by ID
  const movie = dummyShowsData.find(m => m._id === id);

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Movie Not Found</h2>
          <button
            onClick={() => navigate('/movies')}
            className="px-6 py-3 bg-[rgb(248_69_101)] hover:bg-[rgb(214_56_84)] rounded-full transition"
          >
            Back to Movies
          </button>
        </div>
      </div>
    );
  }

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const toggleFavorite = () => {
    if (isMovieFavorite(movie._id)) {
      removeFromFavorites(movie._id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section with Backdrop */}
      <div className="relative h-[70vh] md:h-[80vh]">
        {/* Backdrop Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e]/90 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-end px-6 md:px-16 lg:px-40 xl:px-64 pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-end animate-[slideUp_0.8s_ease-out]">

            {/* Movie Poster */}
            <div className="flex-shrink-0">
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-48 md:w-64 rounded-2xl shadow-2xl border-4 border-gray-800 
                  hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Movie Info */}
            <div className="flex-1 pb-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                {movie.title}
              </h1>

              <p className="text-xl text-gray-300 italic mb-4">"{movie.tagline}"</p>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{movie.vote_average.toFixed(1)}/10</span>
                  <span className="text-gray-400 text-sm">({movie.vote_count.toLocaleString()} votes)</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5" />
                  <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map(genre => (
                  <span
                    key={genre.id}
                    className="px-4 py-2 bg-[rgb(248_69_101)]/20 border border-[rgb(248_69_101)]/50 
                      rounded-full text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={toggleFavorite}
                  className={`p-3 rounded-full border-2 transition-all duration-300 ${isMovieFavorite(movie._id)
                    ? 'bg-[rgb(248_69_101)] border-[rgb(248_69_101)] text-white'
                    : 'bg-black/40 border-gray-600 text-gray-300 hover:border-[rgb(248_69_101)]'
                    }`}
                >
                  <Heart className={`w-6 h-6 ${isMovieFavorite(movie._id) ? 'fill-white' : ''}`} />
                </button>
                <button className="p-3 rounded-full bg-black/40 border-2 border-gray-600 
                  text-gray-300 hover:border-[rgb(248_69_101)] transition-all duration-300">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details Section */}
      <div className="px-6 md:px-16 lg:px-40 xl:px-64 py-16">

        {/* Overview */}
        <div className="mb-16 animate-[fadeIn_1s_ease-in-out]">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{movie.overview}</p>
        </div>

        {/* Cast Section */}
        <div className="mb-16 animate-[fadeIn_1.2s_ease-in-out]">
          <h2 className="text-3xl font-bold mb-6">Cast</h2>
          <div className="flex flex-wrap gap-3">
            {movie.casts.slice(0, 12).map((cast, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full 
                  hover:border-[rgb(248_69_101)] hover:bg-[rgb(248_69_101)]/10 
                  transition-all duration-300 group cursor-default"
              >
                <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white">
                  {cast.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Showtimes Section */}
        <div className="animate-[fadeIn_1.4s_ease-in-out]">
          <h2 className="text-3xl font-bold mb-6">Book Tickets</h2>

          {/* Date Selection */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Select Date</h3>
            <div className="flex flex-wrap gap-4">
              {Object.keys(dummyDateTimeData).map(date => {
                const dateObj = new Date(date);
                return (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`flex flex-col items-center px-6 py-4 rounded-xl border-2 transition-all duration-300 
                      ${selectedDate === date
                        ? 'bg-[rgb(248_69_101)] border-[rgb(248_69_101)] text-white'
                        : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-[rgb(248_69_101)]'
                      }`}
                  >
                    <span className="text-sm opacity-80">
                      {dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                    </span>
                    <span className="text-2xl font-bold">
                      {dateObj.getDate()}
                    </span>
                    <span className="text-sm opacity-80">
                      {dateObj.toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Showtime</h3>
            <div className="flex flex-wrap gap-4">
              {dummyDateTimeData[selectedDate]?.map((show, index) => (
                <button
                  key={index}
                  onClick={() => navigate(`/movies/${id}/${selectedDate}`)}
                  className="px-8 py-4 bg-gray-800 border-2 border-gray-700 rounded-xl 
                    hover:bg-[rgb(248_69_101)] hover:border-[rgb(248_69_101)] 
                    transition-all duration-300 font-semibold text-lg group"
                >
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {formatTime(show.time)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;