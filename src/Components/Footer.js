import { Link } from 'react-router-dom';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import NewsLetter from './NewsLetter';

const Footer = () => {
  const exploreLinks = [
    { name: 'About Us', link: '/' },
    { name: 'Eco Park', link: '/' },
    { name: 'Event', link: '/' },
    { name: 'Packages', link: '/' },
  ];
  const resourcesLinks = [
    { name: "FAQ's", link: '/' },
    { name: 'Terms & Conditions', link: '/' },
    { name: 'Privacy Policy', link: '/' },
    { name: 'Contact Us', link: '/' },
  ];
  return (
    <footer className="footer  bg-primary-color pt-16 pb-8">
      <div className="lg:flex container mx-auto px-[2.5%]">
        <div className="lg:w-1/4">
          <Link to="/" className="flex items-center mb-4 ml-8">
            <img src="./images/dhaka-resort-logo.png" className="mr-3 h-16" alt="Dhaka Resort Logo" />
          </Link>
          <div className="flex">
            <MdLocationOn className="text-white mt-[6px]" />{' '}
            <p className="text-white ml-2">
              Bandhabari, Kaliakair,Gazipur <br />
              1750 Gazipur, Dhaka Division, <br />
              Bangladesh
            </p>
          </div>
          <div className="flex mt-2">
            <MdEmail className="text-white mt-[5px]" />{' '}
            <a href="mailto:dhakadreamlandpark@gmail.com" className="text-white ml-2">
              dhakadreamlandpark@gmail.com
            </a>
          </div>
          <div className="flex mt-2">
            <MdPhone className="text-white mt-[5px]" />{' '}
            <a href="tel:+8801762-554444" className="text-white ml-2">
              +8801762-554444
            </a>
          </div>
        </div>
        <div className="lg:w-1/4 lg:pl-6">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8">Explore</h5>
          <ul>
            {exploreLinks.map((link, i) => {
              return (
                <li className="text-white mt-4" key={i}>
                  <Link className="hover:text-red-600" to={link.link}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/4">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8">Resources</h5>
          <ul>
            {resourcesLinks.map((link, i) => {
              return (
                <li className="text-white mt-4" key={i}>
                  <Link className="hover:text-red-600" to={link.link}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/4">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8 capitalize">Don't miss a thing</h5>
          <p className="text-white">Get updates to special deals and exclusive offers. Sign up to our newsletter!</p>
          <NewsLetter />
        </div>
      </div>
      <hr className="container mx-auto mt-6" />
      <div className="copyright container mx-auto mt-2">
        <p className="text-white text-center">
          Copyright {new Date().getFullYear()} <strong>Dhaka Resort</strong>. All rights reserved!{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
