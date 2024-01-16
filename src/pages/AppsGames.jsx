import LabelHeaderPage from '../components/LabelHeaderPage';
import { appGames } from './../contentData.json';
import { sortArrayByDate } from '../utils/functions';

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function AppsGames() {
  const appsGamesSorted = sortArrayByDate(appGames);
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full md:w-[700px] h-fit overflow-y-hidden font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Games' lang={lang.es} />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul className=' w-fit h-full flex flex-col items-center justify-center gap-2'>
          {appsGamesSorted.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                setIndexPag(i);
              }}
              className={` w-full h-[15vh]  flex items-start gap-2 rounded-xl `}
            >
              <img
                className=' w-2/5 h-full aspect-[5/4] object-cover rounded-[inherit]'
                src={el.coverImageLogo}
                alt={`${el.name} cover and logo`}
              />
              <div className='relative w-full h-full  p-2 flex flex-col items-start gap-0'>
                <h4 className=' w-full pr-4 font-poppinsSemiBold text-sm leading-4'>
                  {el.name}
                </h4>
                <p className=' text-[0.6rem] leading-3 line-clamp-2'>
                  {el.shortDescription}
                </p>
                <a
                  className=' absolute bottom-2 left-2  px-4 py-1 bg-moobSky text-[0.6rem] text-white uppercase rounded-full'
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
