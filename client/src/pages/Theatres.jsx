import React, { useState, useRef } from "react";
import { dummyTheatresData } from "../assets/assets";
import { MapPin, Users, Star } from "lucide-react";

const TheatreCard = ({ theatre }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const multiplier = 10;
        const xRotation = (y - rect.height / 2) / rect.height * -multiplier;
        const yRotation = (x - rect.width / 2) / rect.width * multiplier;
        setRotate({ x: xRotation, y: yRotation });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group transition-all duration-300 ease-out"
            style={{
                transform: `perspective(1500px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
        >
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(248_69_101,0.3)] transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                    <img
                        src={theatre.image}
                        alt={theatre.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s] ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent"></div>

                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Premier</span>
                    </div>

                    <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                            <MapPin className="w-4 h-4 text-[rgb(248_69_101)]" />
                            <span className="text-xs font-medium uppercase tracking-tighter">{theatre.location}</span>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <h3 className="text-3xl font-extrabold text-white mb-3 group-hover:text-[rgb(248_69_101)] transition-colors duration-300">
                        {theatre.name}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-2 mb-8 leading-relaxed font-light">
                        {theatre.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/5 pt-6 gap-2">
                        <div className="flex items-center gap-2.5 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[rgb(248_69_101)]/10 flex items-center justify-center border border-[rgb(248_69_101)]/20">
                                <Users className="w-4 h-4 text-[rgb(248_69_101)]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.1em] leading-tight">Capacity</span>
                                <span className="text-white text-sm font-extrabold tracking-tight">{theatre.capacity.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end items-center">
                            {theatre.features.slice(0, 2).map((feat, i) => (
                                <span key={i} className="text-[9px] font-black uppercase tracking-wider bg-white/5 text-gray-400 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                                    {feat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Theatres = () => {
    return (
        <div className="min-h-screen pt-40 pb-32 px-6 md:px-16 lg:px-40 xl:px-64 bg-[#111111]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(248_69_101)]/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative mb-20">
                <div className="inline-block px-4 py-1.5 bg-[rgb(248_69_101)]/10 border border-[rgb(248_69_101)]/20 rounded-full mb-6">
                    <span className="text-[rgb(248_69_101)] text-[10px] font-black uppercase tracking-[0.2em]">Global Network</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter">
                    WORLDWIDE <br />
                    <span className="text-[rgb(248_69_101)]">ICONIC</span> THEATRES
                </h1>
                <p className="text-gray-500 text-xl max-w-2xl leading-relaxed font-light">
                    Journey through the world's most legendary cinematic landmarks.
                    Where architectural grandeur meets the cutting edge of modern projection.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                {dummyTheatresData.map((theatre) => (
                    <TheatreCard key={theatre._id} theatre={theatre} />
                ))}
            </div>
        </div>
    );
};

export default Theatres;
