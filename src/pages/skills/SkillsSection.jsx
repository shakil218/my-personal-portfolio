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
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";
import SkillCard from "./SkillCard";


const skillsData = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 92 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 88 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      level: 90,
    },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 82 },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 78 },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
      level: 75,
    },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 85 },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" />, level: 88 },
    { name: "Vite", icon: <SiVite className="text-purple-400" />, level: 80 },
    { name: "REST API", icon: <FaCode className="text-cyan-400" />, level: 82 },
    {
      name: "JWT",
      icon: <SiJsonwebtokens className="text-pink-400" />,
      level: 75,
    },
  ],
};



const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 pt-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl">
            Tools, technologies, and frameworks I use to build scalable and
            modern web applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend"
            icon={<FaCode />}
            skills={skillsData.frontend}
          />
          <SkillCard
            title="Backend"
            icon={<FaDatabase />}
            skills={skillsData.backend}
          />
          <SkillCard
            title="Tools & Others"
            icon={<FaWrench />}
            skills={skillsData.tools}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
