import { reels } from './../contentData.json';
import LabelHeaderPage from '../components/LabelHeaderPage';
import { VideoIcon } from '../utils/svgIcons';
import FlagBadge from '../components/FlagBadge';

export default function Reels() {
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full max-w-screen-lg h-fit font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Video & Reels' />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul className=' w-full h-fit p-0  grid place-items-center  grid-cols-2 md:grid-cols-3  gap-3 sm:gap-4 md:gap-5'>
          {reels.map((el, i) => (
            <li
              key={i}
              className={`col-span-1 relative w-full aspect-[4/3] overflow-hidden group hover:scale-110 hover:overflow-visible transition-transform ease-in-out duration-150  `}
            >
              <a
                className=' w-full h-full pb-1 flex flex-col items-start gap-0'
                href={el.link}
                target='_blank'
              >
                <div className='relative w-full h-full flex justify-center overflow-hidden shadow-md shadow-gray-500 group-hover:shadow-lg group-hover:shadow-gray-400 transition-all ease-in-out duration-300 '>
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
      <div className='w-full h-16 content-normal' />
    </main>
  );
}
