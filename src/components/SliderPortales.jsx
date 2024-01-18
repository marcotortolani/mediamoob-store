import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'preact/hooks';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ButtonSeeMore from './ButtonSeeMore';

export default function SliderPortales({ slides, spaceBetweenSlides = 10 }) {
  const navigate = useNavigate();
  const sliderRef = useRef(0);
  const [slidesPerView, setSlidesPerView] = useState(3.2);
  const [viewPortX, setViewPortX] = useState(window.visualViewport.width);

  const adjustViewportWidth = () => {
    setViewPortX(window.visualViewport.width);
  };

  useEffect(() => {
    window.addEventListener('resize', adjustViewportWidth);
    return () => {
      window.removeEventListener('resize', adjustViewportWidth);
    };
  }, []);

  useEffect(() => {
    if (viewPortX <= 800) setSlidesPerView(3.2);
    if (viewPortX > 800) setSlidesPerView(5.2);
  }, [viewPortX]);

  function handleClick() {
    navigate('/portales-test');
  }

  return (
    <section className=' z-30 relative top-0 w-screen h-fit lg:px-2 pt-4 md:pt-6 pb-2 md:pb-4 flex items-center justify-center'>
      <div className='w-full max-w-fit flex flex-col items-start justify-center gap-1 '>
        <h3 className=' pl-2 uppercase text-sm font-poppinsRegular'>
          Portales Test
        </h3>
        <div className='w-full max-w-[1100px] overflow-x-scroll no-scrollbar h-fit content-normal '>
          <Swiper
            ref={sliderRef}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            spaceBetween={spaceBetweenSlides}
            modules={[Navigation]}
            navigation={false}
            className='mySwiper w-full h-full  px-2 overflow-hidden  flex flex-col items-center justify-center gap-2 '
          >
            {slides.map((slide, i) => (
              <SwiperSlide
                key={i}
                className={`
                  w-[40vw] aspect-[3/4] pb-0 overflow-y-hidden `}
              >
                <a
                  className='w-full h-full flex flex-col items-start gap-1'
                  href={slide.link}
                  target='_blank'
                >
                  <img
                    className=' w-full h-full object-cover rounded-xl select-none pointer-events-none'
                    src={slide.coverImageLogo}
                    alt={`${slide.name} cover and logo`}
                  />
                  <span className=' font-poppinsLight text-xs leading-3 line-clamp-1'>
                    {slide.name}
                  </span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=' pl-2'>
          <ButtonSeeMore handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
