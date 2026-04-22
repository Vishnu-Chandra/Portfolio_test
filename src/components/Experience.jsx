import { useState, useEffect, useRef } from "react";
import { FaTrophy, FaAward, FaUsers } from "react-icons/fa";

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
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

    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: FaTrophy,
      title: "Winner – JPMorgan Chase & Co. Code for Good Hackathon",
      date: "28 June 2025 – 29 June 2025",
      role: "Full-Stack Developer",
      description: "Built a full-stack EdTech platform for a non-governmental organization (NGO) operating across 20+ rural education centers, replacing manual Excel-based workflows with a scalable and production-ready web solution. Designed role-based dashboards, implemented secure state and data handling, and integrated RESTful APIs for bulk student uploads, attendance tracking, quizzes, and analytics. Delivered a responsive system optimized for low-bandwidth environments within 24 hours, earning the winning position.",
      shortDescription: "Built a full-stack EdTech platform for an NGO operating across 20+ rural education centers, replacing manual Excel-based workflows with a scalable web solution...",
      color: "purple",
      certificate: "/experience/Code_for_good_winner.jpeg",
      hasCertificate: true
    },
    {
      icon: FaAward,
      title: "Finalist – HACK4SDG, IIT Hyderabad",
      date: "26 October 2024 – 27 October 2024",
      role: "Full-Stack Developer",
      description: "Built a full-stack, impact-driven solution aligned with the United Nations Sustainable Development Goals (SDGs), focusing on scalable system design and real-world problem solving. Delivered a functional prototype under strict hackathon constraints and was recognized as a finalist for strong technical execution and meaningful social impact.",
      shortDescription: "Built a full-stack, impact-driven solution aligned with the United Nations Sustainable Development Goals (SDGs)...",
      color: "pink",
      certificate: "/experience/Hack4SDG.jpeg",
      hasCertificate: true
    },
    {
      icon: FaUsers,
      title: "Tech Team Member – Google Developer Groups on Campus (GDGOC), GRIET",
      date: "",
      role: "Technical Team",
      description: "Contributed to organizing and managing technical events and workshops by coordinating planning activities, handling event logistics, and assisting in smooth execution. Worked closely with the team to engage participants, support hands-on learning sessions, and strengthen the campus developer community through collaborative initiatives.",
      shortDescription: "Contributed to organizing and managing technical events and workshops by coordinating planning activities...",
      color: "cyan",
      hasCertificate: false
    },
    {
      icon: FaUsers,
      title: "Participant – Agentathon (Guinness World Record Hackathon), GDG Hyderabad",
      date: "20 December 2025 – 21 December 2025",
      role: "Agentic AI Developer",
      description: "Built ShopMate, an agent-based automation solution for simplifying everyday shop interactions during a 36-hour Agentathon that set a Guinness World Record for the largest Agentic Artificial Intelligence (AI) hackathon. Contributed to end-to-end development using agentic workflows, rapid prototyping, and high-impact team collaboration under strict time constraints. Strengthened skills in agent-based system design, problem-solving under pressure, and rapid iteration.",
      shortDescription: "Built ShopMate, an agent-based automation solution for simplifying everyday shop interactions during a 36-hour Agentathon that set a Guinness World Record...",
      color: "emerald",
      certificate: "/experience/agentathon_certi.png",
      hasCertificate: true
    }
  ];

  return (
    <section id="experience" className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 sm:w-80 sm:h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">Experience</span>
        </h2>
        
        <p className="text-gray-400 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-center text-base sm:text-lg px-4">
          Project-based engineering experience through hackathons, real-world problem solving, and technical leadership.
        </p>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div 
            ref={timelineRef}
            className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 timeline-line"
          ></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const colorClasses = {
                purple: "border-purple-500 shadow-purple-500/20",
                pink: "border-pink-500 shadow-pink-500/20",
                cyan: "border-cyan-500 shadow-cyan-500/20",
                emerald: "border-emerald-500 shadow-emerald-500/20"
              };
              const iconColorClasses = {
                purple: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-500/50",
                pink: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/50",
                cyan: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50",
                emerald: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/50"
              };

              return (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  className={`group relative ml-12 sm:ml-16 md:ml-20 transition-all duration-700 opacity-100 translate-y-0`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline dot and connector */}
                  <div className="absolute -left-[2.5rem] sm:-left-[3.5rem] md:-left-[4.75rem] top-6 sm:top-8 flex items-center">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 ${iconColorClasses[exp.color]}`}>
                      <Icon className="text-base sm:text-lg md:text-xl transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <div className={`w-4 sm:w-5 md:w-6 h-0.5 bg-gradient-to-r from-${exp.color}-500/50 to-transparent`}></div>
                  </div>

                  {/* Card */}
                  <div className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl sm:rounded-2xl transition-all duration-500 ${
                    hoveredCard === index 
                      ? `border-${exp.color}-500 shadow-xl -translate-y-2 ${colorClasses[exp.color]}` 
                      : ''
                  }`}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${exp.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl pointer-events-none`}></div>
                    
                    {/* Main content area */}
                    <div className={`relative z-10 p-4 sm:p-6 md:p-8 transition-all duration-500 ${hoveredCard === index ? 'pb-2 sm:pb-3 md:pb-4' : ''}`}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {exp.title}
                      </h3>

                      {exp.date && (
                        <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                          {exp.date}
                        </p>
                      )}

                      <p className={`text-${exp.color}-400 font-semibold text-lg mb-4`}>
                        {exp.role}
                      </p>

                      {/* Description with expand/collapse */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        hoveredCard === index ? 'max-h-96' : 'max-h-20 sm:max-h-24'
                      }`}>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                          {hoveredCard === index ? exp.description : exp.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Certificate section - slides up from bottom on hover */}
                    {exp.hasCertificate && (
                      <div className={`relative border-t border-gray-700/50 transition-all duration-500 ${
                        hoveredCard === index 
                          ? 'max-h-96 opacity-100 translate-y-0' 
                          : 'max-h-0 opacity-0 translate-y-4'
                      }`}>
                        <div className="p-4 sm:p-5 md:p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 bg-${exp.color}-400 rounded-full animate-pulse`}></div>
                            <p className={`text-${exp.color}-400 font-semibold text-xs sm:text-sm uppercase tracking-wider`}>Certificate</p>
                          </div>
                          <div 
                            className="relative group/cert rounded-lg overflow-hidden border border-gray-700 hover:border-${exp.color}-500 transition-all duration-300 cursor-pointer w-full sm:w-64 mx-auto sm:mx-0"
                            onClick={() => setModalImage(exp.certificate)}
                          >
                            <img 
                              src={exp.certificate} 
                              alt={`${exp.title} Certificate`}
                              className="w-full h-28 sm:h-32 object-contain group-hover/cert:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.target.parentElement.innerHTML = `<div class="w-full h-32 flex items-center justify-center text-gray-500"><span>Certificate Image</span></div>`;
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-end p-2">
                              <span className="text-white text-xs font-medium">Click to view full size</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${exp.color}-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              );
            })}

      {/* Certificate Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-6 md:p-8 animate-fade-in"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            {/* Close Button - Fixed Top Right */}
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-700/80 hover:bg-purple-600 backdrop-blur-sm text-white text-xl sm:text-2xl transition-all duration-300 hover:rotate-90 shadow-lg border border-gray-600"
              aria-label="Close modal"
            >
              ×
            </button>
            
            {/* Certificate Container */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-gray-700 max-h-[85vh] overflow-auto">
              <img 
                src={modalImage}
                alt="Certificate Full View"
                className="w-full h-auto object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </section>
  );
}
