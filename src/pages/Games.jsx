import LabelHeaderPage from '../components/LabelHeaderPage';

const gamesElements = [
  {
    name: 'Maradona Plataforma de Juegos',
    dateCreated: '01/11/2023',
    shortDescription: 'Plataforma de juegos de Diego Maradona',
    link: 'https://maradona-games-selector.vercel.app/',
    coverImageLarge: '',
    coverImageLogo: '/images/maradona-juegos.webp',
    mockup: '/images/trivia-maradona-mockup.webp',
    bgColor: '#528ad0',
  },
  {
    name: 'Recetas LXLC',
    dateCreated: '05/02/2023',
    shortDescription:
      'App para recomendar recetas de cocina según perfilado del usuario',
    link: 'https://locoxlacocina-app.vercel.app',
    coverImageLarge: '',
    coverImageLogo: '/images/hoyquecocino-juegos.webp',
    mockup: '/images/trivia-lxc-mockup.webp',
    bgColor: '#D2Aa20',
  },
  {
    name: 'Maradona Juegos',
    dateCreated: '01/11/2023',
    shortDescription: 'Plataforma de juegos de Diego Maradona',
    link: 'https://maradona-games-selector.vercel.app/',
    coverImageLarge: '',
    coverImageLogo: '/images/maradona-juegos.webp',
    mockup: '/images/trivia-maradona-mockup.webp',
    bgColor: '#528ad0',
  },
];

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function Games() {
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full md:w-[700px] h-fit overflow-y-hidden font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Games' lang={lang.es} />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul className=' w-full h-fit grid place-items-center grid-cols-3 md:grid-cols-4  gap-2 sm:gap-4 md:gap-5'>
          {gamesElements.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                setIndexPag(i);
              }}
              className={`col-span-1 relative w-full aspect-[5/7] overflow-hidden  `}
            >
              <a
                className=' w-full h-full pb-1 flex flex-col items-start gap-0'
                href={el.link}
                target='_blank'
              >
                <div className='relative w-full h-full flex justify-center  overflow-hidden bg-gray-400 rounded-xl'>
                  <img
                    className=' w-full h-full object-cover rounded-xl'
                    src={el.coverImageLogo}
                    alt={`${el.name} cover and logo`}
                  />
                </div>

                <span className='  font-poppinsLight text-[0.6rem]  line-clamp-1'>
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
