# 🎬 MovieExplorer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

MovieExplorer is a sleek, responsive, and dynamic web application built with React and Vite. It allows users to browse through popular movies and TV shows, search for specific titles in real-time, and view in-depth details such as ratings, genres, and overviews using data provided by the TVMaze API.

## ✨ Features

- **Modern UI/UX**: Premium dark-mode-first aesthetic with deep purples, glassmorphism effects, and smooth micro-animations.
- **Dynamic Search**: Instantaneous search functionality bridging seamlessly with the TVMaze API.
- **Responsive Layout**: Fluid CSS Grid that adapts beautifully to mobile, tablet, and desktop viewports.
- **Interactive Modals**: Detailed overlay modals for viewing movie backdrops, synopses, and metadata without losing your place.
- **Blazing Fast**: Powered by Vite and React 19 for optimal performance.

## 🛠️ Technology Stack

- **Framework**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Data Source**: [TVMaze API](https://www.tvmaze.com/api)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   cd movie-explorer
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

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── banner/          # Hero banner for the Home page
│   ├── footer/          # Global footer component
│   ├── header/          # Navigation bar
│   └── movies/          # Movie cards, Search bar, and Modals
├── layout/              # Application layout wrappers
├── pages/               # Main route pages (Home, Movies)
├── App.jsx              # Routing configuration
├── index.css            # Global Tailwind CSS imports & theme variables
└── main.jsx             # React application entry point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/your-username/movie-explorer/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Designed and engineered with ❤️ using React.*
