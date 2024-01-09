import SliderFeatured from '../components/SliderFeatured';

const slidesElements = [
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

export default function Home() {
  return (
    <div>
      <SliderFeatured
        slides={slidesElements}
        slidesPerView={1}
        delayPerView={5000}
        spaceBetweenSlides={0}
        colorBullets={'default'}
        sizeBullets={'sm'}
      />
    </div>
  );
}
