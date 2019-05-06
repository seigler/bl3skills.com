import { Link } from 'preact-router';
import style from './index.css';

export default function Nav ({ path }) {
  const pages = [
    { name: 'Zane', path: '/operative' },
    { name: 'Amara', path: '/siren' },
    { name: 'FL4K', path: '/beastmaster' },
    { name: 'Moze', path: '/bot-jock' },
  ];
  return (
    <nav class={style.nav}>
      <ul class={style.links}>
        { pages.map(page => {
          return (<li class={`${style.link} ${path === page.path ? style.current : ''}`}>
            <Link href={page.path}>{page.name}</Link>
          </li>);
        }) }
      </ul>
    </nav>
  );
}
