import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-950 border border-gray-900 rounded-xl overflow-hidden hover:border-rose-900/50 transition-all duration-500"
    >
      <div className="h-48 overflow-hidden bg-gray-900 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </div>

      <div className="p-8">
        <span className="text-rose-800 text-[10px] font-black uppercase tracking-[0.2em]">
          {project.type}
        </span>
        <h3 className="text-white text-2xl font-bold mt-2 mb-4 group-hover:text-rose-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] text-gray-400 border border-gray-800 px-2 py-1 rounded-sm uppercase font-mono">
              {t}
            </span>
          ))}
        </div>

        <a href={project.link} className="inline-block text-white text-xs font-bold uppercase tracking-widest border-b-2 border-rose-900 pb-1 hover:text-rose-800 transition-all">
          View Case Study
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;