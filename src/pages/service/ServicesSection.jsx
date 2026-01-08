import { motion } from "framer-motion";
import { servicesData } from "./servicesData";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative px-6 pt-24 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Services
          </h2>
          <p className="text-gray-400">
            What I can do for you using modern web technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="gradient-border"
              >
                <div className="glass p-6 h-full text-center">
                  <div className="text-cyan-400 text-4xl mb-4 flex justify-center">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
