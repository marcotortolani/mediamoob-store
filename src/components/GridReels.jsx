import { useNavigate } from 'react-router-dom';
import { VideoIcon, JoystickIcon } from '../utils/svgIcons';

export default function GridReels({ gridElements }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/reels');
  }

  return (
    <section className=' z-30 relative top-0 w-screen h-full overflow-hidden bg-moobSky bg-opacity-70 mt-2 p-4 flex items-center justify-center'>
      <div className='w-full flex flex-col items-start justify-center gap-2  '>
        <h3 className=' uppercase text-sm font-poppinsRegular'>
          Reels - Videos
        </h3>
        <div className='w-full max-w-fit h-fit content-normal'>
          <ul className=' w-fit h-full grid grid-cols-3 gap-2 md:gap-4'>
            {gridElements.map((el, i) => (
              <li
                key={i}
                onClick={() => {
                  setIndexPag(i);
                }}
                className={` col-span-1 relative max-w-[160px] aspect-[5/7] overflow-hidden  `}
              >
                <a
                  className=' w-full h-full pb-1 flex flex-col items-start gap-0'
                  href={el.link}
                  target='_blank'
                >
                  <div className='relative w-full h-full flex justify-center  overflow-hidden bg-gray-400 rounded-xl'>
                    <img
                      className=' w-full h-full object-cover rounded-xl'
                      src={el.coverImageLogo}
                      alt={`${el.name} cover and logo`}
                    />
                    <div className='z-10 absolute top-0 w-full h-full bg-black bg-opacity-50 content-normal'/>
                        
                    
                    <div className=' z-20 absolute top-0 w-1/3 h-full flex items-center justify-center '>
                        <VideoIcon />
                        <JoystickIcon />
                    </div>
                  </div>

                  <span className='  font-poppinsLight text-[0.6rem]  line-clamp-1'>
                    {el.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <button
            className=' px-2 py-1 bg-black text-xs text-white lowercase rounded-full'
            onClick={handleClick}
          >
            Ver todos
          </button>
        </div>
      </div>
    </section>
  );
}
