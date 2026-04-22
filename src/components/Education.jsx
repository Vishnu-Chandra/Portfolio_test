import { useState, useEffect, useRef } from "react";

export default function Education() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px"
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

  const educationData = [
    {
      logo: "/education/GRIET-Hyderabad-Logo.png",
      alt: "GRIET Logo",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad",
      degree: "Computer Science Engineering (Data Science)",
      duration: "August 2023 – July 2027 (Expected)",
      description: "Pursuing a Bachelor's degree with a strong focus on computer science fundamentals, data structures and algorithms, and full-stack development. Actively involved in hackathons, competitive programming, and real-world project development.",
      grade: "9.51 CGPA"
    },
    {
      logo: "/education/rgukt-logo.jpg",
      alt: "RGUKT Basar Logo",
      institution: "Rajiv Gandhi University of Knowledge and Technologies (RGUKT), Basar, Nirmal",
      degree: "Pre-University Course (PUC)",
      duration: "September 2021 – May 2023",
      description: "Completed the Pre-University Course (equivalent to Telangana State Intermediate) at RGUKT Basar (IIIT Basar), with a strong emphasis on mathematics, physics, and foundational programming concepts.",
      grade: "9.69 CGPA"
    },
    {
      logo: "/education/matrix-logo.png",
      alt: "Matrix High School Logo",
      institution: "Matrix High School, Varni, Nizamabad",
      degree: "Secondary School Certificate (SSC)",
      duration: "June 2011 – April 2021",
      description: "Completed primary and secondary education (Grades 1–10), building a strong academic foundation and early interest in science, mathematics, and problem-solving.",
      grade: "10 CGPA"
    }
  ];

  return (
    <section id="education" className="px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-16 sm:pb-20 bg-gradient-to-b from-slate-900 via-gray-850 to-gray-900 relative overflow-hidden">
      {/* Top decorative separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
      
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* <div className="inline-block mb-4 px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 font-semibold text-sm tracking-wider">ACADEMIC TIMELINE</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">Education</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Academic journey and qualifications</p>
        </div>

        {/* Timeline Container - Centered */}
        <div className="relative">
          {/* Timeline vertical line - CENTERED */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          {/* Timeline Items */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {educationData.map((edu, index) => {
              const isVisible = visibleCards.includes(index);
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  className={`relative transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex items-center gap-4 sm:gap-6 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Card - takes half width */}
                    <div className="flex-1 ml-8 sm:ml-12 md:ml-0 md:w-[calc(50%-4rem)]">
                      <div className="group bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:bg-gray-800/70 hover:scale-[1.02]">
                        
                        {/* Logo inside card */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <img
                              src={edu.logo}
                              alt={edu.alt}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="text-2xl sm:text-3xl">🎓</div>';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                              {edu.institution}
                            </h3>
                            <p className="text-purple-400 font-semibold text-xs sm:text-sm">
                              {edu.degree}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-gray-700 pt-3 sm:pt-4">
                          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="break-words">{edu.duration}</span>
                          </p>

                          <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                            {edu.description}
                          </p>

                          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/10 border border-purple-500/30 rounded-lg">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-bold text-purple-300 text-xs sm:text-sm">Grade: </span>
                            <span className="font-bold text-white text-xs sm:text-sm">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot - CENTERED */}
                    <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 hidden sm:block">
                      <div className="relative">
                        {/* Large pulsing ring */}
                        <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -m-1 sm:-m-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse opacity-50"></div>
                        {/* Main dot */}
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center border-2 sm:border-4 border-gray-900 shadow-lg shadow-purple-500/50">
                          <div className="text-base sm:text-lg md:text-2xl">🎓</div>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for other side */}
                    <div className="flex-1 md:w-[calc(50%-4rem)] hidden md:block"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
