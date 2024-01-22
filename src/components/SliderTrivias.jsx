import { useNavigate } from 'react-router-dom';
import ButtonSeeMore from './ButtonSeeMore';
import FlagBadge from './FlagBadge';
export default function SliderTrivias({ slides }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/trivias');
  }

  return (
    <section className=' z-30 relative top-0 w-screen max-w-screen-lg h-full md:px-2 lg:px-4 flex items-center justify-center'>
      <div className='w-full flex flex-col items-start justify-center gap-1 md:gap-2 lg:gap-3 '>
        <h3 className=' pl-2 uppercase text-sm md:text-base lg:text-lg font-poppinsRegular'>
          Trivias. Contesta, suma y gana!
        </h3>
        <div className='w-full overflow-x-scroll no-scrollbar h-fit content-normal'>
          <ul className=' w-fit md:w-full h-full pl-2 pr-2 flex items-center justify-center gap-2 md:gap-4'>
            {slides.map((slide, i) => (
              <li
                key={i}
                className='relative w-[40vw] max-w-[160px] md:max-w-full aspect-[2/3] pb-2 overflow-y-hidden'
              >
                <a
                  className=' w-full h-full pb-1 flex flex-col items-start gap-0'
                  href={slide.link}
                  target='_blank'
                >
                  <div
                    className='relative w-full h-full flex justify-center  overflow-y-hidden  rounded-xl'
                    style={{ backgroundColor: `${slide.bgColor}` }}
                  >
                    <div className=' w-full px-1 flex justify-center  absolute top-4'>
                      <img
                        className='  h-auto object-cover'
                        src={slide.mockup}
                        alt={`${slide.name} cover and logo`}
                      />
                    </div>
                    <FlagBadge lang={slide.lang} />
                  </div>

                  <span className='  font-poppinsLight text-xs md:text-sm lg:text-base  line-clamp-1'>
                    {slide.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=' pl-2'>
          <ButtonSeeMore handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
