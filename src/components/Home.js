import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import content from '../content/content.yaml';

const Home = () => {
  const breakpoints = useBreakpoint();
  const splitName = [content.name.split(' ').slice(0, -1).join(' '), content.name.split(' ').slice(-1)[0]];

  return (
    <section id="home" className="-mt-16 pt-16 lg:mt-0 lg:pt-0">
      <div className="grid relative h-1/2-screen lg:h-screen">
        <StaticImage className="row-start-1 col-start-1 filter brightness-30" src="https://images.unsplash.com/photo-1600683575273-39de9491d8a3" alt="" />
        <div className="row-start-1 col-start-1 z-10 flex flex-col justify-center text-center text-white">
          <h1 className="mb-8 text-6xl font-bold">{splitName[0]} <span className="text-green-600">{splitName[1]}</span></h1>
          <h2 className="text-2xl">{content.title}</h2>
        </div>
        {breakpoints.lg &&
          <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </a>
        }
      </div>
    </section>
  );
};

export default Home;
