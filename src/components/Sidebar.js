import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import content from '../content/content.yaml';

const Sidebar = () => {
  return (
    <nav className="fixed top-0 left-0 flex flex-col justify-center w-64 h-screen text-center bg-gray-900">
      <StaticImage className="mb-4 mx-auto rounded-full w-32 border-2 border-gray-400" src="../images/headshot.jpg" alt={content.name} />
      <h5 className="mb-2 text-xl font-bold text-gray-100">{content.name}</h5>
      <h6 className="mb-12 text-gray-500">{content.status}</h6>
      <a href="#home" className="p-4 text-lg text-gray-100 hover:text-white hover:bg-gray-700" id="homeNav">Home</a>
      <a href="#about" className="p-4 text-lg text-gray-100 hover:text-white hover:bg-gray-700" id="aboutNav">About Me</a>
      <a href="#skills" className="p-4 text-lg text-gray-100 hover:text-white hover:bg-gray-700" id="skillsNav">Skills</a>
      <a href="#projects" className="p-4 text-lg text-gray-100 hover:text-white hover:bg-gray-700" id="projectsNav">Projects</a>
      <a href="#contact" className="p-4 text-lg text-green-600 hover:text-green-400 hover:bg-gray-700" id="contactNav">Contact</a>
    </nav>
  );
};

export default Sidebar;
