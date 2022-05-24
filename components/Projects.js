import React from 'react';

import ProjectDetail from './ProjectDetail';
import content from '../content';

const Projects = () => {
  const renderProjects = () => {
    return Object.entries(content.projects).map(([key, value]) => {
      return <ProjectDetail key={key} project={value} />;
    });
  };

  return (
    <section
      id='projects'
      className='-mt-16 pt-16 lg:mt-0 lg:pt-0'
      data-scroll-section
    >
      <div className='bg-zinc-100'>
        <div className='mx-auto max-w-screen-xl py-12 px-8'>
          <h2 className='mb-12 text-3xl font-extrabold'>Projects</h2>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
            {renderProjects()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
