import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [mode, setMode] = useState('hire'); // 'hire' or 'feedback'

  // Inside Contact.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      type: mode, // This uses your 'mode' state (hire/feedback)
      message: e.target[2].value
    };

    try {
      // CHANGE 5500 TO 5000 HERE
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert("Message Sent! I'll get back to you soon.");
        e.target.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="bg-transparent py-24 px-6 md:px-16 border-t border-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-950 p-1 rounded-full border border-gray-800 flex relative">
            <motion.div
              animate={{ x: mode === 'hire' ? 0 : '100%' }}
              className="absolute top-1 left-1 bottom-1 w-1/2 bg-rose-900 rounded-full"
            />
            <button
              onClick={() => setMode('hire')}
              className={`relative z-10 px-8 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === 'hire' ? 'text-white' : 'text-gray-500'}`}
            >
              Hire Me
            </button>
            <button
              onClick={() => setMode('feedback')}
              className={`relative z-10 px-8 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === 'feedback' ? 'text-white' : 'text-gray-500'}`}
            >
              Feedback
            </button>
          </div>
        </div>

        {/* Main Container - The "Reverse" Magic happens here */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`flex flex-col lg:flex-row gap-12 items-center ${mode === 'feedback' ? 'lg:flex-row-reverse' : ''}`}
        >

          {/* Column 1: The Form */}
          <motion.div layout className="w-full lg:w-1/2 bg-gray-950 p-8 md:p-12 border border-gray-900 rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-black text-white uppercase mb-6">
                  {mode === 'hire' ? 'Work Inquiry' : 'Give Feedback'}
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Full Name" className="w-full bg-black border border-gray-800 p-4 text-white text-sm focus:border-rose-900 outline-none transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-black border border-gray-800 p-4 text-white text-sm focus:border-rose-900 outline-none transition-all" />
                  <textarea rows="4" placeholder={mode === 'hire' ? "Tell me about your project..." : "What did you think of the portfolio?"} className="w-full bg-black border border-gray-800 p-4 text-white text-sm focus:border-rose-900 outline-none transition-all"></textarea>
                  <button type='submit' className="w-full bg-rose-900 hover:bg-rose-800 text-white font-bold py-4 uppercase tracking-[0.2em] text-xs transition-all">
                    {mode === 'hire' ? 'Send Request' : 'Submit Review'}
                  </button>
                </form>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Column 2: Message/Intro */}
          <motion.div layout className="w-full lg:w-1/2 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-rose-900 font-mono text-sm mb-4">
                  {mode === 'hire' ? '01 // RECRUITMENT' : '02 // COMMUNITY'}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                  {mode === 'hire'
                    ? "Let's build the next big thing together."
                    : "Your insights make my code better."}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {mode === 'hire'
                    ? "Currently open to full-stack opportunities or freelance MERN projects. I'm ready to bring your 'Store Market' scale ideas to life."
                    : "I'm constantly iterating on my Pokémon prototype and this portfolio. If you spotted a bug or have a UI suggestion, let me know!"}
                </p>

                {/* Social Links for Hire mode */}
                {mode === 'hire' && (
                  <div className="pt-6 flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="hover:text-rose-800 cursor-pointer transition-colors">GitHub</span>
                    <span className="hover:text-rose-800 cursor-pointer transition-colors">LinkedIn</span>
                    <span className="hover:text-rose-800 cursor-pointer transition-colors">Twitter</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;