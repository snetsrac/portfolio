import React from 'react';

const ProjectDetail = ({ project }) => {

  return (
    <a className="relative text-center group" href={project.url}>
      <div className={`p-8 flex flex-col justify-center font-narrow tracking-widest uppercase ${project.backgroundColor} group-hover:filter group-hover:brightness-15 group-focus:filter group-focus:brightness-15 transition-filter`}>
        <img className="mb-8 h-44" src={project.imageUrl} alt="" />
        <h3 className="mb-1 text-4xl font-bold">{project.title}</h3>
        <p className="">{project.subtitle}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 font-bold justify-center items-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
        <p className="text-gray-100">{project.title}</p>
        <p className="text-green-600">More Info</p>
      </div>
    </a>
  );
};

export default ProjectDetail;
