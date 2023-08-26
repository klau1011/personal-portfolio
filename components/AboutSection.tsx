import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "Typescript" },
  { skill: "React" },
  { skill: "Node/Express" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "Git" },
  { skill: "HTML/CSS" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-1 md:pt-16 md:pb-20">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Kevin and I am a highly ambitious and driven student interested in the technology field
              from the University of Waterloo. I am currently in my second year of studying Management Engineering, which focuses on utilizing computing and statistics to optimize systems.
            </p>
            <br />
            <p>
              In my free time, some things I like to do include watching sports, cubing, and playing chess.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
           
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
