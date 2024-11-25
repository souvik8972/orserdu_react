import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const slides = [
  {
    image: 'https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/Slide1.png',
    alt: 'Hypothetical female patient with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer',
    caption: 'Hypothetical female patient with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer',
  },
  {
    image: 'https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/Slide3.png',
    alt: 'Hypothetical female patient with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer',
    caption: 'Hypothetical female patient with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer',
  },
  {
    image: 'https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/Slide2.png',
    alt: 'Hypothetical female patient with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer',
    caption: 'Hypothetical female patient with ESR1-mutated ER+/HER2- advanced or metastatic breast cancer',
  },
];

export default function ImageSwiper() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // Optional, if you want autoplay to continue after interaction
        }}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        loop
        modules={[Pagination, Autoplay, EffectFade]} // Add EffectFade here
        className="mySwiper"
      >
        {slides.map((val, index) => (
          <SwiperSlide key={index}>
            <img src={val.image} alt={val.alt} className='xl:h-[500px] object-cover w-full '  />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
