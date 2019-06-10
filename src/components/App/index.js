import { Router } from 'preact-router';

import Home from '@pages/Home';
import Operative from '@pages/Operative';
import Siren from '@pages/Siren';
import Beastmaster from '@pages/Beastmaster';
import Gunner from '@pages/Gunner';

const App = () =>
  (<Router>
    <Home path='/' />
    <Operative path='/operative' />
    <Siren path='/siren' />
    <Beastmaster path='/beastmaster' />
    <Gunner path='/gunner' />
  </Router>);

export default App;
