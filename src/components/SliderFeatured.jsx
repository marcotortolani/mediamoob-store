import { useState, useRef } from 'preact/hooks';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import PaginationBullets from './PaginationBullets';

SwiperCore.use([Pagination]);

export default function SliderFeatured({
  slides,
  slidesPerView,
  delayPerView,
  spaceBetweenSlides,
  colorBullets,
  sizeBullets,
}) {
  const [indexPag, setIndexPag] = useState(0);
  const sliderRef = useRef(0);

  const qtyBullets = Object.keys(slides).length - slidesPerView + 1;

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className);
      return null;
    },
  };

  return (
    <section className=' z-0 relative top-0  w-full h-full p-2 pb-0 flex flex-col items-center justify-center'>
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        spaceBetween={spaceBetweenSlides}
        autoplay={{
          delay: delayPerView,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={pagination}
        modules={[Autoplay, Navigation]}
        navigation={false}
        className='mySwiper w-full sm:max-w-[500px] lg:max-w-[700px]  h-full px-0 overflow-hidden  flex flex-col items-center justify-center gap-2 '
      >
        {slides?.map((slide, index) => (
          <SwiperSlide
            className={` w-full min-w-[160px]  h-auto aspect-[3/2] lg:aspect-[16/9] relative flex flex-col items-center justify-center `}
            key={index}
          >
            <div className=' w-full h-full  flex flex-col items-center justify-center'>
              <div className='relative w-full h-full rounded-xl'>
                <img
                  className=' w-full h-full object-cover rounded-[inherit]'
                  src={
                    slide.coverImageLarge
                      ? slide.coverImageLarge
                      : slide.coverImageLogo
                  }
                  alt={`${slide.name} Cover image`}
                />
                <div className=' absolute top-0 z-30 w-full h-full bg-black bg-opacity-40 content-normal rounded-[inherit]'>
                  <div className='z-50 absolute bottom-0 left-0 pb-6 pl-4 pr-2 w-3/5  flex flex-col items-start gap-2 rounded-bl-[inherit]'>
                    <span className=' px-2 py-1 bg-moobMint text-[0.6rem] text-white'>
                      Lo más nuevo
                    </span>
                    <h3 className='  font-poppinsBold uppercase text-xl text-white leading-5'>
                      {slide.name}
                    </h3>
                    <div className=' w-full flex justify-end'>
                      <a
                        className=' px-2 py-1 bg-moobSky text-xs text-white uppercase rounded-full'
                        href={slide.link}
                        target='_blank'
                      >
                        Conocelo
                      </a>
                    </div>
                  </div>
                  <div className=' z-50 absolute right-0 overflow-hidden w-2/5 mb-4 pl-0 h-full rounded-br-[inherit]'>
                    <img
                      className=' pt-16  w-[90%]'
                      src={slide.mockup}
                      alt={`${slide.name} Mockup image`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className=' z-50 relative bottom-2 lg:flex'>
          <PaginationBullets
            color={colorBullets}
            size={sizeBullets}
            qtyBullets={qtyBullets}
            index={indexPag}
          />
        </div>
      </Swiper>
    </section>
  );
}
