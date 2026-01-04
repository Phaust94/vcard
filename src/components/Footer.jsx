const Footer = () => {
  return (
    <footer className="py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900/50 rounded-lg p-6 flex items-center font-mono border border-gray-700">
          <span className="text-electric-cyan text-lg mr-2">$</span>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-electric-cyan rounded px-2"
          >
            your-email@example.com
          </a>
          <span className="animate-pulse">_</span>
        </div>
        <p className="text-center text-gray-500 mt-6 text-sm">
          Built by Gemini. Design inspired by modern terminal aesthetics.
        </p>
      </div>
    </footer>
  );
};

export default Footer;