// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/profile-background.png";
import profileImg from "../assets/profile.png";

const roles = [
  "UI / UX Designer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Infinite animated role loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6
        pt-24 "
      style={{
        backgroundImage: `linear-gradient(
          rgba(2, 6, 23, 0.85),
          rgba(0, 0, 0, 0.85)
        ), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
            Hello.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            I'm <span className="text-cyan-400">Shakil</span>
          </motion.h1>

          {/* Animated Role Text */}
          <div className="h-10 mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-semibold text-gray-300"
              >
                {roles[index]}
              </motion.h2>
            </AnimatePresence>
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
            <button className="px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              Contact Me
            </button>
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
