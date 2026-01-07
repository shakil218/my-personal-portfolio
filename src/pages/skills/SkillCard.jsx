import { motion } from "framer-motion";
const SkillCard = ({ title, icon, skills }) => {
  return (
    /* 🔥 MODIFICATION 1:
       Gradient animated border wrapper */
    <div className="gradient-border ">
      <motion.div whileHover={{ scale: 1.03 }} className="glass p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-cyan-400 text-xl">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        <ul className="space-y-4">
          {skills.map((skill) => (
            /* 🔥 MODIFICATION 2:
               Hover glow per skill item */
            <li key={skill.name} className="skill-item">
              <div className="flex items-center gap-3 text-gray-300">
                {skill.icon}
                <span className="flex-1">{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>

              {/* 🔥 MODIFICATION 3:
                  Animated progress bar */}
              <div className="h-2 bg-gray-700 rounded mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-linear-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
export default SkillCard;
