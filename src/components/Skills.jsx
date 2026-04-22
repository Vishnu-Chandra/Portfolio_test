import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-purple-500/10 text-9xl animate-pulse">
          <SiReact />
        </div>
        <div className="absolute top-40 right-20 text-cyan-500/10 text-8xl animate-spin-slow">
          <SiJavascript />
        </div>
        <div className="absolute bottom-20 left-1/4 text-green-500/10 text-7xl">
          <SiNodedotjs />
        </div>
        <div className="absolute bottom-40 right-1/3 text-orange-500/10 text-6xl">
          <FaJava />
        </div>
        <div className="absolute top-1/2 left-1/3 text-pink-500/5 text-9xl">
          <SiMongodb />
        </div>
        <div className="absolute top-20 left-1/2 text-blue-500/10 text-7xl animate-pulse">
          <SiHtml5 />
        </div>
        <div className="absolute bottom-10 right-10 text-yellow-500/10 text-8xl">
          <SiFirebase />
        </div>
        <div className="absolute top-1/3 right-1/4 text-cyan-500/10 text-6xl animate-spin-slow">
          <SiTailwindcss />
        </div>
        <div className="absolute bottom-1/3 left-10 text-purple-500/10 text-5xl">
          <SiBootstrap />
        </div>
        <div className="absolute top-2/3 right-20 text-blue-400/10 text-7xl">
          <SiCss3 />
        </div>
        <div className="absolute bottom-1/2 right-1/2 text-orange-500/5 text-9xl">
          <SiGit />
        </div>
        <div className="absolute top-1/4 left-1/4 text-green-400/10 text-6xl animate-pulse">
          <VscCode />
        </div>
        {/* Animated gradient circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4 animate-pulse">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Tools and technologies I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-purple-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Skill icon={<SiC />} name="C" color="text-blue-400" />
              <Skill icon={<SiCplusplus />} name="C++" color="text-blue-500" />
              <Skill icon={<FaJava />} name="Java" color="text-orange-500" />
              <Skill icon={<SiJavascript />} name="JavaScript" color="text-yellow-400" />
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Skill icon={<SiReact />} name="React" color="text-cyan-400" />
              <Skill icon={<SiHtml5 />} name="HTML" color="text-orange-500" />
              <Skill icon={<SiCss3 />} name="CSS" color="text-blue-500" />
              <Skill icon={<SiTailwindcss />} name="Tailwind CSS" color="text-cyan-400" />
              <Skill icon={<SiBootstrap />} name="Bootstrap" color="text-purple-500" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Skill icon={<SiNodedotjs />} name="Node.js" color="text-green-500" />
              <Skill icon={<SiExpress />} name="Express.js" color="text-gray-300" />
              <Skill icon={<SiFirebase />} name="Firebase" color="text-yellow-500" />
              <Skill icon={<SiFlask />} name="Flask" color="text-gray-300" />
            </div>
          </div>

          {/* Tools & Databases */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-pink-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              Tools & Databases
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Skill icon={<SiMongodb />} name="MongoDB" color="text-green-500" />
              <Skill icon={<SiGit />} name="Git" color="text-orange-500" />
              <Skill icon={<SiGithub />} name="GitHub" color="text-gray-300" />
              <Skill icon={<VscCode />} name="VS Code" color="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, name, color }) {
  return (
    <div className="group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
      <span className={`text-lg sm:text-xl ${color} group-hover:scale-125 transition-transform duration-300`}>
        {icon}
      </span>
      <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
        {name}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

