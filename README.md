# GloryFi MovieBooking

A modern, full-featured movie booking web application built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Home Page**: Engaging landing page with Hero, Featured Movies, and Trailer sections.
- **Movie Browsing**: Browse a catalog of movies.
- **Movie Details**: View detailed information about specific movies.
- **Seat Selection**: Interactive seat layout for booking tickets.
- **User Authentication**: Secure login and sign-up powered by Clerk.
- **My Bookings**: Manage and view your booked tickets.
- **Favorites**: Save your favorite movies for later.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS v4.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **Authentication**: [Clerk](https://clerk.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Video Player**: [React Player](https://github.com/cookpete/react-player)

## 📂 Project Structure

The client application is located in the `client` directory.

```
client/
├── src/
│   ├── components/   # Reusable UI components (Navbar, MovieCard, etc.)
│   ├── pages/        # Application pages (Home, Movies, SeatLayout, etc.)
│   ├── assets/       # Static assets
│   ├── App.jsx       # Main application component with routing
│   └── main.jsx      # Entry point
├── public/           # Public static files
└── package.json      # Project dependencies and scripts
```

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `client` directory.
   - Add necessary keys (e.g., Clerk Publishable Key).

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

## 📜 Scripts

- `dev`: Start the development server.
- `build`: Build the application for production.
- `preview`: Preview the production build locally.
- `lint`: Run ESLint for code quality.