import { useNavigate } from 'react-router-dom';
import { sidebarNavData, rrssData } from '../utils/staticData';
import { OpenedBox, RightChevron } from '../utils/svgIcons';

export default function SidebarNav({ onOpen }) {
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
    onOpen(false);
  }
  return (
    <div className=' z-20 absolute top-0 right-0 p-2 lg:p-6 w-1/2 max-w-[300px] h-[95vh] min-h-[400px] flex flex-col justify-start gap-2 normal:gap-6 tall:gap-10 bg-moobMint bg-opacity-95 rounded-tl-[2rem] rounded-bl-[2rem] '>
      <button
        className='w-full h-10 p-0 flex items-center justify-end gap-4 '
        onClick={() => onOpen(false)}
      >
        <div className=' h-full py-0 flex items-center justify-end gap-1 md:gap-2 '>
          <OpenedBox stroke='#000' w='25px' h='25px' />
          <span className=' font-oswald font-medium text-base md:text-lg lg:text-2xl text-gray-200 tracking-widest'>
            STORE
          </span>
        </div>
        <div className=' w-1/6 max-w-[30px] p-1'>
          <RightChevron fill='#FFF' />
        </div>
      </button>

      <div className=' w-full pr-3'>
        <ul className=' py-2 flex flex-col gap-2 '>
          {sidebarNavData.map((el, i) => (
            <li
              key={i}
              className=' relative w-full group flex flex-col items-end gap-2'
            >
              <button
                onClick={() => handleNavigate(el.href)}
                className=' relative w-full h-full flex items-center justify-end gap-3'
              >
                <span className='w-full font-poppinsRegular text-end text-base md:text-lg'>
                  {el.name}
                </span>
                <div className='  w-8 h-8 opacity-70'>
                  <el.icon />
                </div>
                <div className=' absolute top-0 left-0 origin-right -z-10 w-full h-full scale-x-0 group-hover:scale-x-100 transition-transform ease-out duration-200 group-hover:bg-moobSky opacity-50 rounded-l-xl'></div>
              </button>

              {i !== sidebarNavData.length - 1 && (
                <span
                  className={` w-24 h-[1px] bg-white bg-opacity-50 content-normal`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className=' w-full flex flex-col gap-4 '>
        <span
          className={` w-full h-[1px] bg-white bg-opacity-50 content-normal`}
        />
        <a
          className='w-full text-center font-poppinsRegular text-sm md:text-lg'
          href='https://memoob.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://memoob.com
        </a>
        <ul className=' w-full flex items-center justify-center gap-5 md:gap-8 lg:gap-10'>
          {rrssData.map((el, i) => (
            <li key={i} className=' relative group p-2 rounded-xl'>
              <a
                className=' '
                href={el.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className=' w-6 '>
                  <el.icon />
                </div>
                <div className=' absolute bottom-0 left-0 origin-bottom -z-10 w-full h-full scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out duration-300 group-hover:bg-moobSky opacity-50 rounded-t-xl'></div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
