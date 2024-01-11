import { useNavigate, useResolvedPath } from 'react-router-dom';

import {
  WebIcon,
  JoystickIcon,
  HomeIcon,
  TriviasIcon,
  VideoIcon,
} from '../utils/svgIcons';

const navbarElements = [
  { name: 'Portales Test', icon: WebIcon, href: '/portales-test' },
  { name: 'Memoob Games', icon: JoystickIcon, href: '/games' },
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'Memoob Trivias', icon: TriviasIcon, href: '/trivias' },
  { name: 'Memoob Reels', icon: VideoIcon, href: '/reels' },
];

export default function DownbarNav() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  function handleClick(path) {
    navigate(path);
  }
  return (
    <div className=' fixed md:hidden bottom-0 z-50 w-full h-[6vh] flex items-center justify-center bg-black text-white'>
      <ul className=' w-5/6 h-full py-2 flex items-center justify-center gap-3 '>
        {navbarElements.map((el, i) => (
          <li key={i} className=' relative w-full h-full px-2  content-normal'>
            <button
              className={` w-full h-full`}
              onClick={() => handleClick(el.href)}
            >
              <el.icon stroke={el.href === pathname ? '#2FB8FF' : '#FFF'} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
