import React from 'react';
import Image from 'next/image';

import content from '../content';

const About = () => {
  return (
    <section
      id='about'
      className='-mt-16 pt-16 lg:mt-0 lg:pt-0'
      data-scroll-section
    >
      <div className='mx-auto max-w-screen-xl py-12 px-8'>
        <h2 className='mb-12 text-3xl font-extrabold'>About Me</h2>
        <div className='mb-12 flex justify-center lg:hidden'>
          <div className='max-h-44 overflow-hidden rounded-full ring-2 ring-gray-400 ring-offset-4'>
            <Image
              src='/headshot.jpg'
              alt={content.name}
              width={176}
              height={176}
            />
          </div>
        </div>
        <p className='mb-4 text-lg text-green-600'>Who am I?</p>
        {/* <h3 className='mb-6 text-2xl font-semibold'>
          {`I'm ${content.name}, a ${content.title}`}
        </h3> */}
        <div className='mb-8'>{content.about}</div>
        <hr className='mb-8' />
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <p className='mb-2'>
            <span className='font-bold'>Name:</span> {content.name}
          </p>
          <p className='mb-2'>
            <span className='font-bold'>Email:</span>{' '}
            <a className='text-green-600' href={content.email.url}>
              {content.email.address}
            </a>
          </p>
          <p className='mb-2'>
            <span className='font-bold'>Linkedin:</span>{' '}
            <a className='text-green-600' href={content.linkedin.url}>
              {content.linkedin.shortUrl}
            </a>
          </p>
          <p className='mb-8'>
            <span className='font-bold'>Github:</span>{' '}
            <a className='text-green-600' href={content.github.url}>
              {content.github.shortUrl}
            </a>
          </p>
        </div>
        <a
          className='mb-4 block w-auto rounded-full bg-green-600 py-3 px-6 text-center text-white md:mb-0 md:inline-block md:text-left'
          href='/ChrisCarstensResume2023.pdf'
        >
          Download Resume
        </a>
        <a
          className='block rounded-full border border-gray-500 py-3 px-6 text-center text-gray-500 md:ml-4 md:inline-block md:text-left'
          href='#projects'
        >
          My Work
        </a>
      </div>
    </section>
  );
};

export default About;
