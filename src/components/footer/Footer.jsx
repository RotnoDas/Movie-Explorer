import { Film } from 'lucide-react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Film className="h-6 w-6 text-brand" />
            <span className="font-bold text-lg text-white">MovieExplorer</span>
          </div>
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} MovieExplorer. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-brand transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-brand transition-colors">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-brand transition-colors">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
