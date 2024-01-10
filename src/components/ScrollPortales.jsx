import { useNavigate } from 'react-router-dom';
export default function SliderPortales({ slides }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/portales-test');
  }

  return (
    <section className=' z-30 relative top-0 w-screen h-full pb-2 pt-0 flex items-center justify-center'>
      <div className='w-full max-w-fit flex flex-col items-start justify-center  '>
        <h3 className=' pl-2 uppercase text-sm font-poppinsRegular'>
          Portales Test
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
                } w-[40vw] max-w-[160px] aspect-[3/4] h-full  rounded-xl `}
              >
                <a
                  className='w-full h-full rounded-[inherit]'
                  href={slide.link}
                  target='_blank'
                >
                  <img
                    className=' w-full h-full object-cover rounded-[inherit]'
                    src={slide.coverImageLogo}
                    alt={`${slide.name} cover and logo`}
                  />
                  <span className=' font-poppinsLight text-xs leading-3 line-clamp-1'>
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
