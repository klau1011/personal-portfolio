import React from "react";
import SlideUp from "./SlideUp";

const experiences = [
  {
    role: "Full-Stack Developer (Co-op)",
    company: "WStore",
    duration: "May 2023 - Aug 2023",
    description:
      "Created an API module to fetch printable book metadata. Refactored Docker images and configured a GitLab CI/CD pipeline, leading to 53% faster build times",
    technologies: ["PHP", "Docker", "GitLab"],
  },
  {
    role: "Full-Stack Developer",
    company: "Waterloop",
    duration: "Jan 2023 - Present",
    description:
      "Developed new backend for the upcoming merch store with controllers, routes, seeds, migrations, and tests. Worked on content management system functionalities such as team descriptors and geese info",
    technologies: ["ExpressJS", "PostgresSQL", "React", "Knex.js", "Chai"],
  },
  {
    role: "Software Developer",
    company: "Midnight Sun",
    duration: "Sep 2022 - Present",
    description:
      "Made scripts to retreive CAN bus data from the solar vehicle to a MySQL database",
    technologies: ["Python", "MySQL", "Pandas"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-center">
      <h1 className="my-10 font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-20 items-center">
        {experiences.map((experience, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="animate-slideUpCubiBezier animation-delay-2">
                <div className="text-left md:text-center">
                  <h1 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-300 ">{experience.role}</h1>
                  <h2 className="text-xl text-neutral-600 dark:text-neutral-400">
                    {experience.company}
                  </h2>
                  <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-4">
                    {experience.duration}
                  </p>
                  <p className="text-lg leading-7 mb-4 text-neutral-700 dark:text-neutral-300">
                   {experience.description}
                  </p>
                  <div className="flex flex-wrap justify-center">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500 text-white px-3 py-1 m-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br> 
      <br></br>
    </section>
    
  );
};

export default ExperienceSection;
