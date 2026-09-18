import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all shadow-lg backdrop-blur-sm"
          placeholder="Search for a movie or TV show..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-2 right-2 px-6 bg-brand hover:bg-purple-600 text-white rounded-full font-medium transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}
