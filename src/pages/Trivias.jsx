import LabelHeaderPage from '../components/LabelHeaderPage';
import { trivias } from './../contentData.json';
import { sortArrayByDate } from '../utils/functions';

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function Trivias() {
  const triviasSorted = sortArrayByDate(trivias);
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full md:w-[700px] h-fit overflow-y-hidden font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Trivias' lang={lang.es} />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul className=' w-fit h-full grid place-items-center  grid-cols-3 md:grid-cols-4  gap-2 sm:gap-4 md:gap-5'>
          {triviasSorted.map((slide, i) => (
            <li
              key={i}
              className='col-span-1 relative w-full aspect-[5/8] overflow-hidden '
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
      <div className='w-full h-16 content-normal' />
    </main>
  );
}
