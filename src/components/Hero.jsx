import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const roles = ["Full-Stack Developer", "DSA Enthusiast", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-20 md:py-0 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-in-left">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Padma Vishnu Chandra</span>
              </h1>
            </div>

            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 md:mb-6 h-8 sm:h-10 md:h-12 flex items-center justify-center md:justify-start">
                <span className="text-purple-400 font-semibold">{displayText}</span>
                <span className="ml-1 w-0.5 sm:w-1 h-6 sm:h-8 bg-purple-400 animate-pulse"></span>
              </h2>
            </div>

            <div className="opacity-0 animate-fade-in-up animation-delay-400">
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed px-2 md:px-0">
                I am a passionate full-stack developer with a strong foundation in Data Structures and Algorithms. I enjoy solving complex problems, writing efficient and optimized code, and building scalable web applications using modern frontend and backend technologies. I continuously improve my problem-solving skills through competitive programming and apply them while working on real-world projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up animation-delay-600 items-stretch sm:items-center">
              <a
                href="https://drive.google.com/file/d/1JvSpk88zRT5GnvRCPLUgTI6Omwbr22O5/view?usp=sharing"
                className="group relative px-6 sm:px-8 py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 text-center"
              >
                <span className="relative z-10 font-semibold text-white">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://github.com/Vishnu-Chandra"
                target="_blank"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base border border-purple-500 rounded-lg hover:bg-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <FaGithub className="text-lg sm:text-xl" />
                <span className="font-semibold group-hover:text-white">GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vishnu-chandra-2579b4290/"
                target="_blank"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base border border-cyan-500 rounded-lg hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
                <span className="font-semibold group-hover:text-white">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center items-center opacity-0 animate-fade-in-up animation-delay-400 mt-8 md:mt-0">
            <div className="relative group">
              {/* Gradient ring with glow */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Outer gradient border */}
              <div className="relative">
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full animate-gradient-spin"></div>
                
                {/* Photo container */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-900 bg-gray-800">
                  <img 
                    src="/profile/profile-photo.jpg"
                    alt="Padma Vishnu Chandra"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

