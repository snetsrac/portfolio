import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import content from '../content/content.yaml';

const getActiveSection = () => {
  const position = window.scrollY + document.documentElement.clientHeight * 0.5;
  let height = 0;

  for (let section of document.querySelectorAll('[data-scroll-section]')) {
    height += section.clientHeight;
    if (height > position) return section.id;
  }
}

const updateNavLinks = () => {
  const activeSection = getActiveSection();
  for (let navLink of document.querySelectorAll('nav > a')) {
    if (navLink.id === `${activeSection}Nav`) {
      navLink.classList.add('bg-gray-800');
    } else {
      if (navLink.classList.contains('bg-gray-800')) navLink.classList.remove('bg-gray-800');
    }
  }
}

const Sidebar = () => {
  useEffect(() => {
    const timerId = setInterval(updateNavLinks, 66);
    return () => clearInterval(timerId);
  }, []);

  return (
    <nav className="fixed top-0 left-0 flex flex-col justify-center w-64 h-screen text-center text-gray-100 bg-gray-900">
      <StaticImage className="mb-4 mx-auto rounded-full w-32 border-2 border-gray-400" src="../images/headshot.jpg" alt={content.name} />
      <h5 className="mb-2 text-xl font-bold ">{content.name}</h5>
      <h6 className="mb-12 text-gray-400">{content.status}</h6>
      <a href="#home" className="p-4 text-lg hover:text-white hover:bg-gray-700 transition-colors" id="homeNav">Home</a>
      <a href="#about" className="p-4 text-lg hover:text-white hover:bg-gray-700 transition-colors" id="aboutNav">About Me</a>
      <a href="#skills" className="p-4 text-lg hover:text-white hover:bg-gray-700 transition-colors" id="skillsNav">Skills</a>
      <a href="#projects" className="p-4 text-lg hover:text-white hover:bg-gray-700 transition-colors" id="projectsNav">Projects</a>
      <a href="#contact" className="p-4 text-lg text-green-600 hover:text-green-400 hover:bg-gray-700 transition-colors" id="contactNav">Contact</a>
    </nav>
  );
};

export default Sidebar;
