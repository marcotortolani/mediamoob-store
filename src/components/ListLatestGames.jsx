import { useNavigate } from 'react-router-dom';
import ButtonSeeMore from './ButtonSeeMore';
import FlagBadge from './FlagBadge';

export default function ListLatestGames({ listElements }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/apps-games');
  }

  return (
    <section className=' z-30 relative top-0 w-screen max-w-screen-lg h-full mt-2 px-2 flex flex-col items-start justify-center '>
      <div className=' w-full h-fit px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6 bg-gray-300 rounded-xl md:rounded-2xl'>
        <h3 className=' mb-2 uppercase text-sm md:text-base lg:text-lg font-poppinsRegular'>
          Media Moob App & Games
        </h3>
        <div className='w-full h-fit  content-normal'>
          <ul
            className=' w-full h-full flex flex-col items-center justify-center gap-2 
                      md:grid md:grid-flow-row md:grid-cols-2 md:gap-4'
          >
            {listElements.map((el, i) => (
              <li
                key={i}
                className={`relative w-full h-[15vh] md:h-[20vh] flex items-start gap-2 rounded-xl `}
              >
                <div className=' relative w-2/5 h-full bg-green-400 aspect-[5/4]  rounded-[inherit]'>
                  <img
                    className=' w-full h-full object-cover rounded-[inherit]'
                    src={el.coverImageLogo}
                    alt={`${el.name} cover and logo`}
                  />
                  <FlagBadge lang={el.lang} />
                </div>

                <div className=' relative w-full h-full  p-2 md:pr-3 flex flex-col items-start gap-0'>
                  <h4 className=' w-full pr-4 font-poppinsSemiBold text-sm sm:text-base lg:text-lg leading-4'>
                    {el.name}
                  </h4>
                  <p className=' text-[0.6rem] md:text-sm leading-3 md:leading-4 line-clamp-2'>
                    {el.shortDescription}
                  </p>
                  <a
                    className=' absolute bottom-2 left-2  px-4 py-1 bg-moobSky text-[0.6rem] md:text-sm lg:text-base text-white uppercase rounded-full'
                    href={el.link}
                    target='_blank'
                  >
                    Jugar
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-4 mb-2'>
          <ButtonSeeMore handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
