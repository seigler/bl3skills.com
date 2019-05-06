import { Router } from 'preact-router';

import Home from '@pages/Home';
import Operative from '@pages/Operative';
import Siren from '@pages/Siren';
import Beastmaster from '@pages/Beastmaster';
import BotJock from '@pages/BotJock';

const App = () =>
  (<Router>
    <Home path='/' />
    <Operative path='/operative' />
    <Siren path='/siren' />
    <Beastmaster path='/beastmaster' />
    <BotJock path='/bot-jock' />
  </Router>);

export default App;
