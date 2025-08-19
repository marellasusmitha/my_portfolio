import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Zap, BarChart, Bot, Cloud, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'UPI Fraud Detection System',
      tech: 'Autoencoders, Streamlit, Python',
      description: 'Advanced fraud detection system using deep learning autoencoders. Successfully patented innovation.',
      icon: <Award className="text-yellow-600" size={24} />,
      special: 'Patented',
    },
    {
      title: 'Sentiment Analysis on Twitter Data',
      tech: 'Tweepy, NLP, Python',
      description: 'Real-time sentiment analysis of Twitter data using natural language processing techniques.',
      icon: <Zap className="text-blue-600" size={24} />,
    },
    {
      title: 'Delivery Time Prediction',
      tech: 'ML, Python, Power BI,Flask',
      description: 'Machine learning model to predict product delivery times and deployed using Flask .',
      icon: <TrendingUp className="text-green-600" size={24} />,
    },
    {
      title: 'Data Analytics Internship',
      tech: 'Python, Pandas, Matplotlib',
      description: 'Professional internship experience focusing on data analytics and visualization projects.',
      icon: <BarChart className="text-purple-600" size={24} />,
    },
    {
      title: 'Simple Chatbot',
      tech: 'Python, NLP',
      description: 'Built simple conversational chatbot while learning Machine learning.',
      icon: <Bot className="text-indigo-600" size={24} />,
    },
    {
      title: 'Weather Forecasting Web App',
      tech: 'HTML, CSS, JS, API',
      description: 'Interactive weather forecasting application with API integration and responsive design.',
      icon: <Cloud className="text-cyan-600" size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/90 via-indigo-900/70 to-purple-900/90 backdrop-blur-lg relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            A showcase of my work in data analytics, AI development, and web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl hover:border-white/30 transition-all duration-300 relative overflow-hidden transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {project.special && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                  {project.special}
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                {project.icon}
                <a 
                  href="https://github.com/yourusername/your-project-repo"   // 🔗 paste your GitHub link here
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </a>

              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-cyan-400 font-medium mb-3">{project.tech}</p>
              <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
              
              <a 
                href="https://github.com/yourusername/your-project-repo"   // 🔗 paste your GitHub link here
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white py-2 rounded-lg font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-200 border border-white/20"
                >
                  View More
                </motion.button>
              </a>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;