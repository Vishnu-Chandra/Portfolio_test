import { useState, useEffect, useRef } from "react";
import ProjectModal from "./ProjectModal";


const projects = [
  {
    id: 1,
    title: "PoolPal",
    image: "/projects/PoolPal_mainPage.png",
    tech: ["Flask", "Python", "SQLite", "Bootstrap"],
    short:
      "A ride-sharing platform supporting carpooling, taxi pooling, family trips, and package delivery.",
    full: `
PoolPal is a comprehensive Flask-based ride-sharing platform designed to
simplify shared travel by connecting drivers and passengers traveling in the
same direction. It supports multiple trip types including carpooling, taxi
pooling, family trips, and package delivery.

The platform features secure authentication, trip creation and seat
management, smart booking validation, and real-time updates. A dedicated
package delivery module allows users to send packages through carpool trips
with driver approval and live status tracking.

The system is built with modular architecture, secure session handling, and
robust validation, offering a production-ready and user-friendly experience.
    `,
    github: "https://github.com/Vishnu-Chandra/PoolPal",
  },

  {
    id: 2,
    title: "FoodLink",
    image: "/projects/FoodLink_mainPage.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Google Maps"],
    short:
      "An intelligent platform to reduce food waste by connecting donors, NGOs, and volunteers.",
    full: `
FoodLink is an intelligent food redistribution platform that reduces food waste
and combats hunger by digitally connecting food donors, NGOs, and volunteers.
Donors upload surplus food details, which are matched with NGOs using AI based
on location, urgency, and food type.

The platform includes real-time donation tracking, role-based dashboards,
Google Maps–based route visualization, and AI-assisted prioritization. FoodLink
is scalable, supports rural and urban environments, and aligns with UN SDGs
such as Zero Hunger and Responsible Consumption.
    `,
    github: "https://github.com/Vishnu-Chandra/FoodLoop",
  },

  {
    id: 3,
    title: "AI CLI Assistant (LLM Powered)",
    image: "/projects/Ai_Cli_mainPage.png",
    tech: ["Python", "Gemini API", "NLP", "PowerShell", "Bash"],
    short:
      "AI-powered command-line assistant that converts natural language into safe shell commands using Gemini LLM.",
    full: `
AI CLI Assistant is an interactive, AI-powered command-line tool that translates natural language into safe shell commands using Gemini LLM. It features human-in-the-loop confirmation, risk assessment, undo/rollback, multi-step planning, and context memory. You can use it both online (Gemini API) and offline (pattern-based), with full command history and advanced NLP intent recognition. Key features include natural language to shell command conversion, safety-first execution with risk assessment, undo/rollback for file operations, multi-step workflow planning, context memory, fallback offline mode, and support for multiple LLMs (Gemini, Ollama). Install via pip, set your Gemini API key, and run interactively. See full documentation in the project.
    `,
    github: "https://github.com/yourusername/ai-cli",
    pypi: "https://pypi.org/project/ai-cli-llm/"
  },

  {
    id: 4,
    title: "SlotSwapper",
    image: "/projects/SlotSwapper_mainPage.png",
    tech: ["React", "Express", "MongoDB", "JWT", "Bootstrap"],
    short:
      "A MERN-style app that lets users swap calendar or event time slots securely.",
    full: `
SlotSwapper is a MERN-style application that allows users to mark time slots as
swappable, browse available slots, and send or accept swap requests.

It features JWT-based authentication, protected routes, a marketplace for
available slots, and a clean React frontend using React-Bootstrap. The backend
uses Express and MongoDB with simple Mongoose models to focus on UX-driven swap
flows.
    `,
    github: "https://github.com/Vishnu-Chandra/SlotSwapper",
    live: "https://slot-swapper-tawny.vercel.app/"
  },

  {
    id: 5,
    title: "FocusTab",
    image: "/projects/FocusTab_mainPage.png",
    tech: ["React", "Vite", "Web APIs", "LocalStorage"],
    short:
      "A productivity-focused browser extension with Pomodoro, Todo, and daily quotes.",
    full: `
FocusTab is a lightweight productivity dashboard that replaces the browser new
tab page. It includes a configurable Pomodoro timer, floating todo list, daily
quotes, and randomized backgrounds.

The extension persists state using LocalStorage, supports keyboard shortcuts,
and uses the Web Notifications API for session alerts. Designed for accessibility
and focus, it works as an unpacked Microsoft Edge extension.
    `,
    github: "https://github.com/Vishnu-Chandra/FocusTab-Browser-Extension",
  },


  {
    id: 6,
    title: "CivicLink",
    image: "/projects/CivicLink_mainPage.png",
    tech: ["React", "Flask", "MongoDB", "Gemini AI", "Geolocation API"],
    short:
      "An AI-powered civic issue reporting and resolution platform.",
    full: `
CivicLink is a civic engagement platform that enables citizens to report issues
such as potholes, garbage collection, and water supply problems using text,
voice, and images.

Gemini AI analyzes reports to determine severity and responsible workers.
Issues are tracked through dashboards, geolocation is used for navigation, and
email notifications keep citizens informed. Automatic escalation ensures
accountability if issues remain unresolved beyond 48 hours.
    `,
    github: "https://github.com/Vishnu-Chandra/CivicLink",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1 && !visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 pb-24 sm:pb-32 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 relative">
      {/* Bottom decorative separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Building solutions that make a difference</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={project.id}
                ref={el => cardRefs.current[index] = el}
                onClick={() => setActiveProject(project)}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                  
                  {/* Image container with zoom effect */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600"><span class="text-4xl">📁</span></div>';
                      }}
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View Details badge */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-[10px] sm:text-xs font-semibold text-white">View Details →</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-purple-600/20 text-purple-300 rounded-md border border-purple-500/30 font-medium transition-colors duration-300 group-hover:bg-purple-600/30 group-hover:border-purple-500/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {project.short}
                    </p>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
