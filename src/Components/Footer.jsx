const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Branding & Copyright */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-white font-bold text-xl tracking-tighter">
            PORTFOLIO<span className="text-rose-900">.</span>
          </h3>
          <p className="text-gray-600 text-sm mt-2 font-light">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Socials / Contact Links */}
        <div className="flex gap-8">
          {[{name:'GitHub', url: "https://github.com/Mohit-Gosai"}, {name:'LinkedI', url: "www.linkedin.com/in/mohit-gosai-852b973ab"}, {name:'Instagram', url: ""}].map((platform, i) => (
            <a 
              key={i}
              href={platform.url} 
              className="text-gray-500 hover:text-rose-800 text-sm font-medium transition-colors"
            >
              {platform.name}
            </a>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-8 md:mt-0 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-900"></span>
          </span>
          <span className="text-gray-500 text-xs uppercase tracking-widest">Available for hire</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;