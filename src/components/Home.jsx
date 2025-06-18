/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ProfileImage from "./../assets/prateek2.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
    return (
        <motion.section
            id="profile"
            className="flex flex-col md:flex-row md:space-x-24 items-center justify-center py-16 bg-white h-[calc(100vh-110px)] md:h-[calc(100vh-90px)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Profile Image */}
            <motion.div
                className="mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <img
                    src={ProfileImage}
                    alt="profile picture"
                    className="w-52 h-52 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="text-center space-y-4 md:space-y-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="text-gray-600 text-xl md:text-2xl">Hello, I&apos;m</div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Prateek G Ballari</h1>
                <div className="text-gray-600 text-lg md:text-xl">Final-year ISE undergraduate | CMRIT &apos;26</div>
                <div className="text-gray-600 text-lg md:text-xl">Student at CMRIT</div>

                {/* Buttons */}
                <div className="flex justify-center space-x-4">
                    <motion.a
                        href="https://drive.google.com/file/d/140PM4IEA9-lnWOoebAJ1q1R5zIWj3Z5p/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Download CV
                    </motion.a>
                    <Link
                        to="/about"
                        className="bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-900 hover:scale-[1.05] transition"
                    >
                        Contact Info
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 md:space-x-8 p-2">
                    <SocialIcon href="https://www.linkedin.com/in/prateek-ballari-90436330b/" icon={<FaLinkedin />} />
                    <SocialIcon href="https://github.com/prateekgb123" icon={<FaGithub />} />
                    <SocialIcon href="https://leetcode.com/u/prateekgb123/" icon={<SimpleIconsLeetcode />} />
                </div>
            </motion.div>
        </motion.section>
    );
};

const SocialIcon = ({ href, icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-500 text-3xl"
        whileHover={{ scale: 1.2 }}
    >
        {icon}
    </motion.a>
);

export function SimpleIconsLeetcode(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
            ></path>
        </svg>
    );
}

export default Home;
