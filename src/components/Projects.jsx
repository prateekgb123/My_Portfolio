import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            projectLink: "https://e-commerce-j29i.onrender.com",
            projectTitle: "E-Commerce with AI Chatbot",
            techStack: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Lyro AI Agent (Chatbot), Razorpay (Payment Gateway)",
            description: "Developed a fully functional e-commerce website featuring product listings, search and filter functionalities, shopping cart, user authentication (signup/login), and secure order placement. Integrated an intelligent AI-powered chatbot to assist users with product inquiries, order tracking, and support queries in real- time, improving user engagement and retention. Backend was built using Express.js and MongoDB for scalable performance, and Razorpay was used to enable seamless online payments.",
        },
        {
            projectLink: "https://food-recipe-apibased.onrender.com",
            projectTitle: "Food Recipe Finder – API-Based Web Application",
            techStack: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and a third-party Recipe API (Spoonacular).",
            description: ": Developed a responsive and interactive food recipe web application that leverages a third-party API to fetch and display recipes based on user input. The platform allows users to search for food recipes by ingredients, meal type, or dietary preferences. It features a modern frontend design, real-time search suggestions, and dynamic rendering of recipe results.",
        },
        {
            projectLink: "https://ai-intgrated-mock-interview-frontend.onrender.com",
            projectTitle: "AI Integrated Mock Interview Platform",
            techStack: ": MERN Stack, Google Gemini Pro API (for AI feedback)",
            description: "Developed a full-stack AI-powered mock interview platform that simulates real-world interview experiences through dynamic question generation, real-time evaluation, and insightful feedback. The platform allows users to record interview sessions, receive AI-driven analysis on responses, and track their progress over time. Designed with a clean and intuitive UI for both desktop and mobile users, the system enhances interview preparation through intelligent automation and personalized learning.",
        }
    ];

    return (
        <motion.section 
            className="p-8 bg-gray-50 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }} 
        >
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }} 
            >
                Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }} // Faster card stagger effect
                        whileHover={{ scale: 1.05 }} // Subtle hover effect
                    >
                        {project.projectLink ? (
                            <Link to={project.projectLink} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-2xl font-semibold text-blue-700 mb-2 hover:underline">
                                    {project.projectTitle}
                                </h3>
                            </Link>
                        ) : (
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.projectTitle}</h3>
                        )}
                        <h5 className="text-lg font-medium text-gray-600 mb-2">{project.techStack}</h5>
                        <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;