import SliderFeatured from '../components/SliderFeatured';
import SliderPortales from '../components/SliderPortales';

const featuredElements = [
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

export default function Home() {
  return (
    <main className=' z-0 w-screen font-poppinsLight flex flex-col items-center '>
      <SliderFeatured
        slides={featuredElements}
        slidesPerView={1}
        delayPerView={5000}
        spaceBetweenSlides={0}
        colorBullets={'default'}
        sizeBullets={'sm'}
      />
      <SliderPortales
        slides={portalesElements}
      />
    </main>
  );
}
