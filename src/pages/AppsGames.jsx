import LabelHeaderPage from '../components/LabelHeaderPage';
import { appGames } from './../contentData.json';
import { sortArrayByDate } from '../utils/functions';
import FlagBadge from '../components/FlagBadge';

export default function AppsGames() {
  const appsGamesSorted = sortArrayByDate(appGames);
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full max-w-screen-lg h-fit overflow-y-hidden font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Games' />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul
          className=' w-full h-full flex flex-col items-center justify-center gap-2 
                      md:grid md:grid-flow-row md:grid-cols-2 md:gap-4'
        >
          {appsGamesSorted.map((el, i) => (
            <li
              key={i}
              className={` w-full h-[15vh] md:h-[20vh] flex items-start gap-2 rounded-xl `}
            >
              <div className=' relative w-2/5 h-full bg-green-400 aspect-[5/4]  rounded-[inherit]'>
                <img
                  className=' w-full h-full object-cover rounded-[inherit]'
                  src={el.coverImageLogo}
                  alt={`${el.name} cover and logo`}
                />
                <FlagBadge lang={el.lang} />
              </div>
              <div className='relative w-full h-full  p-2 md:pr-3 flex flex-col items-start gap-0'>
                <h4 className=' w-full pr-4 font-poppinsSemiBold text-sm sm:text-base lg:text-lg leading-4'>
                  {el.name}
                </h4>
                <p className=' text-[0.6rem] md:text-sm leading-3 md:leading-4 line-clamp-2'>
                  {el.shortDescription}
                </p>
                <a
                  className=' absolute bottom-2 left-2  px-4 py-1 bg-moobSky text-[0.6rem] md:text-sm lg:text-base text-white uppercase rounded-full 
                  hover:scale-105 hover:shadow-sm hover:shadow-gray-500 transition-transform duration-150 ease-in-out'
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
      <div className='w-full h-16 content-normal' />
    </main>
  );
}
