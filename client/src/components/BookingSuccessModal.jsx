import React from 'react';
import { Check } from 'lucide-react';

const BookingSuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="animate-[flipIn_0.6s_ease-out] perspective-1000">
                <div className="bg-gray-800 p-8 rounded-3xl border-2 border-[rgb(248_69_101)] 
          shadow-[0_0_50px_rgba(248,69,101,0.5)] text-center max-w-sm mx-auto transform-style-3d">

                    <div className="w-20 h-20 bg-[rgb(248_69_101)] rounded-full flex items-center justify-center mx-auto mb-6
            animate-[bounce_1s_infinite]">
                        <Check className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold mb-2 text-white">Payment Done!</h2>
                    <p className="text-gray-400 mb-8">Your seats have been successfully booked.</p>

                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform cursor-pointer"
                    >
                        View My Bookings
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes flipIn {
          0% { opacity: 0; transform: rotateY(-90deg); }
          100% { opacity: 1; transform: rotateY(0deg); }
        }
      `}</style>
        </div>
    );
};

export default BookingSuccessModal;
