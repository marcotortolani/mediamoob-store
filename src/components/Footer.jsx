import moobLogo from '/images/mediamoob-logo.webp';
import { rrssData } from '../utils/staticData';

export default function Footer() {
  return (
    <footer className=' w-full h-36 bg-black flex items-center justify-around'>
      <div className=' hover:scale-110 transition-all'>
        <a
          className='w-full text-center font-poppinsRegular text-white text-sm md:text-lg '
          href='https://memoob.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://memoob.com
        </a>
      </div>
      <div className=' w-1/6 h-full  flex flex-col items-center justify-center ml-2'>
        <img
          className=' w-3/4 h-auto'
          src={moobLogo}
          alt='Media Moob Logo Image'
        />
        <span className=' w-full text-sm text-center font-poppinsLight text-white'>
          Designed and developed - 2024
        </span>
      </div>
      <div className='  flex flex-col gap-4 '>
        <ul className=' w-full flex items-center justify-center gap-5 md:gap-8 lg:gap-10'>
          {rrssData.map((el, i) => (
            <li
              key={i}
              className=' relative hover:scale-125 transition-all p-2 rounded-xl'
            >
              <a
                className=' '
                href={el.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className=' w-6 '>
                  <el.icon />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
