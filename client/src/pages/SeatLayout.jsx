import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import { ArrowLeft, Check, X } from "lucide-react";
import { AppContext } from "../context/AppContext";
import BookingSuccessModal from "../components/BookingSuccessModal";

const SeatLayout = () => {
  const { id, date } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { addBooking } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  // Find the movie
  const movie = dummyShowsData.find(m => m._id === id);

  // Generate seat layout (10 rows, 12 seats per row)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const seatsPerRow = 12;

  // Mock occupied seats (in real app, fetch from backend)
  const occupiedSeats = ['A1', 'A2', 'B5', 'C3', 'C4', 'D7', 'E8', 'E9', 'F1', 'F2', 'F3'];

  const toggleSeat = (seatId) => {
    if (occupiedSeats.includes(seatId)) return; // Can't select occupied seats

    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const getSeatStatus = (seatId) => {
    if (occupiedSeats.includes(seatId)) return 'occupied';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  };

  const ticketPrice = 0.5; // Updated price for Razorpay integration
  const totalAmount = selectedSeats.length * ticketPrice;

  const handlePayment = () => {
    if (selectedSeats.length === 0) return;

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      alert("Razorpay Key ID missing! Please updating .env file.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "GloryFi Booking",
      description: `Payment for ${movie.title}`,
      handler: function (response) {
        const newBooking = {
          _id: Date.now().toString(),
          movie,
          date,
          seats: selectedSeats,
          amount: totalAmount,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString()
        };

        addBooking(newBooking);
        setShowModal(true);
      },
      prefill: {
        name: "User",
        email: "user@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#F84464"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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

  return (
    <div className="min-h-screen py-32 px-6 md:px-16 lg:px-32">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          onClick={() => navigate(`/movies/${id}`)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Movie Details
        </button>

        <div className="flex items-center gap-6 mb-6">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-20 h-28 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400">
              {new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_350px] gap-8">

        {/* Seat Selection Area */}
        <div className="order-2 lg:order-1">

          {/* Screen */}
          <div className="mb-12">
            <div className="relative">
              <div className="h-2 bg-gradient-to-b from-[rgb(248_69_101)] to-transparent rounded-t-3xl 
                shadow-[0_0_30px_rgba(248,69,101,0.5)]"></div>
              <p className="text-center text-gray-400 text-sm mt-3 font-medium">SCREEN</p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-700 border-2 border-gray-600 rounded"></div>
              <span className="text-sm text-gray-400">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[rgb(248_69_101)] border-2 border-[rgb(248_69_101)] rounded">
                <Check className="w-full h-full text-white p-1" />
              </div>
              <span className="text-sm text-gray-400">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-500 border-2 border-gray-400 rounded opacity-50">
                <X className="w-full h-full text-gray-300 p-1" />
              </div>
              <span className="text-sm text-gray-400">Occupied</span>
            </div>
          </div>

          {/* Seats Grid */}
          <div className="space-y-4">
            {rows.map(row => (
              <div key={row} className="flex items-center justify-center gap-2">
                {/* Row Label */}
                <div className="w-8 text-center font-semibold text-gray-400">{row}</div>

                {/* Seats */}
                <div className="flex gap-2">
                  {Array.from({ length: seatsPerRow }, (_, i) => {
                    const seatNumber = i + 1;
                    const seatId = `${row}${seatNumber}`;
                    const status = getSeatStatus(seatId);

                    return (
                      <button
                        key={seatId}
                        onClick={() => toggleSeat(seatId)}
                        disabled={status === 'occupied'}
                        className={`
                          w-8 h-8 rounded text-xs font-medium transition-all duration-200
                          ${status === 'available'
                            ? 'bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 hover:border-gray-500 hover:scale-110'
                            : ''
                          }
                          ${status === 'selected'
                            ? 'bg-[rgb(248_69_101)] border-2 border-[rgb(248_69_101)] text-white scale-110 shadow-lg shadow-[rgb(248_69_101)]/30'
                            : ''
                          }
                          ${status === 'occupied'
                            ? 'bg-gray-500 border-2 border-gray-400 opacity-50 cursor-not-allowed'
                            : 'cursor-pointer'
                          }
                          ${seatNumber === 6 ? 'mr-4' : ''}
                        `}
                      >
                        {status === 'selected' && <Check className="w-full h-full p-0.5" />}
                        {status === 'occupied' && <X className="w-full h-full p-0.5 text-gray-300" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="order-1 lg:order-2">
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>

            {/* Selected Seats */}
            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-3 font-medium">Selected Seats</h3>
              {selectedSeats.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedSeats.map(seat => (
                    <span
                      key={seat}
                      className="px-3 py-2 bg-[rgb(248_69_101)]/20 border border-[rgb(248_69_101)]/50 
                        rounded-lg text-sm font-semibold"
                    >
                      {seat}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No seats selected</p>
              )}
            </div>

            <div className="border-t border-gray-700 pt-4 mb-6 space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>Ticket Price</span>
                <span className="font-semibold">₹ {ticketPrice}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Number of Seats</span>
                <span className="font-semibold">{selectedSeats.length}</span>
              </div>
              <div className="border-t border-gray-700 pt-3 flex justify-between text-xl font-bold">
                <span>Total Amount</span>
                <span className="text-[rgb(248_69_101)]">₹ {totalAmount}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={selectedSeats.length === 0}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300
                ${selectedSeats.length === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-[rgb(248_69_101)] hover:bg-[rgb(214_56_84)] text-white shadow-lg hover:shadow-xl active:scale-95'
                }`}
            >
              Proceed to Payment
            </button>

            {selectedSeats.length === 0 && (
              <p className="text-center text-gray-500 text-sm mt-4">
                Please select at least one seat
              </p>
            )}
          </div>
        </div>
      </div>

      <BookingSuccessModal isOpen={showModal} onClose={() => navigate('/my-bookings')} />
    </div>
  );
};

export default SeatLayout;