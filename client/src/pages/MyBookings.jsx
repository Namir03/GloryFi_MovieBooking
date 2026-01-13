import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Ticket } from "lucide-react";
import BookingCard from "../components/BookingCard";

const MyBookings = () => {
  const { bookings, removeBooking } = useContext(AppContext);
  const [filterStatus, setFilterStatus] = useState('all'); // all, upcoming, past

  // Filter bookings based on status
  const now = new Date();
  const filteredBookings = bookings.filter(booking => {
    const showDate = new Date(booking.date);
    if (filterStatus === 'upcoming') return showDate > now;
    if (filterStatus === 'past') return showDate <= now;
    return true; // 'all'
  });

  return (
    <div className="min-h-screen py-32 px-6 md:px-16 lg:px-40 xl:px-64">

      {/* Header */}
      <div className="mb-12 animate-[slideDown_0.6s_ease-out]">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 
          bg-clip-text text-transparent">
          My Bookings
        </h1>
        <p className="text-gray-400 text-lg">View and manage your movie tickets</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 animate-[fadeIn_0.8s_ease-in-out]">
        {['all', 'upcoming', 'past'].map(filter => (
          <button
            key={filter}
            onClick={() => setFilterStatus(filter)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize
              ${filterStatus === filter
                ? 'bg-[rgb(248_69_101)] text-white shadow-lg shadow-[rgb(248_69_101)]/30'
                : 'bg-gray-800 border-2 border-gray-700 text-gray-300 hover:border-[rgb(248_69_101)]'
              }`}
          >
            {filter} Bookings
          </button>
        ))}
      </div>

      {/* Bookings List */}
      {filteredBookings.length > 0 ? (
        <div className="space-y-8 animate-[fadeIn_1s_ease-in-out]">
          {filteredBookings.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              onRemove={removeBooking}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 animate-[fadeIn_1s_ease-in-out]">
          <Ticket className="w-24 h-24 text-gray-600 mb-6" />
          <h3 className="text-3xl font-semibold text-gray-400 mb-3">No bookings found</h3>
          <p className="text-gray-500 mb-6">
            {filterStatus === 'all'
              ? 'You haven\'t made any bookings yet'
              : `No ${filterStatus} bookings available`}
          </p>
          <button
            onClick={() => window.location.href = '/movies'}
            className="px-8 py-4 bg-[rgb(248_69_101)] hover:bg-[rgb(214_56_84)] rounded-full 
              font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
          >
            Browse Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;