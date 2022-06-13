import { useState } from 'react';

import ProjectDetail from './ProjectDetail';
import content from '../content';
import ProjectModal from './ProjectModal';

const projects = Object.entries(content.projects);

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
            {projects.map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedProject(value);
                  setIsOpen(true);
                }}
              >
                <ProjectDetail project={value} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
