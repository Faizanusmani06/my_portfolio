import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer, working in both, backend and frontend
          programming. Excited for improving my skills and learning new
          technologies. I'm open to learn and work with any web technology.
        </p>

        <br />

        <p className="text-xl">
          I'm Moh Faizan, a passionate Computer Science student with a deep
          interest in Data Structures, Algorithms, and Full-Stack Development. I
          enjoy challenging myself through competitive programming and
          continuously seeking new ways to expand my skill set. With a solid
          foundation in C/C++, Python, Java, and SQL, along with expertise in
          modern web technologies like React, Next.js, Node.js, and databases
          such as MongoDB and PostgreSQL, I am dedicated to building efficient
          and scalable solutions. My hands-on experience in developing complex
          web applications, combined with my problem-solving skills, has
          equipped me to tackle real-world challenges. I'm excited to bring my
          knowledge and enthusiasm to the technology industry and make a
          meaningful impact. Let's build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
