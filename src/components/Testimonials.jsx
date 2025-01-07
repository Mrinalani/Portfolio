import React from "react";
import Section from "./Section";

const Skills = () => {
  const SKILLS = [
    "JavaScript",
    "React.js",
    "Node.js",
    "TypeScript",
    "HTML & CSS",
    "Express.js",
    "Redux",
    "Socket.io",
    "MySQL",
    "MongoDB",
    "Postman",
    "AWS",
  ];

  return (
    <Section
      title="My Skills 🚀"
      subtitle="Here are the technologies and tools I work with to build high-quality, scalable applications."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 ease-in-out duration-200 hover:scale-110"
          >
            <p className="text-center text-lg font-semibold dark:text-white">{skill}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
