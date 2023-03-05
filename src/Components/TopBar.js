import { Link } from 'react-router-dom';
import { MdPhone, MdEmail, MdFacebook } from 'react-icons/md';
import { FaInstagram, FaTwitter, FaLinkedin, FaUserAlt, FaLock } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar hidden lg:block shadow py-2">
      <div className="flex container mx-auto">
        <div className="w-1/2">
          <div className="flex">
            <div className="w-auto">
              <MdPhone className="text-white inline" />{' '}
              <a href="tel:+8801762-554444" className="text-white">
                +8801762-554444
              </a>
            </div>
            <div className="w-auto ml-2">
              <MdEmail className="text-white inline" />{' '}
              <a href="mailto:dhakadreamlandpark@gmail.com" className="text-white">
                dhakadreamlandpark@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="social-icons">
            <a href="/">
              <MdFacebook className="text-white inline mx-2" />
            </a>
            <a href="/">
              <FaInstagram className="text-white inline mx-2" />
            </a>
            <a href="/">
              <FaLinkedin className="text-white inline mx-2" />
            </a>{' '}
            <a href="/">
              <FaTwitter className="text-white inline mx-2" />
            </a>
          </div>
          <div className="flex ml-2">
            <Link className="rounded-[50px] bg-white border text-primary-color py-1 pb-2 px-3 text-sm mx-2 hover:border-primary-color" to="/">
              <FaLock className="text-primary-color inline mr-1" /> Login
            </Link>
            <Link className="rounded-[50px] bg-primary-color border text-white px-3 py-1 pb-2 text-sm mx-2 hover:border-primary-color" to="/">
              <FaUserAlt className="text-white inline mr-1 text-sm" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
