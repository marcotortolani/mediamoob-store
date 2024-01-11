import { useState } from 'preact/hooks';
import { useNavigate } from 'react-router-dom';
import moobLogo from '/images/mediamoob-logo.webp';
import { OpenedBox, MenuVertical } from '../utils/svgIcons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <header className=' fixed z-50 w-full h-16 px-2 py-4 flex items-center justify-between bg-black'>
      <button className=' w-1/3 ml-2' onClick={handleClick}>
        <img src={moobLogo} alt='Media Moob Logo Image' />
      </button>
      <div className=' w-1/3 flex items-center gap-2 '>
        <div className=' w-5/6 h-10 py-2 flex items-center justify-center gap-0 '>
          <OpenedBox stroke='#5A957A' />
          <span className=' font-oswald text-base text-gray-200 tracking-widest'>
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

      {isMenuOpen && (
        <div className=' z-20 absolute top-0 right-0 p-2  w-1/2 h-screen  bg-moobMint bg-opacity-80 '>
          <button
            className=' p-2 bg-slate-200 rounded-full'
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </header>
  );
}
