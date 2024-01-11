import { useNavigate } from 'react-router-dom';

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
  function handleClick(path) {
    navigate(path);
  }
  return (
    <div className=' fixed bottom-0 z-50 w-full h-[6vh] flex items-center justify-center bg-black text-white'>
      <ul className=' w-5/6 h-full py-2 flex items-center justify-center gap-3 '>
        {navbarElements.map((el, i) => (
          <li
            key={i}
            className=' relative w-full h-full px-2  content-normal'
          >
            <button
              className=' w-full h-full '
              onClick={() => handleClick(el.href)}
            >
              {el.icon ? <el.icon /> : i}
            </button>
            <span className=' hidden absolute -top-8 left-0 w-20 text-nowrap bg-slate-400 '>
              {el.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
