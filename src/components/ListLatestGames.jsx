import { useNavigate } from 'react-router-dom';

export default function ListLatestGames({ listElements }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/apps-games');
  }
  return (
    <section className=' z-30 relative top-0 w-screen max-w-[600px] h-full  mt-2 px-2 flex flex-col items-start justify-center '>
      <div className=' w-full h-fit px-4 py-2 bg-gray-300 rounded-xl'>
        <h3 className=' mb-2 uppercase text-sm font-poppinsRegular'>
          Media Moob Games
        </h3>
        <div className='w-full  h-fit content-normal'>
          <ul className=' w-fit h-full flex flex-col items-center justify-center gap-2'>
            {listElements.map((el, i) => (
              <li
                key={i}
                onClick={() => {
                  setIndexPag(i);
                }}
                className={` w-full h-[15vh]  flex items-start gap-2 rounded-xl `}
              >
                <img
                  className=' w-2/5 h-full aspect-[5/4] object-cover rounded-[inherit]'
                  src={el.coverImageLogo}
                  alt={`${el.name} cover and logo`}
                />
                <div className='relative w-full h-full  p-2 flex flex-col items-start gap-0'>
                  <h4 className=' w-full pr-4 font-poppinsSemiBold text-sm leading-4'>
                    {el.name}
                  </h4>
                  <p className=' text-[0.6rem] leading-3 line-clamp-2'>{el.shortDescription}</p>
                  <a
                    className=' absolute bottom-2 left-2  px-4 py-1 bg-moobSky text-[0.6rem] text-white uppercase rounded-full'
                    href={el.link}
                    target='_blank'
                  >Jugar</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-4 mb-2'>
          <button
            className=' px-2 py-1 bg-moobSky text-xs text-white lowercase rounded-full'
            onClick={handleClick}
          >
            Ver todos
          </button>
        </div>
      </div>
    </section>
  );
}
