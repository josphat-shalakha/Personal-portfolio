
import React from "react";
import heroImage from "../assets/hero-image.png";
import { Button } from "./components/Button";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import profileImg from "../assets/profile.png"; 

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Software Engineer & Digital Marketing
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Building Modern <br /> Web Experiences
            </h1>

            <p className="text-lg text-gray-400 max-w-lg">
              Hi, I'm Josephat Shalakha — a Software Engineer specializing in Web development, 
              Digital marketing, and Video Editing.
            </p>

            {/* CTA + Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Button className="flex items-center gap-2 rounded-full px-6 py-3 bg-green-500 hover:scale-105 hover:bg-green-400 text-black font-semibold transition-all duration-300 group">
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Follow:</span>
                {[
                  { icon: <FaFacebook />, link: "http://WWW.facebook.com/josephat.shalakha.1" },
                  { icon: <FaTwitter />, link: "@josephatsha9357" },
                  { icon: <FaLinkedin />, link: "#" },
                  { icon: <FaGithub />, link: "github.com/josphat-shalakha" },
                  { icon: <FaYoutube />, link: "www.youtube.com/@joshalakha" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="text-xl text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative inline-block">
              {/* Glow */}
              <div className="absolute inset-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>

              {/* Profile Image */}
              <img
                src={profileImg}
                alt="Profile"
                className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-green-500 shadow-2xl"
              />

              {/* Available Badge */}
              <div className="absolute z-20 -top-2 right-0 translate-x-1/4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm text-white font-medium">
                  🚀 Available for Work
                </span>
              </div>

              {/* Experience Badge */}
              <div className="absolute z-20 -top-3 -left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md animate-bounce">
                5+ Years Experience
              </div>

              {/* Status Badge */}
              <div className="absolute z-20 bottom-4 right-6 flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-white">Online</span>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </section>
  );
};

export default Hero;