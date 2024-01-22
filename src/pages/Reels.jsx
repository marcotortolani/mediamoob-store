import { reels } from './../contentData.json';
import LabelHeaderPage from '../components/LabelHeaderPage';
import { VideoIcon } from '../utils/svgIcons';

const reelsElements = [
  {
    name: 'Epa Mujer',
    dateCreated: '15/12/2023',
    shortDescription: 'Portal de contenido para mujeres',
    link: 'https://epa-mujer-demo.vercel.app/',
    coverImageLarge: '/images/bg-alta-epamujer.webp',
    coverImageLogo: '/images/epamujer-portales.webp',
    mockup: '/images/trivia-epamujer-mockup.webp',
    bgColor: '#A260D0',
  },
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
    name: 'Epa Mujer',
    dateCreated: '15/12/2023',
    shortDescription: 'Portal de contenido para mujeres',
    link: 'https://epa-mujer-demo.vercel.app/',
    coverImageLarge: '/images/bg-alta-epamujer.webp',
    coverImageLogo: '/images/epamujer-portales.webp',
    mockup: '/images/trivia-epamujer-mockup.webp',
    bgColor: '#A260D0',
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
    name: 'Epa Mujer',
    dateCreated: '15/12/2023',
    shortDescription: 'Portal de contenido para mujeres',
    link: 'https://epa-mujer-demo.vercel.app/',
    coverImageLarge: '/images/bg-alta-epamujer.webp',
    coverImageLogo: '/images/epamujer-portales.webp',
    mockup: '/images/trivia-epamujer-mockup.webp',
    bgColor: '#A260D0',
  },
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
    name: 'Epa Mujer',
    dateCreated: '15/12/2023',
    shortDescription: 'Portal de contenido para mujeres',
    link: 'https://epa-mujer-demo.vercel.app/',
    coverImageLarge: '/images/bg-alta-epamujer.webp',
    coverImageLogo: '/images/epamujer-portales.webp',
    mockup: '/images/trivia-epamujer-mockup.webp',
    bgColor: '#A260D0',
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
];

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function Reels() {
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full max-w-screen-lg h-fit font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Video & Reels' lang={lang.es} />

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
                <div className='relative w-full h-full flex justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-gray-600 transition-all ease-in-out duration-300 '>
                  <img
                    className=' w-full h-full object-cover '
                    src={el.coverImageLogo}
                    alt={`${el.name} cover and logo`}
                  />
                  {/* <div className=' z-20 absolute top-0 w-1/4 h-full flex items-center justify-center '>
                    <VideoIcon />
                  </div> */}
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
