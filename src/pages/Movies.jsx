import { useState, useEffect } from 'react';
import SearchBar from '../components/movies/SearchBar';
import MovieCard from '../components/movies/MovieCard';
import MovieModal from '../components/movies/MovieModal';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch initial movies or search results
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        let url = 'https://api.tvmaze.com/shows';
        if (searchQuery) {
          url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        
        // If it's a search, the data structure is [{score, show}, ...], so we extract 'show'
        // If it's all shows, it's just an array of shows
        if (searchQuery) {
          setMovies(data.map(item => item.show));
        } else {
          // Just take the first 50 shows for performance
          setMovies(data.slice(0, 50));
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching movies.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Movies</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Search for your favorite movies, TV shows, and more.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg text-center max-w-2xl mx-auto">
          {error}
        </div>
      )}

      {!isLoading && !error && movies.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-xl">No movies found for "{searchQuery}".</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-brand hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {!isLoading && !error && movies.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={openModal} 
            />
          ))}
        </div>
      )}

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

