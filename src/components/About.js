import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Education from "./Education";
import Typed from "typed.js";

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Namaste!", "Hello!", "Bonjour!", "Hola!", "Nǐ hǎo!", "Ciao!"],
      typeSpeed: 50,
      backDelay: 4000,
      showCursor: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={el} />
    </>
  );
}
const About = () => {
  return (
    <div className="rounded-lg my-4 sm:my-8 p-4 sm:p-0 sm:py-4 text-sm leading-5">
      <h2 className="text-2xl font-bold mb-4 h-6">
        <MyComponent />
      </h2>

      <motion.div
        className="flex flex-col gap-6"
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate="show"
      >
        <p className="leading-relaxed">
          I'm Mukul. I'm a web developer that thrives on bringing ideas into
          interactive web experiences.!
        </p>
        <p className="leading-relaxed">
          As a dedicated front-end developer, I have a strong foundation in
          HTML, CSS, and JavaScript, along with expertise in React and essential
          frontend frameworks like Tailwind and Redux. I have successfully
          delivered projects that showcase my ability to create responsive and
          user-friendly web applications.
        </p>
        <p className="leading-relaxed">
          I possess proficient skills in Java, Spring Boot, and database
          management systems like MySQL.
        </p>
      </motion.div>
      <Education />
      <p className="mt-4">
        Thank you for taking the time to learn more about me. I'd love to chat
        and explore how I can contribute to your team.
      </p>
    </div>
  );
};

export default About;
