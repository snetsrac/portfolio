'use strict';

const collapse = document.getElementById('collapse');
const collapseToggle = document.getElementById('collapseToggle');
const navMenu = document.getElementById('navMenu');

const showCollapse = () => {
  collapse.classList.remove('hidden');
  setTimeout(() => {
    collapse.classList.remove('h-0');
    collapse.classList.add('h-80');
  }, 0);
};

const hideCollapse = () => {
  collapse.classList.remove('h-80');
  collapse.classList.add('h-0');
  setTimeout(() => {
    collapse.classList.add('hidden');
  }, 300);
}

const toggleCollapse = () => {
  collapse.classList.contains('h-0') ? showCollapse() : hideCollapse();
}

collapseToggle.addEventListener('click', toggleCollapse);
window.addEventListener('click', (event) => {
  if (!collapse.classList.contains('h-0') && !event.composedPath().includes('collapseToggle')) {
    hideCollapse();
  }
});

// const sections = document.querySelectorAll('main section');

// const getCenterSection = () => {
//   const center = window.scrollY + (document.documentElement.clientHeight * 0.5);
  
//   let height = 0;

//   for (let section of sections) {
//     height += section.clientHeight;
//     if (height > center) return section.id;
//   }

//   throw new Error(`Could not get center section. height: ${height}, center: ${center}`);
// }

// const updateNavLinks = () => {
//   const centerSection = getCenterSection();

//   console.log(centerSection);

//   window.requestAnimationFrame(updateNavLinks);
// }

// updateNavLinks();

// const intersectionCallback = (entries) => {
//   entries.forEach((entry) => {
//     const id = entry.target.id;
//     const navLink = document.getElementById(`${id}Nav`);

//     if (entry.isIntersecting) {
//       navLink.classList.add('bg-gray-800');
//     } else {
//       navLink.classList.remove('bg-gray-800');
//     }
//   });
//   console.log(entries);
// };

// const observer = new IntersectionObserver(intersectionCallback, {
//   root: null,
//   threshold: 0.5
// });

// document.querySelectorAll('main section').forEach((element, i) => {
//   observer.observe(element);
// });

emailjs.init('user_vdDRIYsr86PXghzw3N2qE');

const contactForm = document.getElementById('contactForm');
const contactFieldset = document.querySelector('#contactForm fieldset');
const contactStatus = document.getElementById('contactStatus');
const contactSpinner = document.getElementById('contactSpinner');
const contactSuccess = document.getElementById('contactSuccess');
const contactFailure = document.getElementById('contactFailure');
const contactStatusText = document.getElementById('contactStatusText');

const hideElement = (element) => {
  element.classList.remove('inline-block');
  element.classList.add('hidden');
};

const showElement = (element) => {
  element.classList.remove('hidden');
  element.classList.add('inline-block');
};

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  emailjs.sendForm('service_b8cip7i', 'template_ood2hz2', this)
    .then(() => {
      hideElement(contactSpinner);
      showElement(contactSuccess);
      contactStatusText.innerText = 'Success! Your message was sent.';
    }, (error) => {
      hideElement(contactSpinner);
      showElement(contactFailure);
      contactStatusText.innerText = 'Oh no! There was a problem sending the message.';
      console.log(error.text);
    });
    
    contactFieldset.setAttribute('disabled', 'disabled');
    showElement(contactStatus);
});
