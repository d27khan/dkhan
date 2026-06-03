import React, { useEffect, useState } from "react";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("public/projectDetails.json") // Replace with the correct path
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="py-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <a
          key={index}
          className="relative p-px rounded border border-whitetext dark:border-gray-700 bg-day dark:bg-night bg-opacity-50 dark:bg-opacity-50 flex flex-wrap transform transition duration-500 cursor-pointer group hover:scale-105"
          href={project.project_url}
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
          {/* Add other bar elements */}
          <div className="relative p-4 space-y-2 bg-day dark:bg-night">
            <h2 className="mt-2 mb-2 w-11/12 md:text-xl font-bold inline-block">
              {project.project_name}
            </h2>
            <a href={project.project_url}>
              {/* GitHub icon */}
            </a>
            <span className="w-full inline-flex gap-2 items-start">
              {project.project_tech.map((technology, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block py-1 px-2 rounded border border-gray-700 text-xs font-medium"
                >
                  {technology}
                </span>
              ))}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wider">
              {project.project_desc}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectCards;
/*
<div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl text-greytext dark:text-whitetext">
                Some of my Projects
              </h2>
              <p className="mt-4 text-center text-greytext dark:text-whitetext">
                Here are some of the projects I have worked on!
              </p>
            </div>

            <div className="py-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <a
                className="relative p-px rounded border border-whitetext dark:border-gray-700 bg-day dark:bg-night bg-opacity-50 dark:bg-opacity-50 flex flex-wrap transform transition duration-500 cursor-pointer group hover:scale-105"
                href="/https://github.com/d27khan"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="relative p-4 space-y-2 bg-day dark:bg-night">
                  <h2 className="mt-2 mb-2 w-11/12 md:text-xl font-bold inline-block">
                    🧴DermaCare
                  </h2>
                  <a href="https://github.com/d27khan">
                    <RiGithubLine className="cursor-pointer inset-y-0 right-0 inline-block" />
                  </a>
                  <span className="w-full inline-flex gap-2 items-start">
                    <span className="inline-block py-1 px-2 rounded border border-gray-700 text-xs font-medium">
                      Python
                    </span>
                    <span className="inline-block py-1 px-2 rounded border border-gray-700 text-xs font-medium">
                      Google Cloud
                    </span>
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wider">
                    A Web Application that analyzes your skin using machine
                    learning
                  </p>
                </div>
              </a>
              <a
                className="relative p-px rounded border border-whitetext dark:border-gray-700 bg-day dark:bg-night bg-opacity-50 dark:bg-opacity-50 flex flex-wrap transform transition duration-500 cursor-pointer group hover:scale-105"
                href="https://github.com/d27khan"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="relative p-4 space-y-2  dark:bg-night">
                  <a href="">
                    <MdOutlineFeaturedPlayList className="align-text-top inline-block pr-1" />
                  </a>
                  <h2 className="mt-2 w-10/12 mb-2 md:text-xl font-bold inline-block">
                    LSPro
                  </h2>
                  <a href="https://github.com/d27khan">
                    <RiGithubLine className="cursor-pointer inset-y-0 right-0 inline-block" />
                  </a>
                  <span className="w-full inline-flex gap-2 items-start">
                    <span className="inline-block py-1 px-2 rounded border border-gray-700 text-xs font-medium">
                      C
                    </span>
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wider">
                    A Command line tool aiming to make the list command
                    interactive
                  </p>
                </div>
              </a>
              <a
                className="relative p-px rounded border border-whitetext dark:border-gray-700 bg-day dark:bg-night bg-opacity-50 dark:bg-opacity-50 flex flex-wrap transform transition duration-500 cursor-pointer group hover:scale-105"
                href="https://github.com/d27khan"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="relative p-4 space-y-2 bg-day dark:bg-night">
                  <a href="">
                    <ImAmazon className="align-text-top inline-block pr-1" />
                  </a>
                  <h2 className="mt-2 w-10/12 mb-2 md:text-xl font-bold inline-block">
                    Amazon Price Tracker
                  </h2>
                  <a href="https://github.com/d27khan">
                    <RiGithubLine className="cursor-pointer inset-y-0 right-0 inline-block" />
                  </a>
                  <span className="w-full inline-flex justify-between items-center">
                    <span className="inline-block py-1 px-2 rounded border border-gray-700 text-xs font-medium">
                      Python
                    </span>
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wider">
                    Keep track of prices on your favourite Amazon items with
                    this script!
                  </p>
                </div>
              </a>
              <a
                className="relative p-px rounded border border-whitetext dark:border-gray-700 bg-day dark:bg-night bg-opacity-50 dark:bg-opacity-50 flex flex-wrap transform transition duration-500 cursor-pointer group hover:scale-105"
                href="https://github.com/d27khan"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-accent group-hover:scale-x-100"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-accent group-hover:scale-y-100"></div>
                <div className="relative p-4 space-y-2 bg-day dark:bg-night">
                  <h2 className="mt-2 mb-2 w-11/12 md:text-xl inline-block font-bold">
                    📚 Book Store App
                  </h2>
                  <a href="https://github.com/d27khan">
                    <RiGithubLine className="cursor-pointer inset-y-0 right-0 inline-block" />
                  </a>
                  <span className="w-full inline-flex justify-between items-center">
                    <span className="inline-block py-1 px-2 rounded border border-gray-700 text-xs font-medium">
                      Java
                    </span>
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wider">
                    A stand alone library management desktop applicaiton
                  </p>
                </div>
              </a>
            </div>*/