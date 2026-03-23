import React from "react";

// 1. Define the data array first
const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Delta Energy System",
    period: "2023 - Present",
    description: "Building modern web applications using React, Laravel, and Tailwind CSS. Specializing in energy solutions and portfolio sites."
  },
  {
    role: "Frontend Engineer",
    company: "Software Solutions Ltd",
    period: "2021 - 2023",
    description: "Developed responsive user interfaces and led a small team of junior developers to deliver high-quality digital products."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6 animate-fade-in text-white">
          Experience that{" "}
          <span className="font-serif italic font-normal text-green-500">
            speaks volumes
          </span>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A timeline of my professional growth, from a curious beginner <br className="hidden md:block" />
          to an intermediate Software Engineer building products at scale.
        </p>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/70 via-green-500/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(34,197,94,0.4)]"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div  key={idx}  
                 
                className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* The Card */}
                <div className="ml-8 md:ml-0 md:w-5/12 bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors backdrop-blur-sm">
                  <span className="text-xs font-mono text-green-500 mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-green-500 rounded-full border-4 border-black shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                {}
              </div>
                
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;