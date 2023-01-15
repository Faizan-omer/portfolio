import React from "react";
import portfolio from "../../common/portfolio";

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center my-12">
      {portfolio.map((project, index) => (
        <div
          key={index}
          className="hover:cursor-pointer mr-3 mt-8 mb-8 w-3/12 h-auto max-h-56"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={project.thumbnail}
              alt=""
              className="w-full h-full object-fit-cover "
            />
          </a>
          <p className="mt-3 font-bold text-sm">{project.title}</p>
          <p className="text-xs italic">{project.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
