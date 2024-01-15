import LabelHeaderPage from '../components/LabelHeaderPage';

const portalesElements = [
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
];

const triviasElements = [
  {
    name: 'Epa Mujer',
    dateCreated: '15/12/2023',
    shortDescription: 'Portal de contenido para mujeres',
    link: 'https://epa-mujer-demo.vercel.app/',
    coverImageLarge: '/images/bg-alta-epamujer.webp',
    coverImageLogo: '/images/epamujer-portales.webp',
    mockup: '/images/trivia-epamujer-mockup.webp',
    bgColor: '#2FB8FF',
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
    bgColor: '#E08008',
  },
  {
    name: 'Maradona Plataforma de Juegos',
    dateCreated: '01/11/2023',
    shortDescription: 'Plataforma de juegos de Diego Maradona',
    link: 'https://maradona-games-selector.vercel.app/',
    coverImageLarge: '',
    coverImageLogo: '/images/maradona-juegos.webp',
    mockup: '/images/trivia-maradona-mockup.webp',
    bgColor: '#000000',
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
    name: 'Epa Mujer',
    dateCreated: '15/12/2023',
    shortDescription: 'Portal de contenido para mujeres',
    link: 'https://epa-mujer-demo.vercel.app/',
    coverImageLarge: '/images/bg-alta-epamujer.webp',
    coverImageLogo: '/images/epamujer-portales.webp',
    mockup: '/images/trivia-epamujer-mockup.webp',
    bgColor: '#2FB8FF',
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
    bgColor: '#E08008',
  },
  {
    name: 'Maradona Plataforma de Juegos',
    dateCreated: '01/11/2023',
    shortDescription: 'Plataforma de juegos de Diego Maradona',
    link: 'https://maradona-games-selector.vercel.app/',
    coverImageLarge: '',
    coverImageLogo: '/images/maradona-juegos.webp',
    mockup: '/images/trivia-maradona-mockup.webp',
    bgColor: '#000000',
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
];

const lang = { es: 'ES', en: 'GB', us: 'US', pt: 'PT' };

export default function PortalesTest() {
  return (
    <main className=' z-0 relative pt-8 md:pt-14 lg:pt-16 w-full md:w-[700px] h-fit overflow-y-hidden font-poppinsLight flex flex-col items-center justify-center '>
      <LabelHeaderPage title='Memoob Trivias' lang={lang.es} />

      <div className='w-full h-full p-2 pt-4 flex items-center justify-center  content-normal'>
        <ul className=' w-fit h-full pl-2 pr-2 grid place-items-center  grid-cols-3 md:grid-cols-4  gap-3 sm:gap-4 md:gap-5'>
          {triviasElements.map((slide, i) => (
            <li
              key={i}
              className='col-span-1 relative w-full aspect-[5/8] overflow-hidden '
            >
              <a
                className=' w-full h-full pb-1 flex flex-col items-start gap-0'
                href={slide.link}
                target='_blank'
              >
                <div
                  className='relative w-full h-full flex justify-center  overflow-y-hidden  rounded-xl'
                  style={{ backgroundColor: `${slide.bgColor}` }}
                >
                  <div className=' w-full px-1 flex justify-center  absolute top-4'>
                    <img
                      className='  h-auto object-cover'
                      src={slide.mockup}
                      alt={`${slide.name} cover and logo`}
                    />
                  </div>
                </div>

                <span className='  font-poppinsLight text-xs  line-clamp-1'>
                  {slide.name}
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
