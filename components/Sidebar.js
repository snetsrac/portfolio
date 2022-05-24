import React, { useEffect } from 'react';
import Image from 'next/image';

import content from '../content';

const getActiveSection = () => {
  const position = window.scrollY + document.documentElement.clientHeight * 0.5;
  let height = 0;

  for (let section of document.querySelectorAll('[data-scroll-section]')) {
    height += section.clientHeight;
    if (height > position) return section.id;
  }
};

const updateNavLinks = () => {
  const activeSection = getActiveSection();
  for (let navLink of document.querySelectorAll('nav > a')) {
    if (navLink.id === `${activeSection}Nav`) {
      navLink.classList.add('bg-zinc-800');
    } else {
      if (navLink.classList.contains('bg-zinc-800'))
        navLink.classList.remove('bg-zinc-800');
    }
  }
};

const Sidebar = () => {
  useEffect(() => {
    const timerId = setInterval(updateNavLinks, 66);
    return () => clearInterval(timerId);
  }, []);

  return (
    <nav className='fixed top-0 left-0 hidden h-screen w-64 flex-col justify-center bg-zinc-900 text-center text-zinc-100 lg:flex'>
      <div className='mb-4 flex justify-center'>
        <div className='max-h-32 overflow-hidden rounded-full border-2 border-zinc-400'>
          <Image
            src='/headshot.jpg'
            alt={content.name}
            width={128}
            height={128}
          />
        </div>
      </div>
      <h5 className='mb-2 text-xl font-bold '>{content.name}</h5>
      <h6 className='mb-12 text-zinc-400'>{content.status}</h6>
      <a
        href='#home'
        className='p-4 text-lg transition-colors hover:bg-zinc-700 hover:text-white'
        id='homeNav'
      >
        Home
      </a>
      <a
        href='#about'
        className='p-4 text-lg transition-colors hover:bg-zinc-700 hover:text-white'
        id='aboutNav'
      >
        About Me
      </a>
      <a
        href='#skills'
        className='p-4 text-lg transition-colors hover:bg-zinc-700 hover:text-white'
        id='skillsNav'
      >
        Skills
      </a>
      <a
        href='#projects'
        className='p-4 text-lg transition-colors hover:bg-zinc-700 hover:text-white'
        id='projectsNav'
      >
        Projects
      </a>
      <a
        href='#contact'
        className='p-4 text-lg text-green-600 transition-colors hover:bg-zinc-700 hover:text-green-400'
        id='contactNav'
      >
        Contact
      </a>
    </nav>
  );
};

export default Sidebar;
