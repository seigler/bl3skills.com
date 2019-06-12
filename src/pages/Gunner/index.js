import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Gunner ({ path }) {
  return (
    <VaultHunter
      name='Moze'
      discipline='Bot Jock'
      skills={skills}
      path={path}
    />
  );
}
