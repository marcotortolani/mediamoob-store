import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as P from './pages/index';
import './app.css';
import Header from './components/Header';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<P.Home />} />
          <Route path='/portales-test' element={<P.PortalesTest />} />
          <Route path='/games' element={<P.Games />} />
          <Route path='/trivias' element={<P.Trivias />} />
          <Route path='/reels' element={<P.Reels />} />
          <Route path='/terms' element={<P.TerminosYCondiciones />} />
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </>
  );
}
