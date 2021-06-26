import React from 'react';

const CallToAction = () => {
  return (
    <aside className="bg-gray-800" data-scroll-section>
      <div className="mx-auto max-w-screen-xl py-20 px-8 text-center md:text-left md:flex md:justify-between md:items-center">
        <div className="mb-10 md:mb-0">
          <h2 className="mb-4 text-4xl font-bold text-gray-100">Let's work together!</h2>
          <p className="text-sm text-gray-400">I am available for full-time work and freelance projects. Hire me and get your project done.</p>
        </div>
        <a href="#contact" className="md:flex-shrink-0 py-3 px-12 rounded-full text-gray-100 bg-green-600">Hire me</a>
      </div>
    </aside>
  );
};

export default CallToAction;
