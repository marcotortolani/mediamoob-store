import GridReels from '../components/GridReels';
import ListLatestGames from '../components/ListLatestGames';
import SliderFeatured from '../components/SliderFeatured';
import SliderPortales from '../components/SliderPortales';
import SliderTrivias from '../components/SliderTrivias';

import { portalsTest, trivias, appGames, reels } from './../contentData.json';
import { sortArrayByDate } from '../utils/functions';

//- portales: ultimos 10
//- apps & games: ultimos 4
//- trivias: ultimas 4
//- reels: ultimos 6

export default function Home() {
  const portalsTestSorted = sortArrayByDate(portalsTest).slice(0, 10);
  const triviasSorted = sortArrayByDate(trivias).slice(0, 4);
  const appsGamesSorted = sortArrayByDate(appGames).slice(0, 4);
  const reelsSorted = sortArrayByDate(reels).slice(0, 6);

  // featured elements armado solamente con el ultimo de cada categoria
  // necesito hacer que sean los 3 ultimos de todos los contenidos

  const featuredElements = [
    portalsTestSorted[0],
    triviasSorted[0],
    appsGamesSorted[0],
  ];

  return (
    <main className=' z-0 relative mt-16 md:mt-24 lg:mt-28 w-screen overflow-x-hidden font-poppinsLight flex flex-col items-center gap-2 md:gap-3 lg:gap-4  '>
      <SliderFeatured
        slides={featuredElements}
        slidesPerView={1}
        delayPerView={5000}
        spaceBetweenSlides={20}
        colorBullets={'default'}
        sizeBullets={'sm'}
      />

      <SliderPortales slides={portalsTestSorted} />

      <ListLatestGames listElements={appsGamesSorted} />

      <SliderTrivias slides={triviasSorted} />

      <GridReels gridElements={reelsSorted} />

      {/* <div className='w-full h-28'></div> */}
    </main>
  );
}
