import React from 'react';
import Image from 'next/image';

const SkillDetail = ({ skill }) => {
  return (
    <div className='border border-zinc-300 bg-white'>
      <div className='p-8 text-center'>
        <div className='relative mb-4 h-20'>
          <Image
            src={skill.imageUrl}
            alt={skill.title}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <h3 className='mb-2 text-xl font-bold'>{skill.title}</h3>
        <p>{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillDetail;
