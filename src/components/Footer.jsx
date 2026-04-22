import {
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiInstagram,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 px-4 sm:px-6 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-6">

        {/* Copyright */}
        <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
          © {new Date().getFullYear()} Vishnu Chandra. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-5 md:gap-6 text-xl sm:text-2xl">
          <a
            href="https://github.com/Vishnu-Chandra"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <SiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishnu-chandra-2579b4290/"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <SiLinkedin />
          </a>

          <a
            href="https://www.instagram.com/vishnu_chinnu7/"
            target="_blank"
            className="text-gray-400 hover:text-pink-400 transition"
          >
            <SiInstagram />
          </a>

          <a
            href="https://leetcode.com/u/vishnu_chandra77/"
            target="_blank"
            className="text-gray-400 hover:text-orange-400 transition"
          >
            <SiLeetcode />
          </a>
        </div>

      </div>
    </footer>
  );
}
