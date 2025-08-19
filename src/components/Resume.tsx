// components/Resume.jsx
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Resumes</h2>
        <p className="text-gray-600 mb-10">
          I maintain two tailored resumes: one focused on <b>Data Analytics</b> and the other on <b>AI/ML Development</b>.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Analytics Resume */}
          <div className="flex flex-col gap-4">
            {/* View Resume in Browser */}
            <a
              href="/resume/Marella_susmitha_Analytics_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Analytics Resume
            </a>
            {/* Download Resume */}
            <a
              href="/resume/Marella_susmitha_Analytics_resume.pdf"
              download
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              Download Analytics Resume
            </a>
          </div>

          {/* AI/ML Resume */}
          <div className="flex flex-col gap-4">
            {/* View Resume in Browser */}
            <a
              href="/resume/Marella_susmitha_AIML_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              View AI/ML Resume
            </a>
            {/* Download Resume */}
            <a
              href="/resume/Marella_susmitha_AIML_resume.pdf"
              download
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              Download AI/ML Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
