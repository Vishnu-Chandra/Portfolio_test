import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Coding", href: "#coding" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Blur-on-scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-950/95 backdrop-blur-lg border-gray-800 shadow-lg' 
        : 'bg-gray-950/80 backdrop-blur-sm border-gray-800/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 flex justify-between items-center">

        {/* Logo / Name */}
        <a href="#home" className="group text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300">
          <span className="font-serif italic bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400 transition-all duration-300">
            Vishnu
          </span>
          <span className="text-purple-500 font-sans not-italic group-hover:text-pink-500 transition-colors duration-300">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  isActive 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {link.name}
                {/* Hover underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none transition-transform duration-300 hover:text-purple-400"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>
            {open ? '✕' : '☰'}
          </div>
        </button>
      </div>

      {/* Mobile Menu with smooth toggle */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 px-4 sm:px-6 py-3 sm:py-4 space-y-2 sm:space-y-3">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-400 bg-purple-500/10 border-l-4 border-purple-500' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 hover:translate-x-2'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
