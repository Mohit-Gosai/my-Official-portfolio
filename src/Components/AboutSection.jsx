import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const About = () => {
  // Chart Data
  const data = {
    labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'UI/UX', 'Logic'],
    datasets: [
      {
        label: 'Skill Proficiency',
        data: [95, 85, 80, 70, 85, 90],
        backgroundColor: 'rgba(159, 18, 57, 0.2)', // Maroon transparent
        borderColor: '#9f1239', // Rose-900
        borderWidth: 2,
        pointBackgroundColor: '#9f1239',
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: { color: '#262626' },
        grid: { color: '#262626' },
        pointLabels: { color: '#a3a3a3', font: { size: 12 } },
        ticks: { display: false, stepSize: 20 },
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <section  className="bg-transparent py-24 px-6 md:px-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Chart Visualization */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-950 p-8 rounded-2xl border border-gray-900 shadow-2xl"
        >
          <h3 className="text-white text-2xl font-bold mb-8 tracking-tight">Technical <span className="text-rose-800">Capability</span></h3>
          <div className="max-w-md mx-auto">
            <Radar data={data} options={chartOptions} />
          </div>
        </motion.div>

        {/* Right Side: Accordions */}
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-white uppercase mb-8">Professional <span className="text-rose-800">Brief</span></h2>
          
          <AccordionItem 
            title="Core Full-Stack Philosophy" 
            content="I specialize in the MERN stack (MongoDB, Express, React, Node.js). My focus is on creating high-performance, SEO-friendly applications that scale. I prioritize the 'handshake' between frontend and backend to ensure seamless data flow and security."
          />
          <AccordionItem 
            title="E-Commerce & Marketplaces" 
            content="Through my project 'Store Market', I’ve developed complex role-based dashboards and local business empowerment tools. I use Bootstrap and LocalStorage for state persistence, integrating star ratings and Google Maps for a real-world user experience."
          />
          <AccordionItem 
            title="Game Development & Logic" 
            content="As a solo developer working on a Pokémon-themed prototype, I push the limits of React for game state management. I integrate AI-generated assets from Leonardo.ai and Ludo.ai, managing complex spritesheets and tile sets without relying on JSON maps."
          />
          <AccordionItem 
            title="Development Workflow" 
            content="My workflow is anchored in Git/GitHub for version control and Thunder Client for meticulous API testing. I believe in clean code, using Tailwind CSS and Framer Motion to build interfaces that aren't just functional, but beautiful."
          />
        </div>

      </div>
    </section>
  );
};

// Accordion Sub-Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-900">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left hover:text-rose-800 transition-colors"
      >
        <span className="text-gray-300 font-bold uppercase tracking-widest text-sm">{title}</span>
        <span className="text-rose-900 text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-500 leading-relaxed text-sm">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

export default About;