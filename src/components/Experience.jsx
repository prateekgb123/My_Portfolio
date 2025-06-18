import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [    
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
                No Experience Yet
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {experiences.map((experience, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }} 
                        whileHover={{ scale: 1.05 }} 
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-2">{experience.title}</h3>
                        <h4 className="text-lg font-medium text-gray-700">{experience.project}</h4>
                        <p className="text-sm text-gray-500 mb-3">{experience.duration}</p>
                        <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                        <p className="text-gray-600 font-semibold mt-2">Tech Stack:</p>
                        <p className="text-gray-500">{experience.techStack}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;