import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import content from '../content/content.yaml';

const About = () => {
  const breakpoints = useBreakpoint();

  return (
    <section id="about" className="-mt-16 pt-16 lg:mt-0 lg:pt-0" data-scroll-section>
      <div className="mx-auto max-w-screen-xl py-12 px-8">
        <h2 className="mb-12 text-3xl font-extrabold">About Me</h2>
        <div className="mb-12 flex justify-center">
          {!breakpoints.lg &&
            <StaticImage className="rounded-full ring-2 ring-gray-400 ring-offset-4" src="../images/headshot.jpg" alt={content.name} width={176} />
          }
        </div>
        <p className="mb-4 text-lg text-green-600">Who am I?</p>
        <h3 className="mb-6 text-2xl font-semibold">I'm {content.name}, a {content.title}</h3>
        <div className="mb-8">{content.about}</div>
        <hr className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <p className="mb-2"><span className="font-bold">Name:</span> {content.name}</p>
          <p className="mb-2"><span className="font-bold">Email:</span> <a className="text-green-600" href={content.email.url}>{content.email.address}</a></p>
          <p className="mb-2"><span className="font-bold">Linkedin:</span> <a className="text-green-600" href={content.linkedin.url}>{content.linkedin.shortUrl}</a></p>
          <p className="mb-8"><span className="font-bold">Github:</span> <a className="text-green-600" href={content.github.url}>{content.github.shortUrl}</a></p>
        </div>
        <a className="block md:inline-block mb-4 md:mb-0 rounded-full w-auto py-3 px-6 bg-green-600 text-white text-center md:text-left" href="#resume">Download Resume</a>
        <a className="block md:inline-block md:ml-4 rounded-full py-3 px-6 border border-gray-500 text-gray-500 text-center md:text-left" href="#projects">My Work</a>
      </div>
    </section>
  );
};

export default About;
