"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "JustHomz",
    description: "India's first prop-fintect app.",
    image: "/images/projects/jh_1.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.blackopal.justhomz",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Expense Tracker built on Flutter & Firebase.",
    image: "/images/projects/exp_1.jpg",
    tag: ["All", "Mobile"],
    previewUrl: "https://github.com/AyanKhan2001/expensetracker_msa",
  },
  {
    id: 3,
    title: "Recipe Finder",
    description: "Recipe finder app built on Flutter & Spoonacular API for recipe search",
    image: "/images/projects/rec_1.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://github.com/AyanKhan2001/recipefinder",
  },
  {
    id: 4,
    title: "Gym Tracker app",
    description: "A gym user app to track user clock in/clock out time and duration of workout.",
    image: "/images/projects/gym_1.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://github.com/AyanKhan2001/gymbook",
  },
  {
    id: 5,
    title: "Waterproofing company website",
    description: "A startup waterproofing company website, developed using HTML,CSS & JavaScript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "https://ayankhan2001.github.io/arintcowaterproofing/index.html",
  },
  {
    id: 6,
    title: "Weather Web App",
    description: "Weather web application using OpenWeather API",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://github.com/AyanKhan2001/Weather",
  },
  {
    id: 7,
    title: "TaskItz - Task recorder ",
    description: "Adding To-DO task and delete functionality",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "https://ayankhan2001.github.io/TaskITz-by-Ayan/",
  },
  {
    id: 8,
    title: "Electronic E Commerce App - Juztelectronics",
    description: "Made an E-Commerce Electronic store Android application using Flutter and Firebase Firestore for the backend.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://media.licdn.com/dms/image/D4D2DAQGJumOOh3ZtkQ/profile-treasury-image-shrink_1920_1920/0/1688385009099?e=1701860400&v=beta&t=bGzhBxjQjkDFhrx0topnD5ijVSazJ4yIskxC-UB8RQk",
  },
  {
    id: 9,
    title: "Dot News Android App",
    description: "A news application made in Android Studio and the code is written in Java. It provides AD-Free and minimalistic user experience. It provide top 100 news from all over different news websites and uses news.org REST API for all the computation and fetching of news.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://github.com/AyanKhan2001/Dot-News-Application-by-Ayan-Khan",
  },
  {
    id: 10,
    title: "Women Safety Android App",
    description: "Send live location by shaking your phone",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.linkedin.com/in/ayan-khan-592b14b1/details/projects/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
