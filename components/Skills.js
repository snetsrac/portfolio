import React from 'react';
import SkillDetail from './SkillDetail';

import content from '../content';

const Skills = () => {
  const renderSkills = () => {
    return Object.entries(content.skills).map(([key, value]) => {
      return <SkillDetail key={key} skill={value} />;
    });
  };

  return (
    <section
      id='skills'
      className='-mt-16 pt-16 lg:mt-0 lg:pt-0'
      data-scroll-section
    >
      <div className='mx-auto max-w-screen-xl py-12 px-8'>
        <h2 className='mb-12 text-3xl font-extrabold'>Skills</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {renderSkills()}
        </div>
      </div>
    </section>
  );
};

export default Skills;
