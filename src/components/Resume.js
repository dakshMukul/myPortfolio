import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Resume() {
  return (
    <>
      <motion.div
        className="card"
        whileHover={{ scale: 1.1 }} // Scale up when hovered
        whileTap={{ scale: 0.9 }} // Scale down when tapped
        initial={{ opacity: 0, scale: 0.5 }} // Initial animation
        animate={{ opacity: 1, scale: 1 }} // Animation when component is mounted
        transition={{ duration: 0.5 }} // Transition duration
      >
        <div className="card-content">
          <h2 className="card-title">Title</h2>
          <p className="card-text">This is some sample text.</p>
        </div>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-[16px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>
    </>
  );
}

export default Resume;
