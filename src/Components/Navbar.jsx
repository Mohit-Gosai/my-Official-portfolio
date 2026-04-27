import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-5 bg-black/60 backdrop-blur-xl border-b border-rose-900/20"
    >
      {/* Brand Logo */}
      <div className="text-white font-black text-2xl tracking-tighter">
        M<span className="text-rose-800">G</span>.
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 text-xs uppercase tracking-widest font-bold text-gray-400">
        {['home', 'projects', 'about', 'skills'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-rose-800 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Action Button */}
      <button className="border border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300">
        <a href="#contact">Contact me</a>
      </button>
    </motion.nav>
  );
};

export default Navbar;