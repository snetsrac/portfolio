import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('unsubmitted');

  const onFormSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_b8cip7i',
        'template_ood2hz2',
        event.target,
        'user_vdDRIYsr86PXghzw3N2qE'
      )
      .then(() => {
        setStatus('success');
      })
      .catch((error) => {
        setStatus('failure');
        console.error(error.text);
      });

    setStatus('submitted');
  };

  const renderFormStatus = () => {
    let indicator, text;

    switch (status) {
      case 'success':
        indicator = (
          <svg
            className='inline-block h-8 w-8'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#16A34A'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        );
        text = 'Success! Your message was sent.';
        break;
      case 'failure':
        indicator = (
          <svg
            className='inline-block h-8 w-8'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#DC2626'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
        );
        text = 'Oh no! There was a problem sending the message.';
        break;
      case 'submitted':
        indicator = (
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 align-middle ease-linear'
            style={{ borderTopColor: '#16A34A' }}
          ></div>
        );
        text = 'Sending...';
        break;
      case 'unsubmitted':
      default:
        return;
    }

    return (
      <div className='mt-8 block align-middle md:mt-0 md:ml-8 md:inline-block'>
        {indicator}
        <span className='relative top-0.5 ml-2'>{text}</span>
      </div>
    );
  };

  return (
    <section
      id='contact'
      className='-mt-16 pt-16 lg:mt-0 lg:pt-0'
      data-scroll-section
    >
      <div className='bg-zinc-100'>
        <div className='mx-auto max-w-screen-xl py-12 px-8'>
          <h2 className='mb-12 text-3xl font-extrabold'>Contact Me</h2>
          <form id='contactForm' onSubmit={onFormSubmit}>
            <fieldset disabled={status === 'unsubmitted' ? false : 'disabled'}>
              <input
                className='mb-8 w-full border-b border-zinc-300 p-2'
                type='text'
                name='from_name'
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className='mb-8 w-full border-b border-zinc-300 p-2'
                type='email'
                name='from_email'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='mb-8 w-full border-b border-zinc-300 p-2'
                type='text'
                name='subject'
                placeholder='Subject'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className='mb-8 min-h-16 w-full border-b border-zinc-300 p-2'
                name='message'
                placeholder='Message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className='rounded-full bg-green-600 py-3 px-6 text-white disabled:cursor-not-allowed disabled:bg-green-600/50'
                type='submit'
              >
                Send Message
              </button>
              {renderFormStatus()}
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
