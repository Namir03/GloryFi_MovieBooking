import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [favorites, setFavorites] = useState(() => {
        try {
            const stored = localStorage.getItem('favorites');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to load favorites", error);
            return [];
        }
    });

    const [bookings, setBookings] = useState(() => {
        try {
            const stored = localStorage.getItem('bookings');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to load bookings", error);
            return [];
        }
    });

    // Save to local storage whenever favorites change
    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error("Failed to save favorites", error);
        }
    }, [favorites]);

    // Save bookings
    useEffect(() => {
        try {
            localStorage.setItem('bookings', JSON.stringify(bookings));
        } catch (error) {
            console.error("Failed to save bookings", error);
        }
    }, [bookings]);

    const addToFavorites = (movie) => {
        if (!favorites.some(fav => fav._id === movie._id)) {
            setFavorites((prev) => [...prev, movie]);
        }
    }

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter(movie => movie._id !== movieId));
    }

    const isMovieFavorite = (movieId) => {
        return favorites.some(movie => movie._id === movieId);
    }

    const addBooking = (booking) => {
        setBookings((prev) => [booking, ...prev]);
    }

    const removeBooking = (bookingId) => {
        setBookings((prev) => prev.filter(b => b._id !== bookingId));
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isMovieFavorite,
        bookings,
        addBooking,
        removeBooking
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;
