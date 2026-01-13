import React, { useState } from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Extract unique genres
  const allGenres = ['All', ...new Set(dummyShowsData.flatMap(movie => movie.genres.map(g => g.name)))];

  // Filter movies based on search and genre
  const filteredMovies = dummyShowsData.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genres.some(g => g.name === selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className='relative mt-32 mb-20 px-6 md:px-16 lg:px-40 xl:px-64 overflow-hidden min-h-[80vh]'>

      {/* Page Header */}
      <div className='mb-12'>
        <h1 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 
          bg-clip-text text-transparent'>
          Now Showing
        </h1>
        <p className='text-gray-400 text-lg'>Discover the latest blockbusters and timeless classics</p>
      </div>

      {/* Search and Filter Section */}
      <div className='mb-10 flex flex-col md:flex-row gap-4 items-center'>

        {/* Search Bar */}
        <div className='relative flex-1 w-full'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search for movies...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full 
              text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(248_69_101)] 
              focus:ring-2 focus:ring-[rgb(248_69_101)]/20 transition-all duration-300'
          />
        </div>

        {/* Genre Filter */}
        <div className='relative'>
          <SlidersHorizontal className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className='pl-12 pr-8 py-3 bg-gray-800/50 border border-gray-700 rounded-full 
              text-white focus:outline-none focus:border-[rgb(248_69_101)] 
              focus:ring-2 focus:ring-[rgb(248_69_101)]/20 transition-all duration-300 cursor-pointer
              appearance-none min-w-[180px]'
          >
            {allGenres.map(genre => (
              <option key={genre} value={genre} className='bg-gray-800'>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className='mb-6'>
        <p className='text-gray-400'>
          {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
        </p>
      </div>

      {/* Movies Grid */}
      {filteredMovies.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 
          animate-[fadeIn_0.5s_ease-in-out]'>

          {filteredMovies.map((movie) => (
            <div key={movie._id} className='animate-[slideUp_0.5s_ease-out]'>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-20'>
          <Filter className='w-20 h-20 text-gray-600 mb-4' />
          <h3 className='text-2xl font-semibold text-gray-400 mb-2'>No movies found</h3>
          <p className='text-gray-500'>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Movies;