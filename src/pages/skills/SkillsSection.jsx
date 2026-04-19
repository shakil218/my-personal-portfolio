 // eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDatabase,
  FaWrench,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiJsonwebtokens,
  SiOpenai,
} from "react-icons/si";

import SkillCard from "./SkillCard";

const skillsData = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],

  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  ],

  tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "AI", icon: <SiOpenai className="text-green-400" /> },
    { name: "REST API", icon: <FaCode className="text-cyan-400" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
  ],
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 pt-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl">
            Tools, technologies, and frameworks I use to build scalable apps.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <SkillCard
            title="Frontend"
            icon={<FaCode />}
            skills={skillsData.frontend}
            variant="frontend"
          />

          <SkillCard
            title="Backend"
            icon={<FaDatabase />}
            skills={skillsData.backend}
            variant="backend"
          />

          <SkillCard
            title="Tools & Others"
            icon={<FaWrench />}
            skills={skillsData.tools}
            variant="tools"
          />

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;