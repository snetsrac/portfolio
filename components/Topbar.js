import React, { useState, useEffect, useRef } from 'react';

const Topbar = () => {
  const [isMenuExpanded, setMenuExpanded] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (!window) return;

    const closeMenuOnOutsideClick = (event) => {
      if (isMenuExpanded && !event.composedPath().includes(menuRef.current)) {
        setMenuExpanded(false);
      }
    };

    window.addEventListener('click', closeMenuOnOutsideClick);
    return () => window.removeEventListener('click', closeMenuOnOutsideClick);
  }, [isMenuExpanded]);

  const onMenuToggle = (event) => {
    event.stopPropagation();
    setMenuExpanded(!isMenuExpanded);
  };

  const renderMenu = () => {
    return (
      <div
        className={`${
          isMenuExpanded ? 'h-80' : 'h-0'
        } absolute top-16 right-3 overflow-y-hidden transition-height duration-300`}
        ref={menuRef}
      >
        <div className='flex w-48 flex-col bg-zinc-900' id='navMenu'>
          <a
            href='#home'
            className='p-4 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50'
          >
            Home
          </a>
          <a
            href='#about'
            className='p-4 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50'
          >
            About Me
          </a>
          <a
            href='#projects'
            className='p-4 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50'
          >
            Projects
          </a>
          <a
            href='#skills'
            className='p-4 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50'
          >
            Skills
          </a>
          <a
            href='#contact'
            className='p-4 text-green-600 hover:bg-zinc-700 hover:text-green-400'
          >
            Contact
          </a>
        </div>
      </div>
    );
  };

  return (
    <nav className='fixed top-0 left-0 z-50 w-full lg:hidden'>
      <div className='h-16 bg-zinc-900'>
        <button
          className='float-right m-3 w-20 rounded bg-zinc-700 p-2 text-zinc-300'
          onClick={onMenuToggle}
        >
          Menu
        </button>
      </div>
      {renderMenu()}
    </nav>
  );
};

export default Topbar;
