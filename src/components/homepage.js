import React from "react";
import { motion } from "framer-motion"; // For animation
import { ReactTyped } from "react-typed"; // Correct import for ReactTyped
import "./Intro.css";
import myImage from "./my_image.jpg";

function IntroSection() {
  return (
    <div className="intro-container">
      {/* Text Section */}
      <div className="text-section">
        <motion.h1
          className="intro-heading"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello, I am <span className="highlight">Kshama S</span>
        </motion.h1>

        {/* Typewriter Effect for "I am a Web Developer..." */}
        <motion.div
          className="about-me"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <p>
            <ReactTyped
              strings={[
                "I am a Web Developer and a Competitive Coding Enthusiast.",
              ]}
              typeSpeed={70}
              backSpeed={50}
              backDelay={500}
              startDelay={500}
              loop={false}
              showCursor={true}
              className="typed-text"
            />
          </p>
        </motion.div>

        {/* Static black text for the rest */}
        <motion.div
          className="about-me-static"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <p style={{ color: "black", fontFamily: "cursive" }}>
            I have a passion for building innovative solutions and continuously
            enhancing my skills to solve real-world problems.Feel free to explore my portfolio and get in touch if you have any questions or if you'd like to collaborate on a project.
          </p>
        </motion.div>
      </div>

      {/* Photo Section */}
      <motion.div
        className="photo-section"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div
          className="circle-placeholder"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="photo-icon">
            <img src={myImage} alt="Profile of Kshama S" />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IntroSection;











