import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-slate-900/80 backdrop-blur-lg relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <User className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-200 leading-relaxed">
                I am focused on Data Analytics and AI Development, with strong skills in Python, 
                Machine Learning, and Data Visualization. I have practical experience through 
                projects and internships, solving real-world problems using AI and analytics.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Target className="text-purple-400 mb-3" size={28} />
              <h4 className="text-lg font-semibold text-white mb-2">My Focus</h4>
              <p className="text-gray-200">
                Building innovative solutions that bridge the gap between data science and 
                real-world applications.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Code className="text-emerald-400 mb-3" size={28} />
              <h4 className="text-lg font-semibold text-white mb-2">Expertise</h4>
              <p className="text-gray-200">
                Specializing in Python development, machine learning algorithms, and 
                creating intuitive data visualizations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;