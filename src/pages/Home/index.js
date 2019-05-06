import { Link } from 'preact-router';
import Footer from '@components/Footer';
import style from './index.css';

export default function () {
  const pages = [
    { name: 'Zane', job: 'the Operative', path: '/operative' },
    { name: 'Amara', job: 'the Siren', path: '/siren' },
    { name: 'FL4K', job: 'the Beastmaster', path: '/beastmaster' },
    { name: 'Moze', job: 'the Bot Jock', path: '/bot-jock' },
  ];
  return (
    <div>
      <div class={style.splash}>
        <div class={style.wrapper}>
          <h1>Borderlands 3 skill calculator</h1>
          { pages.map(page => {
            return (
              <Link class={style.link} href={page.path}>
                <div class={style.name}>
                  {page.name}
                  <div class={style.job}>
                    {page.job}
                  </div>
                </div>
              </Link>
            );
          }) }
        </div>
      </div>
      <Footer />
    </div>
  );
}
