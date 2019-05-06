import { Link } from 'preact-router';

export default function Nav ({ path }) {
  const pages = [
    { name: 'Zane', path: '/operative' },
    { name: 'Amara', path: '/siren' },
    { name: 'FL4K', path: '/beastmaster' },
    { name: 'Moze', path: '/bot-jock' },
  ];
  return (
    <nav>
      {
        pages.map(page => (
          path === page.path ? null : <Link href={page.path}>{page.name}</Link>
        ))
      }
    </nav>
  );
}
