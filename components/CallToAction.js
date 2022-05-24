import React from 'react';

const CallToAction = () => {
  return (
    <aside className='bg-zinc-800' data-scroll-section>
      <div className='mx-auto max-w-screen-xl py-20 px-8 text-center md:flex md:items-center md:justify-between md:text-left'>
        <div className='mb-10 md:mb-0'>
          <h2 className='mb-4 text-4xl font-bold text-zinc-100'>
            {"Let's work together!"}
          </h2>
          <p className='text-sm text-zinc-400'>
            I am available for full-time work and freelance projects. Hire me
            and get your project done.
          </p>
        </div>
        <a
          href='#contact'
          className='rounded-full bg-green-600 py-3 px-12 text-zinc-100 md:shrink-0'
        >
          Hire me
        </a>
      </div>
    </aside>
  );
};

export default CallToAction;
