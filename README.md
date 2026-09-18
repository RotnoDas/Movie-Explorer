# 🎬 MovieExplorer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

MovieExplorer is a sleek, responsive, and dynamic web application built with React and Vite. It allows users to browse through popular movies and TV shows, search for specific titles in real-time, and view in-depth details such as ratings, genres, and overviews using data provided by the TVMaze API.

---

## 🛠️ Technology Stack Used

This project was built utilizing modern web development tools and libraries to ensure a highly responsive, performant, and maintainable codebase.

- **Core Framework**: 
  - **React 19**: Used for building the component-driven user interface.
  - **Vite 8**: Used as the frontend build tool for blazing fast Hot Module Replacement (HMR) and optimized production builds.
- **Styling**: 
  - **Tailwind CSS v4**: A utility-first CSS framework used for styling the entire application without writing custom CSS files (aside from the initial configuration). It powers the responsive grid system, dark mode colors, and hover micro-animations.
- **Routing**: 
  - **React Router v7**: Used for handling client-side routing, enabling navigation between the Home page and the Movies Explorer page without full page reloads.
- **Icons & Graphics**:
  - **Lucide React**: Provides modern, clean SVG icons used in the UI (e.g., Search, Calendar, Star, Clock).
  - **React Icons (FontAwesome)**: Used for footer social media icons.
- **Data Source / API**:
  - **TVMaze API**: An open API used to fetch show data.
    - `/shows` endpoint: Retrieves the initial list of TV shows and movies.
    - `/search/shows?q=:query` endpoint: Handles dynamic search functionality.

---

## 📋 Detailed Project Specifications

### 1. Global Application Layout
- **Navbar**: Sticky top navigation bar with a glassmorphism effect (backdrop blur). Contains the application logo, "Home" link, and a Call-To-Action (CTA) "Explore Movies" button.
- **Footer**: A responsive footer pinned to the bottom of the page containing copyright information and social media links.
- **Routing**: The application uses a nested layout structure (`MainLayout.jsx`) which keeps the Navbar and Footer constant while the main page content changes based on the active route.

### 2. Home Page (`/`)
Serves as the landing page designed to capture user interest.
- **Hero Banner**: A visually attractive, full-width section spanning `600px` in height.
- Includes a dark, movie-themed background image overlaid with multi-directional gradients to ensure text legibility.
- Contains a prominent headline ("DISCOVER MOVIES"), a short engaging description, and an animated CTA button that directs the user to the Movie Listing Page.

### 3. Movie Listing Page (`/movies`)
A dedicated page for browsing and searching through the TVMaze database.
- **Search Functionality**: A real-time search input bar. When the user submits a query, it dynamically fetches and filters results from the API. If no search query is active, it defaults to displaying the top 50 shows.
- **Responsive Movie Grid**: A fluid CSS Grid implementation that displays 2 columns on mobile devices, 3-4 on tablets, and up to 5 columns on large desktop screens.
- **Movie Cards**: Reusable components displaying:
  - High-resolution poster image (with a fallback if no image is available).
  - Movie/Show Title.
  - Average Rating (out of 10).
  - Release Year.
  - "See Details" action button.
- **State Management**: Handles complex asynchronous states including `isLoading`, `error`, and `movies` array. Displays an animated loading spinner during API fetches.

### 4. Movie Details Modal
Triggered when a user clicks "See Details" on any Movie Card.
- **Overlay UI**: A fixed, full-screen semi-transparent backdrop that blocks background interaction and prevents body scrolling.
- **Modal Content**:
  - Split-pane layout (on desktop) featuring the movie poster on the left and metadata on the right.
  - **Displayed Data**: Title, Genres (as pills), Rating, Premiere Date, Runtime (in minutes), Language, and full HTML-sanitized textual Overview/Summary.
  - Conditional rendering for the "Visit Official Site" button if a URL is provided by the API.
- **Interactions**: Can be closed by clicking the X button in the top right corner or by clicking outside the modal on the backdrop.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd movie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Folder Structure

```
src/
├── components/          
│   ├── banner/          # HeroBanner.jsx
│   ├── footer/          # Footer.jsx
│   ├── header/          # Navbar.jsx
│   └── movies/          # MovieCard.jsx, MovieModal.jsx, SearchBar.jsx
├── layout/              # MainLayout.jsx
├── pages/               # Home.jsx, Movies.jsx
├── App.jsx              # Router definitions
├── index.css            # Tailwind directives and theme variables
└── main.jsx             # React entry point
```
