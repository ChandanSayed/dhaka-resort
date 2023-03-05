const HeroSection = () => {
  return (
    <section className="hero-section relative pt-48 pb-32 md:pt-80 md:pb-60" style={{ backgroundImage: 'url(./images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button className="relative z-10 btn font-bold text-sm md:text-xl uppercase block my-6 md:mt-40 py-4 px-8 border bg-white text-primary-color cursor-pointer border-primary-color hover:border-gray-50 rounded-[50px] text-center mx-auto  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">View All Packages</button>
    </section>
  );
};

export default HeroSection;
