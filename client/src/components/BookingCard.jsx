import React, { useState } from "react";
import { Calendar, Clock, MapPin, Ticket, QrCode, Trash2 } from "lucide-react";
import CustomAlert from "./CustomAlert";

const BookingCard = ({ booking, onRemove }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const handleCancelClick = () => {
        setShowConfirm(true);
    };

    const confirmCancellation = () => {
        setShowConfirm(false);
        setIsDeleting(true);
        // Wait for animation to finish before removing from state
        setTimeout(() => {
            onRemove(booking._id);
        }, 700);
    };

    return (
        <>
            <CustomAlert
                isOpen={showConfirm}
                message={`Are you sure you want to cancel your booking for "${booking.movie.title}"? This action cannot be undone.`}
                onConfirm={confirmCancellation}
                onCancel={() => setShowConfirm(false)}
            />

            <div
                style={{
                    opacity: isDeleting ? 0 : 1,
                    transform: isDeleting
                        ? 'perspective(1000px) rotateX(90deg) scale(0.8) translateY(50px)'
                        : 'perspective(1000px) rotateX(0deg) scale(1) translateY(0)',
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: isDeleting ? 'none' : 'auto'
                }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden 
          border border-gray-700 hover:border-[rgb(248_69_101)] 
          hover:shadow-xl hover:shadow-[rgb(248_69_101)]/10 group relative`}
            >
                <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">

                    {/* Movie Poster */}
                    <div className="flex-shrink-0">
                        <img
                            src={booking.movie.poster_path}
                            alt={booking.movie.title}
                            className="w-full md:w-48 h-64 object-cover rounded-xl shadow-lg 
                group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1 flex flex-col justify-between">

                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[rgb(248_69_101)] 
                    transition-colors duration-300">
                                        {booking.movie.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {booking.movie.genres.slice(0, 3).map(genre => (
                                            <span
                                                key={genre.id}
                                                className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Status Badge */}
                                <span className="px-4 py-2 rounded-full text-sm font-semibold 
                  bg-green-500/20 text-green-400 border border-green-500/50">
                                    Paid
                                </span>
                            </div>

                            {/* Show Information */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Calendar className="w-5 h-5 text-[rgb(248_69_101)]" />
                                    <div>
                                        <p className="text-xs text-gray-500">Date</p>
                                        <p className="font-medium">{formatDate(booking.date)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <Clock className="w-5 h-5 text-[rgb(248_69_101)]" />
                                    <div>
                                        <p className="text-xs text-gray-500">Time</p>
                                        <p className="font-medium">10:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <Ticket className="w-5 h-5 text-[rgb(248_69_101)]" />
                                    <div>
                                        <p className="text-xs text-gray-500">Seats</p>
                                        <p className="font-medium">{booking.seats.join(', ')}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="w-5 h-5 text-[rgb(248_69_101)]" />
                                    <div>
                                        <p className="text-xs text-gray-500">Screen</p>
                                        <p className="font-medium">Screen 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                            <div>
                                <p className="text-sm text-gray-500">Total Amount</p>
                                <p className="text-2xl font-bold text-[rgb(248_69_101)]">₹ {booking.amount}</p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleCancelClick}
                                    className="flex items-center gap-2 px-5 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 
                  rounded-xl transition-all duration-300 font-medium text-red-500 group/cancel cursor-pointer"
                                    title="Cancel Booking"
                                >
                                    <Trash2 className="w-5 h-5 group-hover/cancel:scale-110 transition-transform" />
                                    <span className="hidden sm:inline">Cancel</span>
                                </button>

                                <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 
                  rounded-xl transition-all duration-300 font-medium group/btn cursor-pointer">
                                    <QrCode className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                    <span className="hidden sm:inline">QR Code</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingCard;
