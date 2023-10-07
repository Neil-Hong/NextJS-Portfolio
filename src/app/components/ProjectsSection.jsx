"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Ipomoea Homepage",
        description: "Redesigned & Developed homepage for a start-up company.",
        image: "/images/projects/Ipomoea.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://www.ipomoea.xyz/",
        previewUrl: "https://www.ipomoea.xyz/",
    },
    {
        id: 2,
        title: "Football Draw System",
        description:
            "This website is a simple draw system, it imitates the UEFA Champions League draw scenario. This website has been used by a streamer who as million of followers in China during his streaming.",
        image: "/images/projects/football-draw.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Neil-Hong/FootballDraw-version2",
        previewUrl: "https://github.com/Neil-Hong/FootballDraw-version2",
    },
    {
        id: 3,
        title: "3D Galaxy",
        description:
            "This webiste is developed in React with Three.js, it shows the 3D feasibility on web development.",
        image: "/images/projects/3D-website.png",
        tag: ["All", "Web"],
        gitUrl: "https://galaxy-personal.vercel.app/",
        previewUrl: "https://galaxy-personal.vercel.app/",
    },
    {
        id: 4,
        title: "Kids Online Shopping",
        description:
            "This website is a simple online shopping website. It was developed in React framework with Bootstrap elements.",
        image: "/images/projects/kidsonline-shopping.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Neil-Hong/Kids-Online-Shopping",
        previewUrl: "https://github.com/Neil-Hong/Kids-Online-Shopping",
    },
    {
        id: 5,
        title: "E-commerce",
        description:
            "This website is a simple online shopping website. It was developed in React framework with Bootstrap elements.",
        image: "/images/projects/E-commerce.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Neil-Hong/E-Commerce",
        previewUrl: "https://github.com/Neil-Hong/E-Commerce",
    },
    {
        id: 6,
        title: "NextJS Personal Blog",
        description: "This website is a simple personal blog website(full stack) developed in Next.js framework.",
        image: "/images/projects/nextjs-blog.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/Neil-Hong/NextJS-Blog",
        previewUrl: "https://github.com/Neil-Hong/NextJS-Blog",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
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
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
