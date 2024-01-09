import { useNavigate } from 'react-router-dom';
export default function SliderPortales({ slides }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/portales-test');
  }

  return (
    <section className=' z-30 relative top-0  w-screen h-full p-2 pt-0 flex flex-col items-start justify-center'>
      <h3 className=' uppercase text-sm font-poppinsRegular'>Portales Test</h3>
      <div className='w-full overflow-x-scroll h-fit  content-normal'>
        <ul className=' w-fit h-full flex items-center justify-center gap-2'>
          {slides.map((slide, i) => (
            <li
              key={i}
              onClick={() => {
                setIndexPag(i);
              }}
              className=' w-[40vw] aspect-[3/4] h-full  rounded-xl '
            >
              <a
                className='w-full h-full rounded-[inherit]'
                href={slide.link}
                target='_blank'
              >
                <img
                  className=' w-full h-full object-cover rounded-[inherit]'
                  src={slide.coverImageLogo}
                  alt=''
                />
                <span className=' font-poppinsLight text-xs leading-3'>
                  {slide.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className=' px-2 py-1 bg-moobSky text-xs text-white lowercase rounded-full'
        onClick={handleClick}
      >
        Ver todos
      </button>
    </section>
  );
}
