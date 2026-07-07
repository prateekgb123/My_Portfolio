import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      duration: "2026 – Present",
      description:
        "Completed intensive training in IBM App Connect Enterprise (IBM ACE), focusing on enterprise application integration. Worked on developing and understanding integration flows, message routing, data transformation, and integrating applications using SOAP and REST Web Services. Gained practical exposure to enterprise integration concepts, debugging message flows, API integration, and industry-standard software development practices.",
      techStack:
        "IBM App Connect Enterprise (IBM ACE), SOAP Web Services, REST APIs, XML, JSON, ESQL, Java, Git",
    },
  ];

  return (
    <motion.section
      className="min-h-screen bg-gray-50 py-16 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center mb-14"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">
          Professional Experience
        </h2>

        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          My professional journey and industry experience.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-600 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-blue-700">
              {experience.title}
            </h3>

            <h4 className="text-xl font-semibold text-gray-800 mt-2">
              {experience.company}
            </h4>

            <p className="text-gray-500 mt-2 mb-5">
              {experience.duration}
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              {experience.description}
            </p>

            <div className="mt-6">
              <h5 className="font-semibold text-gray-800 mb-3">
                Technologies & Tools
              </h5>

              <div className="flex flex-wrap gap-3">
                {experience.techStack.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;