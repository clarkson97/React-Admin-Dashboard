import React, { useState } from 'react';
import './navbar.css';
import { BsLightbulbFill, BsLightbulbOffFill } from 'react-icons/bs';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const body = document.querySelector('body');
  const toggler = document.querySelector('.toggler');

  const scrollHandler = () => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      const link = document.querySelectorAll('.link');
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-colored');
        link.forEach((el) => {
          el.classList.add('link-colored');
        });
        toggler.classList.add('active');
      } else {
        navbar.classList.remove('navbar-colored');
        link.forEach((el) => {
          el.classList.remove('link-colored');
        });
        toggler.classList.remove('active');
      }
    });
  };

  const toggleHandler = () => {
    toggler.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      toggler.classList.toggle('active');
    });

    setIsClicked((el) => !el);
  };

  // toggleHandler();

  scrollHandler();
  return (
    <div className="navbar">
      <ul className="navlink__wrapper">
        <li className="link">Home</li>
        <li className="link">Service</li>
        <li className="link">Portfolio</li>
        <li className="link">Contact</li>
        <li className="link">About</li>
      </ul>
      <div className="toggler ">
        <BsLightbulbFill onClick={toggleHandler} />
      </div>
    </div>
  );
};

export default Navbar;
