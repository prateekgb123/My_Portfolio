import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  const skills = [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "MongoDB",
    "MySQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST APIs",
    "JWT Authentication",
    "IBM ACE",
    "ESQL",
    "Git & GitHub",
    "Docker",
    "Postman",
    "MERN Stack",
    "LangChain",
    "RAG",
    "Groq API",
    "AI Integration",
    "Responsive Web Design",
    "Problem Solving",
  ];

  return (
    <motion.section
      className="min-h-screen bg-gray-50 py-16 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">
          About Me
        </h2>

        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Software Engineer and Full Stack Developer focused on building
          responsive web applications, backend services, enterprise
          integration solutions, and AI-powered applications.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* About Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            About Me
          </h3>

          <p className="text-gray-600 leading-8 text-lg">
            I am a{" "}
            <span className="font-semibold text-blue-600">
              Software Engineer and Full Stack Developer
            </span>{" "}
            with experience in web development, backend services, enterprise
            application integration, and AI-powered applications. I recently
            completed my Bachelor of Engineering in{" "}
            <span className="font-semibold">
              Information Science and Engineering
            </span>{" "}
            from CMR Institute of Technology, Bengaluru.

            <br />
            <br />

            I specialize in{" "}
            <span className="font-semibold">
              MERN Stack Development
            </span>{" "}
            and have hands-on experience with React.js, Node.js, Express.js,
            MongoDB, MySQL, REST APIs, and modern development tools. I also
            gained practical exposure to{" "}
            <span className="font-semibold">
              IBM App Connect Enterprise, SOAP, REST Web Services, XML,
              JSON, and ESQL
            </span>{" "}
            during my training at Cognizant.

            <br />
            <br />

            I have also worked on{" "}
            <span className="font-semibold">
              AI-powered and Generative AI applications
            </span>{" "}
            using technologies such as LangChain, RAG, and Groq API. I enjoy
            solving real-world problems through technology, building
            responsive applications, integrating APIs, and continuously
            learning new tools and frameworks.

            <br />
            <br />

            My goal is to grow as a{" "}
            <span className="font-semibold text-blue-600">
              Software Engineer
            </span>{" "}
            and contribute to building reliable, scalable, and
            user-focused products.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Contact Information
          </h3>

          <div className="space-y-5">

            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">
                  Programmer Analyst Trainee
                </p>
                <p className="text-gray-600">
                  Cognizant Technology Solutions
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaGraduationCap className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">
                  B.E. in Information Science and Engineering
                </p>
                <p className="text-gray-600">
                  CMR Institute of Technology, Bengaluru (2026)
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a
                href="mailto:prateekgb2004@gmail.com"
                className="text-gray-700 hover:text-blue-600"
              >
                prateekgb2004@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 text-xl" />
              <a
                href="tel:+918861437069"
                className="text-gray-700 hover:text-blue-600"
              >
                +91 88614 37069
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-600 text-xl" />
              <a
                href="https://www.linkedin.com/in/prateek-g-ballari-90436330b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                linkedin.com/in/prateek-g-ballari-90436330b
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaGithub className="text-gray-800 text-xl" />
              <a
                href="https://github.com/prateekgb123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/prateekgb123
              </a>
            </div>

          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 border border-blue-100 text-gray-700 font-medium rounded-xl py-3 px-4 text-center hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.08 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;