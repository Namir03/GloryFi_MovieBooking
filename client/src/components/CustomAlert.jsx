import React from 'react';
import { AlertCircle } from 'lucide-react';

const CustomAlert = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-[fadeIn_0.3s_ease-out]"
                onClick={onCancel}
            />

            {/* Modal */}
            <div className="relative bg-[#1a1a2e] border border-gray-700 rounded-2xl p-6 w-full max-w-md 
        shadow-2xl shadow-black/50 transform transition-all duration-300 animate-[scaleIn_0.3s_ease-out]">

                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Cancel Booking?</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        {message}
                    </p>

                    <div className="flex gap-3 w-full">
                        <button
                            onClick={onCancel}
                            className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-gray-300 font-medium 
                hover:bg-gray-700 transition-colors duration-200"
                        >
                            Keep Booking
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-white font-medium 
                hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all duration-200"
                        >
                            Yes, Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
