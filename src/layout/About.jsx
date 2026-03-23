
import React from "react";
import { ArrowRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlight =[{
  icon:Code2,
  Title: "clean code",
  Description:"writing maintainable,scalable codes that stands the test of time.",
}, {
  icon:Rocket,
  Title: "performance",
  Description:"optimizing for speed and delivering lightining fast user Experience.",
},{
  icon:Users,
  Title: "collaboration",
  Description:"working closely with teams to bring ideas to life.",
},{
  icon:Lightbulb,
  Title: "innovation",
  Description:"staying a head with the best techologies and best practices.",
}]
export const About = () => {
  return (
   <section id="about" className="container mx-auto px-6 py-20 text-white">
      {/* Container for the content */}
      <div className="space-y-6">
        
        {/* The "About Me" Button-style Label */}
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00D25B] text-black font-bold text-sm uppercase tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-500/20">
          About Me
          <ArrowRight className="w-4 h-4" /> 
        </button>            

        <p className="text-lg text-gray-300 max-w-lg">
          Giving Businesses online presence is my Vission. I specialize in 
          creating high-performance digital experiences.
        </p>
        <div>
          <p>
            I'm a software Engineer with over 5 years of Experience<br /> crafting digital products that make a difference.<br /><br />
            My journey started with a curiosity for how things work<br /> on websites and it has evolved into a deep expertise<br />
            in modern Frontend Technologies.
          </p>
        </div>
       <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
        <p className=" italics text-blue-700 dark:text-blue-400">
          "My mission is to create digital Experiences that are not<br />just functional,but truely delightful-products that<br /> users love
          use and developers love to maintain."
        </p>
       </div>
      </div> {/* Closes the space-y-6 div */}
    </section> /* Closes the section tag */
  );
}; 

export default About;