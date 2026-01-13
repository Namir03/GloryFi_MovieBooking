import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import MovieCard from '../components/MovieCard'
import { Heart } from 'lucide-react'

const Favourite = () => {
  const { favorites } = useContext(AppContext);

  if (favorites.length === 0) {
    return (
      <div className='min-h-[70vh] flex flex-col items-center justify-center text-center px-4'>
        <div className='bg-gray-800/50 p-6 rounded-full mb-6'>
          <Heart className='w-16 h-16 text-gray-500' />
        </div>
        <h2 className='text-3xl font-bold mb-3'>No Favorites Yet</h2>
        <p className='text-gray-400 text-lg max-w-md'>
          Start exploring movies and click the heart icon to build your collection.
        </p>
      </div>
    )
  }

  return (
    <div className='min-h-screen px-6 md:px-12 lg:px-24 py-12'>
      <div className='flex items-center gap-4 mb-10'>
        <h1 className='text-3xl md:text-4xl font-bold'>My Favorites</h1>
        <span className='bg-[rgb(248_69_101)] text-white px-3 py-1 rounded-full text-sm font-semibold'>
          {favorites.length}
        </span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {favorites.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Favourite