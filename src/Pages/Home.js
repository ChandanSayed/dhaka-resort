import Booking from '../Components/Booking';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import SpecialOffers from '../Components/SpecialOffers';
import Packages from '../Components/Packages';
import Testimonial from '../Components/Testimonial';
import WhyUs from '../Components/WhyUs';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Booking />
      <WhyUs />
      <Packages />
      <Testimonial />
      <SpecialOffers />
      <Footer />
    </>
  );
};

export default Home;
