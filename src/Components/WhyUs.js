import { MdCheckCircle } from 'react-icons/md';
const WhyUs = () => {
  const galleryImages = [
    { list: 'poolview.jpg', class: 'p-8' },
    { list: 'two-house.jpg', class: 'p-1' },
    { list: 'swimming-pool.jpg', class: 'p-6' },
    { list: 'family.jpg', class: 'p-1' },
  ];
  const whyUsList = [{ name: 'Different Types of Cottages.' }, { name: 'Family Picnic Zone.' }, { name: 'Swimming Pool.' }, { name: 'Shooting Zone.' }, { name: 'Kids Play Ground.' }, { name: 'Eco Park.' }];
  return (
    <section className="why-us py-20 pb-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-primary-color text-center mb-6 md:mb-12">Why Choose Dhaka Resort?</h2>
        <p className="text-center text-sm md:text-lg mb-8 text-gray-400">
          Dhaka resort is a place where modern amenities. <br />
          Maintain strong rapport with nature.
        </p>
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="flex flex-wrap">
              {galleryImages.map((list, i) => {
                return (
                  <div className={`w-1/2 ${list.class}`} key={i}>
                    <img key={i} src={`./images/${list.list}`} alt="Gallery" className="rounded" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <p className="text-justify text-sm md:text-lg mb-8 text-gray-400 capitalize">We offer organic foods produced in our own yard. We also feel honored to host your events like wedding, anniversary, birthday party and many more. For our corporate clients we are ready to shoulder the responsibility of arranging AGM, corporate day our, corporate picnic and so many.</p>
            <ul>
              {whyUsList.map((list, i) => {
                return (
                  <li className="flex items-center text-sm md:text-lg" key={i}>
                    <MdCheckCircle className="text-primary-color mr-2" /> {list.name}
                  </li>
                );
              })}
            </ul>
            <button className="relative z-10 btn font-bold text-sm md:text-xl uppercase block mt-8 py-4 px-8 border bg-primary-color text-white cursor-pointer border-primary-color hover:border-gray-50 rounded-[50px] text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">Discover Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
