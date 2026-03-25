import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "./components/Button";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" }, // ✅ FIXED
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 py-5 bg-transparent z-50">
      <nav className="flex items-center justify-between p-5">
        
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link, index) => (
            <a key={index} href={link.link} className="hover:text-blue-400">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Button size="sm">Contact Me</Button>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link} // ✅ FIXED
                className="text-lg text-white hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name} {/* ✅ FIXED */}
              </a>
            ))}

            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              <Button size="sm">Contact Me</Button>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;