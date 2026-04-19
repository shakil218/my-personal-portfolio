 // eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SkillCard = ({ title, icon, skills, variant }) => {
  return (
    <div className={`animated-border ${variant}-border rounded-2xl`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="glass rounded-2xl p-6 h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xl text-white">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="snake-border rounded-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#0f172a] rounded-xl p-4 flex flex-col items-center justify-center text-center h-full cursor-pointer"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-300">{skill.name}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default SkillCard;