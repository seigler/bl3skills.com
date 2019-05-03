import { Router } from 'preact-router';

import Nav from '@components/Nav';
import Footer from '@components/Footer';

import Home from '@pages/Home';
import Operative from '@pages/Operative';
import Siren from '@pages/Siren';

// import style from './index.css';

export default function App () {
  return (
    <div>
      <Nav />
      <main>
        <Router>
          <Home path='/' />
          <Operative path='/operative' />
          <Siren path='/siren' />
        </Router>
      </main>

      <Footer />
    </div>
  );
}
