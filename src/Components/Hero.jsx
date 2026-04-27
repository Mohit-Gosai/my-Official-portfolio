import { motion } from 'framer-motion';

const Hero = () => {
  const techStack = [
    "MongoDB", "Express", "React", "Node.js", 
    "Git", "GitHub", "Thunder Client", "Tailwind CSS", 
    "Framer Motion", "Redux"
  ];

  return (
    <section  className="relative min-h-screen w-full flex flex-col justify-center items-center bg-transparent overflow-hidden py-20">
      
      <div className="relative z-10 text-center px-6">
        {/* Main Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-rose-900 uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            Available for Opportunity
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight uppercase">
            Mohit <span className="text-rose-800">Gosai</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mt-2 tracking-wide">
            Full-Stack MERN Developer
          </h2>
        </motion.div>

        {/* Employer Seeker Bio */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
        >
          Specializing in building scalable, production-ready web applications. 
          I bridge the gap between complex backend logic and intuitive frontend 
          interfaces, ensuring high-performance deployments and clean, maintainable code.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="px-4 py-1 border border-gray-800 text-gray-500 text-xs font-bold uppercase tracking-widest rounded-full transition-colors hover:border-rose-900"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-rose-900 hover:bg-rose-800 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(159,18,57,0.2)]">
            <a href="https://github.com/Mohit-Gosai">View My Work</a>
          </button>
          <button className="border border-gray-800 hover:border-rose-900 text-gray-400 hover:text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all">
            <a href="/Resume.docx" download="Mohit_Gosai-Resume">Download CV</a>
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "80px" }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 w-[1px] bg-gradient-to-b from-rose-900 to-transparent"
      />
    </section>
  );
};

export default Hero;