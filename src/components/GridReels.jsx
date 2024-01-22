import { useNavigate } from 'react-router-dom';
import { VideoIcon } from '../utils/svgIcons';
import ButtonSeeMore from './ButtonSeeMore';
import FlagBadge from './FlagBadge';

export default function GridReels({ gridElements }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/reels');
  }

  return (
    <section className=' z-30 relative top-0 w-screen max-w-screen-lg h-fit mb-16 p-4 md:p-5 lg:p-6 bg-gray-200 flex items-center justify-center rounded-xl md:rounded-2xl'>
      <div className='w-full h-fit overflow-x-hidden flex flex-col items-start justify-center gap-2 md:gap-3 lg:gap-4  '>
        <h3 className=' uppercase text-sm md:text-base lg:text-lg font-poppinsRegular'>
          Reels - Videos
        </h3>
        <div className='w-full h-fit flex items-center justify-center  content-normal'>
          <ul className=' w-full h-fit p-0  grid place-items-center  grid-cols-2 md:grid-cols-3  gap-3 sm:gap-4 md:gap-5'>
            {gridElements.map((el, i) => (
              <li
                key={i}
                className={`col-span-1 relative w-full aspect-[4/3] overflow-hidden   `}
              >
                <a
                  className=' w-full h-full pb-1 flex flex-col items-start gap-0'
                  href={el.link}
                  target='_blank'
                >
                  <div className='relative w-full h-full flex justify-center overflow-hidden '>
                    <img
                      className=' w-full h-full object-cover '
                      src={el.coverImageLogo}
                      alt={`${el.name} cover and logo`}
                    />
                    <div className=' z-20 absolute top-0 w-1/4 h-full flex items-center justify-center '>
                      <VideoIcon />
                    </div>
                    <FlagBadge lang={el.lang} />
                  </div>

                  <span className='  font-poppinsLight text-[0.6rem] md:text-sm lg:text-base  line-clamp-1'>
                    {el.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <ButtonSeeMore handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
