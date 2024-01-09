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

  // function handleClick() {}

  return (
    <section className=' z-30 relative top-0  w-screen h-full lg:h-screen lg:max-h-[700px] pb-0 lg:pb-0 flex flex-col items-center justify-center'>
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
        className='mySwiper w-full h-full px-0 overflow-hidden  flex flex-col items-center justify-center gap-0 '
      >
        {slides?.map((slide, index) => (
          <SwiperSlide
            className={` w-full min-w-[160px] h-full relative flex flex-col items-center justify-center `}
            key={index}
          >
            <div className=' w-full h-fit p-2  flex flex-col items-center justify-center'>
              <div className='relative w-full h-full rounded-xl'>
                <img
                  className=' rounded-[inherit]'
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
                        // onClick={() => handleClick(slide.link)}
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
