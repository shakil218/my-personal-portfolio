// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../../assets/2823269.jpg"

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass p-4 rounded-xl shadow-lg flex flex-col"
    >
      
        <img
          src={image}
          alt={project.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-white font-semibold text-xl mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="mt-auto flex gap-2">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      
    </motion.div>
  );
};

export default ProjectCard;
