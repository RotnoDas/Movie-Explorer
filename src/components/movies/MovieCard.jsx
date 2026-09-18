import { Star, Calendar } from 'lucide-react';

export default function MovieCard({ movie, onClick }) {
  // Use a placeholder if image is missing
  const imageUrl = movie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  const rating = movie.rating?.average || 'N/A';
  const releaseYear = movie.premiered ? movie.premiered.substring(0, 4) : 'Unknown';

  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(170,59,255,0.15)] hover:-translate-y-1 flex flex-col h-full">
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-950">
        <img 
          src={imageUrl} 
          alt={movie.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-white mb-2 line-clamp-1">{movie.name}</h3>
        
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{releaseYear}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <button 
            onClick={() => onClick(movie)}
            className="w-full py-2.5 bg-slate-800 hover:bg-brand text-white rounded-lg font-medium transition-colors duration-300"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
