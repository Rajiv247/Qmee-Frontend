export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          QMee can generate inaccurate responses. Always verify through independent sources.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Built with ❤️ by{' '}
          <a 
            href="https://www.linkedin.com/in/rajiv-rai-5705a2352/" 
            target="_blank"
            className="text-primary hover:underline"
          >
            Rajiv Rai
          </a>
        </p>
      </div>
    </footer>
  );
}
