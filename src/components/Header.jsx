import { useState, useEffect } from 'preact/hooks';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import moobLogo from '/images/mediamoob-logo.webp';
import { OpenedBox, MenuVertical } from '../utils/svgIcons';
import SidebarNav from './SidebarNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [pathname]);

  function handleClick() {
    navigate('/');
  }

  return (
    <header className=' fixed z-50 w-screen h-16 md:h-24 px-2 md:px-6 py-2 flex items-center justify-between bg-black'>
      <button
        className=' w-1/3 min-w-28 max-w-40 h-full flex items-center justify-center ml-2'
        onClick={handleClick}
      >
        <img
          className=' w-full h-auto'
          src={moobLogo}
          alt='Media Moob Logo Image'
        />
      </button>
      <div className=' w-1/2 flex items-center justify-end gap-3 '>
        <div className=' w-24 md:w-28 h-10 md:h-12 lg:h-14 py-2 flex items-center justify-center gap-0 md:gap-2 '>
          <OpenedBox stroke='#5A957A' />
          <span className=' font-oswald text-base md:text-lg lg:text-2xl text-gray-200 tracking-widest'>
            STORE
          </span>
        </div>
        <button
          className=' w-8 hover:scale-110 '
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuVertical stroke='#5A957A' />
        </button>
      </div>

      {isMenuOpen && <SidebarNav onOpen={setIsMenuOpen} />}
    </header>
  );
}
