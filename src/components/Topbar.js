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
      <div className={`${isMenuExpanded ? 'h-80' : 'h-0'} absolute top-16 right-3 overflow-y-hidden transition-height duration-300`} ref={menuRef}>
        <div className="w-48 flex flex-col bg-gray-900" id="navMenu">
          <a href="#home" className="p-4 text-gray-300 hover:text-gray-50 hover:bg-gray-700">Home</a>
          <a href="#about" className="p-4 text-gray-300 hover:text-gray-50 hover:bg-gray-700">About Me</a>
          <a href="#skills" className="p-4 text-gray-300 hover:text-gray-50 hover:bg-gray-700">Skills</a>
          <a href="#projects" className="p-4 text-gray-300 hover:text-gray-50 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="p-4 text-green-600 hover:text-green-400 hover:bg-gray-700">Contact</a>
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="h-16 bg-gray-900">
        <button className="float-right m-3 rounded p-2 w-20 text-gray-300 bg-gray-700" onClick={onMenuToggle}>Menu</button>
      </div>
      {renderMenu()}
    </nav>
  );
};

export default Topbar;