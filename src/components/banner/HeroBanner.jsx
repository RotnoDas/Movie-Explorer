import { Link } from 'react-router';
import { PlayCircle } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1925&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-[#0f172a]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-400">
            DISCOVER MOVIES
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto mb-10 drop-shadow-md">
          Explore and discover your favorite movies and TV shows from around the world. Stay up to date with the latest releases.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/movies" 
            className="group relative inline-flex items-center justify-center gap-3 bg-brand hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(170,59,255,0.4)] hover:shadow-[0_0_30px_rgba(170,59,255,0.6)] hover:-translate-y-1"
          >
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}
