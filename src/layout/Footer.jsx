import { Facebook, FacebookIcon, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {currentYear} Josephat Shalakha. All rights reserved.
        </p>

        {/* Center Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/https://github.com/josphat-shalakha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://twitter.com/@josephatsha9357"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://Facebook.com/http://WWW.facebook.com/josephat.shalakha.1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://Youtube.com/https://www.youtube.com/@joshalakha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Youtube size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;