import { HashRouter, Routes, Route } from 'react-router-dom';
import * as P from './pages/index';
import './app.css';
import Header from './components/Header';
import DownbarNav from './components/DownbarNav';

export function App() {
  return (
    <div className=' w-full overflow-x-hidden flex justify-center'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<P.Home />} />
          <Route path='/portales-test' element={<P.PortalesTest />} />
          <Route path='/apps-games' element={<P.AppsGames />} />
          <Route path='/trivias' element={<P.Trivias />} />
          <Route path='/reels' element={<P.Reels />} />
          <Route path='/terms' element={<P.TerminosYCondiciones />} />
        </Routes>
        <DownbarNav />
      </HashRouter>
    </div>
  );
}
