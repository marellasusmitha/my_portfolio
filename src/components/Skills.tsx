import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Brain, Wrench, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={28} />,
      skills: ['Python', 'Java (Basic)', 'SQL'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-200/50',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      title: 'Data Tools & Libraries',
      icon: <Database className="text-green-600" size={28} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-200/50',
      shadowColor: 'shadow-green-500/20',
    },
    {
      title: 'Analytics & Visualization',
      icon: <BarChart3 className="text-purple-600" size={28} />,
      skills: ['Power BI', 'Data Analytics', 'Statistical Analysis'],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-200/50',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-red-600" size={28} />,
      skills: ['Machine Learning', 'NLP', 'Deep Learning', 'AI Development'],
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-200/50',
      shadowColor: 'shadow-red-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotateY: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technical skills and tools I use to build innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          style={{ perspective: "1000px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              animate={floatingAnimation}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-lg rounded-2xl p-6 border ${category.borderColor} shadow-2xl ${category.shadowColor} hover:shadow-3xl transition-all duration-500 transform-gpu`}
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              }}
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </motion.div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
            >
              <Target className="text-white" size={32} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Core Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Data Analytics', 'Machine Learning', 'AI Development'].map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;