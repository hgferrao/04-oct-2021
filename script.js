'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
/////////////////////////////////////////
//Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
/////////////////////////////////////////
// Selecting elements
/* console.log(document.documentElement); //selecting entire html document
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //selects first element that matches header class
const allSections = document.querySelectorAll('.section'); // selects all section in html
console.log(allSections);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

///////////////////////////////////////////////////
//Creating and inserting elements
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cokkies for improved functionality and analytics';
message.innerHTML =
  'We use cokkies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it </button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//Delete element
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles
message.style.backgroundColor = '#333';
message.style.width = '120%';
console.log(message.style.backgroundColor); //prints the style applied to it only inline styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'yellow'); //changes the color of variable (--color-primary) in whole document

// Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo);
console.log(logo.src); //absolute url
console.log(logo.getAttribute('src')); //relative url
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'bank new logo'; // applyng new alt text to logo
//Non -standard
console.log(logo.designer); //undefined as this is not a standard property
logo.setAttribute('company', 'Bankist'); // setting new property and value
// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes // data attributes always starts with d
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('a', 'b');
logo.classList.remove('c', 'd');
logo.classList.toggle('c', 'j');
logo.classList.contains('a', 'f');
// Dont use
logo.className = 'henry'; //dont use to set this type class name as it overides all the existing classes and allows to put only one class on any element
*/

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', function (e) {
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);
//   // console.log(e.target.getBoundingClientRect());
//   // console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset);
//   // console.log(
//   //   'height/width viewport',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );
//   // Scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListner:Great ! you are reading the heading.');
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // remvoving event handler after some specified time
// //old way of adding event listner
// h1.onmouseenter = function (e) {
//   alert('onmouseenter:Great ! you are reading the heading.');
// };

/////////////////////////////
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (min, max + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //Stop propgation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log('link');
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   // console.log('link');
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });
