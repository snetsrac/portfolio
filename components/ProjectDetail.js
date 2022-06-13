import Image from 'next/image';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProjectDetail = ({ project }) => {
  return (
    <div className='group relative text-center'>
      <div
        className={classNames(
          project.backgroundColor,
          'flex flex-col justify-center p-8 font-narrow uppercase tracking-widest transition-filter group-hover:brightness-15 group-hover:filter group-focus:brightness-15 group-focus:filter'
        )}
      >
        <div className='relative mb-8 h-44'>
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <h3 className='mb-1 text-4xl font-bold'>{project.title}</h3>
        <p className=''>{project.subtitle}</p>
      </div>
      <div className='absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-2 font-bold opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100'>
        <p className='text-zinc-100'>{project.title}</p>
        <p className='text-green-600'>More Info</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
