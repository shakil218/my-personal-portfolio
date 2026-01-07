import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  const Icon = experience.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass p-6 rounded-xl relative"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-cyan-400 text-2xl">
          <Icon />
        </span>
        <h3 className="text-white font-semibold text-lg">{experience.title}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-2">{experience.company}</p>
      <p className="text-gray-500 text-xs mb-4">{experience.date}</p>
      <p className="text-gray-300">{experience.description}</p>
    </motion.div>
  );
};

export default ExperienceCard;
