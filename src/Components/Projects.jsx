import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  return (
    <section id="projects" className="bg-transparent py-24 px-6 md:px-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Featured <span className="text-rose-900">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-rose-900 mt-4"></div>
        </div>

        {
          loading ? <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: Infinity, ease: "easeOut" }}
          className="text-center py-20 text-slate font-bold">Loading...</motion.div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                projects.map((project, index) => (
                  <ProjectCard key={project._id} project={project} index={index} />
                ))
              }
            </div>
        }
      </div>
    </section>
  );
};

export default Projects;