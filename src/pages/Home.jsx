// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const roles = [
  "UI / UX Designer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
];

const Home = () => {
  // MODIFIED: Added states for typing animation
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // MODIFIED: Replaced old interval animation with typing effect
  useEffect(() => {
    const currentWord = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24"
    >
      {/* Glass Container */}
      <div className="glass max-w-6xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 mb-2"
          >
            Hello <span className="text-cyan-400 text-xs">there</span>.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            I'm <span className="text-cyan-400">Md Shakil Islam</span>
          </motion.h1>

          {/* MODIFIED: Typing Animation Text */}
          <div className="h-10 mb-6 overflow-hidden flex items-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
              {text}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-md mb-8"
          >
            I design and develop modern, scalable, and high-performance web
            applications with clean UI and smooth user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <HashLink
              smooth
              to={"#projects"}
              className="px-3 md:px-6 py-3 rounded-xl border bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition"
            >
              View Projects
            </HashLink>

            <Link
              to={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 md:px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Resume
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
              src={profileImg}
              alt="Shakil"
              className="relative w-64 h-64 md:w-80 md:h-96 object-cover rounded-2xl border border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;