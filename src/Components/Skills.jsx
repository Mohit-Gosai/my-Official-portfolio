import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Core Stack",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      description: "Full-stack development & API architecture"
    },
    {
      category: "Frontend & Styling",
      tech: ["Tailwind CSS", "Bootstrap", "Framer Motion", "HTML5 Canvas"],
      description: "Responsive design & complex animations"
    },
    {
      category: "Tools & Testing",
      tech: ["Git", "GitHub", "Thunder Client", "Vercel"],
      description: "Version control & API debugging"
    },
    {
      category: "Creative & AI",
      tech: ["Leonardo.ai", "Ludo.ai", "Pixel Art Generation"],
      description: "Game asset creation & AI integration"
    }
  ];

  return (
    <section  className="bg-transparent py-24 px-6 md:px-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Technical <span className="text-rose-900">Inventory</span>
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm">/var/log/capabilities_map</p>
        </div>

        {/* Table Header - Desktop Only */}
        <div className="hidden md:grid grid-cols-4 border-b border-rose-900/30 pb-4 mb-0 text-rose-900 font-bold uppercase tracking-widest text-xs">
          <div>Category</div>
          <div className="col-span-2">Technologies</div>
          <div className="text-right">Focus Area</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-900">
          {skillCategories.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 py-8 group hover:bg-gray-950/50 transition-colors px-2"
            >
              {/* Category */}
              <div className="text-white font-bold mb-4 md:mb-0 flex items-center">
                <span className="w-2 h-2 bg-rose-900 rounded-full mr-3"></span>
                {item.category}
              </div>

              {/* Technologies - Tag Cloud Style inside the Table */}
              <div className="col-span-2 flex flex-wrap gap-2 mb-4 md:mb-0">
                {item.tech.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-900 text-gray-400 border border-gray-800 text-[10px] font-bold uppercase tracking-tighter rounded-sm group-hover:border-rose-900/50 group-hover:text-gray-200 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="text-gray-600 text-sm md:text-right italic md:not-italic flex items-center md:justify-end">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;