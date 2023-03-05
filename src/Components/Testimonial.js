import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay } from 'swiper';
const Testimonial = () => {
  const testimonial = [
    { username: 'Jane Smith', text: 'The Tours in this website are great. I had been really enjoy with my family! The team is very professional! And taking care of the customers! Will sure recommend this to my friends to join this company!', img: 'smith.png', position: 'CEO of LLC' },
    { username: 'Tom Williams', text: 'The Tours in this website are great. I had been really enjoy with my family! The team is very professional! And taking care of the customers! Will sure recommend this to my friends to join this company!', img: 'tom.png', position: 'Manager' },
    { username: 'Jane Smith', text: 'The Tours in this website are great. I had been really enjoy with my family! The team is very professional! And taking care of the customers! Will sure recommend this to my friends to join this company!', img: 'smith.png', position: 'CEO of LLC' },
    { username: 'Tom Williams', text: 'The Tours in this website are great. I had been really enjoy with my family! The team is very professional! And taking care of the customers! Will sure recommend this to my friends to join this company!', img: 'tom.png', position: 'Manager' },
    { username: 'Jane Smith', text: 'The Tours in this website are great. I had been really enjoy with my family! The team is very professional! And taking care of the customers! Will sure recommend this to my friends to join this company!', img: 'smith.png', position: 'CEO of LLC' },
  ];
  const breakpoints = {
    // when window width is >= 640px
    640: {
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      spaceBetween: 40,
    },
    // when window width is >= 1024px
    1024: {
      spaceBetween: 50,
    },
  };
  return (
    <section className="py-32">
      <Swiper
        className="swiper-wrapper"
        centeredSlides={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={2}
        navigation={true}
        loop={true}
        modules={[Autoplay]}
        breakpoints={breakpoints}
      >
        {testimonial.map((slide, i) => {
          return (
            <SwiperSlide className="sweeper-slide" key={i}>
              <div className="swiper-slide-container">
                <div className="py-10">
                  <div className="testimonial-box px-8 md:px-14 py-4 md:py-10">
                    <p className="text-xs md:text-xl text-justify">{slide.text}</p>
                  </div>
                  <div className="flex items-center relative left-[-20px] top-[-10px]">
                    <div className="user-logo">
                      <img src={`./images/${slide.img}`} alt="User Logo" className="rounded-[50px] h-[40px]" />
                    </div>
                    <div className="user-details ml-2">
                      <h3 className="username mt-3 text-sm font-bold text-primary-color">{slide.username}</h3>
                      <p className="text-xs">{slide.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
