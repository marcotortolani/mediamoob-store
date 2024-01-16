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
    <div className=' z-20 absolute top-0 right-0 p-2 w-1/2 h-[94vh] min-h-[400px] flex flex-col justify-start gap-2 normal:gap-6 tall:gap-10 bg-moobMint bg-opacity-95 rounded-tl-[2rem] rounded-bl-[2rem] '>
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
        <div className=' w-1/6 p-1'>
          <RightChevron fill='#FFF' />
        </div>
      </button>

      <div className=' w-full pr-3'>
        <ul className=' py-2 flex flex-col gap-2 '>
          {sidebarNavData.map((el, i) => (
            <li key={i} className=' w-full flex flex-col items-end gap-1'>
              <button
                onClick={() => handleNavigate(el.href)}
                className='w-full h-full flex items-center justify-end gap-3'
              >
                <span className='w-full font-poppinsRegular text-end text-base md:text-lg'>
                  {el.name}
                </span>
                <div className='  w-8 h-8 opacity-70'>
                  <el.icon />
                </div>
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
        <ul className=' w-full pr-4 flex items-center justify-end gap-5'>
          {rrssData.map((el, i) => (
            <li key={i} className=''>
              <a
                className=''
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
    </div>
  );
}
