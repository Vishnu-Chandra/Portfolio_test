import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CodingProfiles() {
  const profiles = [
              {
      name: "LeetCode",
      icon: SiLeetcode,
      iconColor: "text-orange-500",
      accentColor: "orange-500",
      url: "https://leetcode.com/u/vishnu_chandra77/",
      stats: "450+",
      label: "Problems Solved",
      description: "Solved 450+ problems, strengthening problem-solving skills across data structures, algorithms, and coding patterns."
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      iconColor: "text-amber-600",
      accentColor: "amber-600",
      url: "https://www.codechef.com/users/vishnupadma05",
      stats: "Active",
      label: "Contest Participant",
      description: "Active participant in competitive programming contests, focusing on algorithmic problem solving."
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      iconColor: "text-blue-500",
      accentColor: "blue-500",  
      url: "https://codeforces.com/profile/vishnupadma05",
      stats: "Regular",
      label: "Practice",
      description: "Regular practice to enhance logical thinking, speed, and accuracy under time constraints."
    }
  ];

  return (
    <section id="coding" className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-blue-500">Coding Profiles</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Competitive programming journey across multiple platforms
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            
            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className={`relative h-full p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border-2 border-gray-800 transition-all duration-300 group-hover:border-${profile.accentColor} group-hover:-translate-y-2 group-hover:shadow-2xl`}
                  style={{
                    boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)'
                  }}
                >
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="relative p-3 sm:p-4 bg-gray-950/50 rounded-full">
                      <div className={`absolute inset-0 ${profile.iconColor} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                      <Icon className={`relative text-4xl sm:text-5xl ${profile.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} />
                    </div>
                  </div>

                  {/* Platform name */}
                  <h3 className={`text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 ${profile.iconColor} transition-all duration-300 group-hover:scale-105`}>
                    {profile.name}
                  </h3>

                  {/* Stats */}
                  <div className="text-center mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-800/50">
                    <div className={`text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-${profile.accentColor} to-purple-500 mb-1`}>
                      {profile.stats}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      {profile.label}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed mb-3 sm:mb-4">
                    {profile.description}
                  </p>

                  {/* Link indicator */}
                  <div className={`flex items-center justify-center gap-2 ${profile.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2`}>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">Visit Profile</span>
                    <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
