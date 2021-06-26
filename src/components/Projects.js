import React from 'react';

import { ProjectDetail } from '.';
import content from '../content/content.yaml';

const Projects = () => {
  const renderProjects = () => {
    return Object.entries(content.projects).map(([key, value]) => {
      return <ProjectDetail key={key} project={value} />;
    });
  };

  return (
    <section id="projects" className="-mt-16 pt-16 lg:mt-0 lg:pt-0">
      <div className="mx-auto max-w-screen-xl py-12 px-8">
        <h2 className="mb-12 text-3xl font-extrabold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {renderProjects()}
          </div>
      </div>
    </section>
  );
};

export default Projects;
