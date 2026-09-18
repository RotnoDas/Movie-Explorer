import { X, Star, Calendar, Clock, Film } from 'lucide-react';
import { useEffect } from 'react';

export default function MovieModal({ movie, onClose }) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!movie) return null;

  const imageUrl = movie.image?.original || movie.image?.medium || 'https://via.placeholder.com/800x1200?text=No+Image';
  const rating = movie.rating?.average || 'N/A';
  const releaseDate = movie.premiered || 'Unknown';
  
  // Clean HTML tags from summary
  const summary = movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No description available.';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-brand text-white rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto shrink-0 relative bg-slate-950">
          <img 
            src={imageUrl} 
            alt={movie.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 md:bg-gradient-to-r md:from-transparent md:to-slate-900 opacity-90 md:opacity-100" />
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres?.map(genre => (
              <span key={genre} className="px-3 py-1 bg-slate-800 text-brand text-xs font-semibold rounded-full border border-slate-700">
                {genre}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{movie.name}</h2>
          
          <div className="flex flex-wrap gap-6 text-sm text-slate-300 mb-8 border-y border-slate-800 py-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-white">{rating}</span>
              <span className="text-slate-500">Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand" />
              <span className="font-medium text-white">{releaseDate}</span>
            </div>
            {movie.runtime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand" />
                <span className="font-medium text-white">{movie.runtime} min</span>
              </div>
            )}
            {movie.language && (
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-brand" />
                <span className="font-medium text-white">{movie.language}</span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
            <p className="text-slate-300 leading-relaxed">
              {summary}
            </p>
          </div>
          
          {movie.officialSite && (
            <div className="mt-8">
              <a 
                href={movie.officialSite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700"
              >
                Visit Official Site
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
