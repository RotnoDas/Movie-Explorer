import { Link } from 'react-router';
import { Film } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-brand transition-colors">
              <Film className="h-8 w-8 text-brand" />
              <span className="font-bold text-xl tracking-tight">MovieExplorer</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <Link to="/movies" className="bg-brand hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-brand/20">Explore Movies</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
