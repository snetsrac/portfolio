import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

export default function ProjectModal({ isOpen, setIsOpen, project }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-50 mt-16'>
          <div className='flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative max-h-full transform overflow-y-auto rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-10'>
                <div className='text-center'>
                  <Dialog.Title
                    as='h3'
                    className='text-4xl font-bold leading-6 text-gray-900'
                  >
                    {project?.title}
                  </Dialog.Title>
                  <div className='mt-5 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:gap-10'>
                    <div className='relative min-h-48 w-full sm:w-1/2'>
                      <Image
                        src={project?.thumbnailUrl}
                        alt={project?.title}
                        layout='fill'
                        objectFit='scale-down'
                      />
                    </div>
                    <p className='whitespace-pre-line text-left text-sm text-gray-500 sm:w-1/2'>
                      {project?.description}
                    </p>
                  </div>
                </div>
                <p className='mt-5 text-right text-sm italic text-gray-500 sm:mt-10'>
                  Note: This project runs on a Heroku Eco dyno, and may take
                  some time to respond initially.
                </p>
                <div className='mt-2 sm:flex sm:flex-row-reverse sm:gap-3'>
                  <a
                    href={project?.url}
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-bold tracking-wider text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
                  >
                    View demo
                  </a>
                  <a
                    href={project?.githubUrl}
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold tracking-wider text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:text-sm'
                  >
                    View source code
                  </a>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:text-sm'
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
