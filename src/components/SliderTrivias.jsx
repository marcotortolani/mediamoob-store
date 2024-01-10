import { useNavigate } from 'react-router-dom';
export default function SliderTrivias({ slides }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/trivias');
  }

  return (
    <section className=' z-30 relative top-0 w-screen h-full mt-6 pb-2 pt-0 flex items-center justify-center'>
      <div className='w-full max-w-fit flex flex-col items-start justify-center  '>
        <h3 className=' pl-2 uppercase text-sm font-poppinsRegular'>
          Trivias. Contesta, suma y gana!
        </h3>
        <div className='w-full max-w-fit overflow-x-scroll h-fit content-normal'>
          <ul className=' w-fit h-full flex items-center justify-center gap-2 md:gap-4'>
            {slides.map((slide, i) => (
              <li
                key={i}
                onClick={() => {
                  setIndexPag(i);
                }}
                className={` ${i === 0 ? 'px-0 pl-2 ' : 'px-0 pl-0'} ${
                  i === slides.length - 1 ? 'pr-2 ' : ''
                } relative w-[40vw] max-w-[160px] aspect-[2/3] pb-2 overflow-y-hidden  `}
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
                  </div>

                  <span className='  font-poppinsLight text-xs  line-clamp-1'>
                    {slide.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=' pl-2'>
          <button
            className=' px-2 py-1 bg-moobSky text-xs text-white lowercase rounded-full'
            onClick={handleClick}
          >
            Ver todos
          </button>
        </div>
      </div>
    </section>
  );
}
