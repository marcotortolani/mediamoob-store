import LabelHeaderPage from '../components/LabelHeaderPage';
import { portalsTest } from './../contentData.json';
import { sortArrayByDate } from '../utils/functions';
import FlagBadge from '../components/FlagBadge';

export default function PortalesTest() {
  const portalsTestSorted = sortArrayByDate(portalsTest);

  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full max-w-screen-lg  h-fit font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Portales Test' />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul className=' w-full h-fit grid place-items-center grid-cols-3 md:grid-cols-4  gap-2 sm:gap-3 md:gap-4'>
          {portalsTestSorted.map((el, i) => (
            <li
              key={i}
              className={`col-span-1 group hover:scale-110 relative w-full aspect-[5/7] overflow-hidden hover:overflow-visible transition-transform ease-in-out duration-150   `}
            >
              <a
                className=' w-full h-full pb-1 flex flex-col items-start gap-0 md:gap-1'
                href={el.link}
                target='_blank'
              >
                <div className='relative w-full h-full flex justify-center  overflow-hidden group-hover:shadow-lg group-hover:shadow-gray-600 transition-all ease-in-out duration-300 rounded-xl'>
                  <img
                    className=' w-full h-full object-cover rounded-xl'
                    src={el.coverImageLogo}
                    alt={`${el.name} cover and logo`}
                  />
                </div>
                <FlagBadge lang={el.lang} />

                <span className='  font-poppinsLight text-[0.6rem] md:text-sm lg:text-base  line-clamp-1'>
                  {el.name}
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
