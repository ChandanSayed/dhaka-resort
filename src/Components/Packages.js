import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
const Testimonial = () => {
  const packages = [
    { package: 'Swimming Package', img: 'swimming-pool.jpg' },
    { package: 'Villa Package: Deluxe Room', img: 'two-house.jpg' },
    { package: 'Swimming Package', img: 'poolview.jpg' },
    { package: 'Swimming Package', img: 'swimming-pool.jpg' },
    { package: 'Villa Package: Deluxe Room', img: 'two-house.jpg' },
  ];

  return (
    <section className="packages py-20 relative" style={{ backgroundImage: 'url(./images/two-house.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto relative z-10">
        <h2 className="uppercase text-3xl md:text-4xl text-primary-color mb-[-24px] relative z-10">Find Our Popular Packages</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="swiper-wrapper relative z-10"
        >
          {packages.map((slide, i) => {
            return (
              <SwiperSlide className="py-6" key={i}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg relative z-10">
                  <img className="w-full" src={`./images/${slide.img}`} alt="Sunset in the mountains" />
                  <div className="px-6 py-4 bg-white">
                    <div className="font-bold text-xl mb-2 text-center">{slide.package}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="relative z-10 btn block py-2 px-6 border bg-primary-color text-white cursor-pointer border-gray-300 hover:border-primary-color rounded-[50px] text-center mx-auto my-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">View All Packages</button>
      </div>
    </section>
  );
};

export default Testimonial;
