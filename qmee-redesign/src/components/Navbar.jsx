import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            Q
          </div>
          <span className="text-2xl font-semibold tracking-tight">QMee</span>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/chat" className="hover:text-primary transition-colors">Chat</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
        </div>

        <a 
          href="https://www.linkedin.com/in/rajiv-rai-5705a2352/" 
          target="_blank"
          className="text-sm px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all"
        >
          Connect on LinkedIn
        </a>
      </div>
    </nav>
  );
}
