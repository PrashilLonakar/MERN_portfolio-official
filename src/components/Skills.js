import React from "react";
import { useScroll, motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark absolute py-3 px-6 dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="-24vw" y="10vw" />
        <Skill name="Typescript" x="0vw" y="12vw" />
        <Skill name="ExpressJs" x="20vw" y="-15vw" />
        <Skill name="NodeJs" x="15vw" y="-12vw" />
        <Skill name="NestJs" x="32vw" y="-5vw" />
        <Skill name="Angular" x="0vw" y="-20vw" />
        <Skill name="NextJs" x="25vw" y="18vw" />
        <Skill name="ReactJs" x="18vw" y="18vw" />
        <Skill name="Figma" x="-28vw" y="-8vw" />
        <Skill name="Tailwind CSS" x="-10vw" y="18vw" />
      </div>
    </>
  );
}

export default Skills;
