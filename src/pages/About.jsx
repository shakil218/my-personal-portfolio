import { motion } from "framer-motion";
import { User, Code2, Layers, Target, Brain, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 pt-24 flex items-center justify-center"
    >
      <div className="glass max-w-6xl w-full p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-4">
            <User className="text-cyan-400" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About <span className="text-cyan-400">Me</span>
            </h2>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I’m <span className="text-white font-medium">Shakil</span>, a
            passionate web developer who enjoys building modern, scalable, and
            user-focused applications with clean UI and strong performance.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            My journey started with frontend development and gradually expanded
            into backend technologies and full-stack MERN applications. I love
            solving problems and continuously improving my skills.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-cyan-400" size={18} />
              Strong foundation in JavaScript & React
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-cyan-400" size={18} />
              Experience with REST APIs & authentication
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-cyan-400" size={18} />
              Focus on clean UI, UX & performance
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-cyan-400" size={18} />
              Passion for continuous learning
            </li>
          </ul>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <div className="glass p-6">
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Experience</h3>
            </div>
            <p className="text-gray-400">
              Building personal and real-world projects using modern web
              technologies and best practices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass p-6">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
            </div>
            <p className="text-gray-400">
              React, Tailwind CSS, Node.js, Express, MongoDB, Firebase, Git &
              GitHub.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Goals</h3>
            </div>
            <p className="text-gray-400">
              To grow as a full-stack developer and contribute to impactful,
              high-quality products.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass p-6">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Mindset</h3>
            </div>
            <p className="text-gray-400">
              Problem-solver, detail-oriented, and always eager to learn new
              technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
