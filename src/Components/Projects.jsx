import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import ProjectSkeleton from './ProjectSkeleton';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Show 3 skeletons while loading
            [...Array(3)].map((_, i) => <ProjectSkeleton key={i} />)
          ) : (
            projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))
          )}
        </div>
        
        {!loading && projects.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No projects found in the database.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;