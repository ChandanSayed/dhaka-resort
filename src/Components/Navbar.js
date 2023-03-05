import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TopBar from './TopBar';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Packages', link: '/packages' },
    { name: 'Eco Park', link: '/eco-park' },
    { name: 'Cottage', link: '/cottage' },
    { name: 'Our Resort', link: '/our-resort' },
    { name: 'Event', link: '/event' },
    { name: 'Contact', link: '/contact' },
  ];
  console.log(showNav);
  return (
    <section className="nav bg-primary-color">
      <TopBar />
      <nav className="px-2 border-gray-200  py-3">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src="./images/dhaka-resort-logo.png" className="mr-3 h-16" alt="Dhaka Resort Logo" />
          </NavLink>
          <button onClick={() => setShowNav((prev) => !prev)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={'w-full lg:block lg:w-auto transition duration-300 ease-in-out' + (showNav ? ' block' : ' hidden')} id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm md:font-medium">
              {links.map((link, i) => {
                return (
                  <li key={i}>
                    <NavLink className="hover:text-red-600 active:text-red-600 text-gray-50 uppercase" to={link.link}>
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
