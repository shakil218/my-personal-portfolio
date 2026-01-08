import { experienceData } from './experience';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative  px-6 pt-24 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-12 lg:max-w-xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Experience & Education
          </h2>
          <p className="text-gray-400 ">
            My work experience, internships, and educational background.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;