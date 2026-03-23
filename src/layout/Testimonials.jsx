import React from "react";
import { Quote } from "lucide-react"; // Optional: adds a nice icon

const testimonialsData = [
  {
    quote: "Josephat is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Technical Lead", // Added a placeholder for the author
  },
  {
    quote: "Working with Shalakha was a game changer to our projects. He delivered ahead of schedule with code quality that set new standards for our projects.",
    author: "Project Manager",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header - Moved OUTSIDE the map */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-500 text-sm font-medium tracking-wider uppercase animate-fade-in">
            What people say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Testimonials that <span className="text-green-500 italic">inspire.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
            >
              {/* Optional Quote Icon */}
              <Quote className="text-green-500/20 absolute top-4 right-4 group-hover:text-green-500/40 transition-colors" size={40} />
              
              <p className="text-lg text-gray-300 italic leading-relaxed mb-6">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-black">
                  {item.author.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-white uppercase tracking-widest">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;