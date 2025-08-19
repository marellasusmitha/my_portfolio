import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "marellasusmithareddy@gmail.com",
      href: "mailto:marellasusmithareddy@gmail.com", // ✅ fixed typo here
      icon: Mail,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/marellasusmitha",
      href: "http://linkedin.com/in/marella-susmitha-9b1a11265",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      value: "github.com/marellasusmitha",
      href: "https://github.com/marellasusmitha",
      icon: Github,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/90 via-purple-900/70 to-indigo-900/90 backdrop-blur-lg relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities,
            collaborations, and projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-4 rounded-xl transition-all duration-200 bg-white/10 hover:bg-white/20 border border-white/20"
                    >
                      <div className="mr-4 text-cyan-400">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-300">
                          {link.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Formspree) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              {/* 🔥 Formspree integration */}
              <form
                action="https://formspree.io/f/mnnzkaow" // ✅ Replace with your actual ID
                method="POST"
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">© 2025 Marella Susmitha.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
