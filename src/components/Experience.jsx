import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      duration: "May 2026 – June 2026",
      description:
        "Completed intensive training in IBM App Connect Enterprise (IBM ACE), focusing on enterprise application integration. Developed and enhanced integration flows, message routing, data transformation, and application integration using SOAP and REST Web Services. Gained practical exposure to XML, JSON, ESQL, API integration, debugging message flows, and enterprise integration concepts.",
      techStack:
        "IBM App Connect Enterprise (IBM ACE), IBM MQ, SOAP Web Services, REST APIs, XML, JSON, ESQL, Java, Git",
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Edutainer IT Solutions",
      duration: "Jan 2026 – Apr 2026",
      description:
        "Built responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Developed RESTful APIs for frontend and backend communication, implemented authentication, CRUD operations, form handling, search, and filtering, and tested APIs using Postman. Used Git and GitHub for version control and maintained application code throughout the development lifecycle.",
      techStack:
        "React.js, Node.js, Express.js, MongoDB, REST APIs, JavaScript, HTML, CSS, Postman, Git, GitHub",
    },
    {
      title: "MERN Stack Web Development Intern",
      company: "CODTECH IT Solutions Pvt. Ltd.",
      duration: "Dec 2025 – Apr 2026",
      description:
        "Developed multiple full-stack web applications using the MERN stack during the internship. Built a weather application with REST API integration, a real-time chat application, a real-time collaboration tool, and a productivity tracker extension. Focused on responsive user interfaces, API integration, backend development, and database management using MongoDB.",
      techStack:
        "MongoDB, Express.js, React.js, Node.js, REST APIs, JavaScript, HTML, CSS, Git",
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

      <div className="max-w-5xl mx-auto space-y-8">
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