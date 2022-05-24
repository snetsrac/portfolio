import React from 'react';
import Image from 'next/image';

import content from '../content';
import background from '../public/background.jpg';

const Home = () => {
  const splitName = [
    content.name.split(' ').slice(0, -1).join(' '),
    content.name.split(' ').slice(-1)[0],
  ];

  return (
    <section
      id='home'
      className='-mt-16 pt-16 lg:mt-0 lg:pt-0'
      data-scroll-section
    >
      <div className='relative grid h-1/2-screen lg:h-screen'>
        <Image
          className='col-start-1 row-start-1 brightness-30 filter'
          src={background}
          alt='green pine trees near lake and snow covered mountain during daytime photo - Free Image on Unsplash'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          priority
        />
        <div className='z-10 col-start-1 row-start-1 flex flex-col justify-center text-center text-white'>
          <h1 className='mb-8 text-6xl font-bold'>
            {splitName[0]}{' '}
            <span className='text-green-600'>{splitName[1]}</span>
          </h1>
          <h2 className='text-2xl'>{content.title}</h2>
        </div>
        <a
          href='#about'
          className='absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
