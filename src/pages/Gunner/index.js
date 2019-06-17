import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Gunner ({ path }) {
  return (
    <VaultHunter
      name='Moze'
      discipline='Gunner'
      skills={skills}
      path={path}
    />
  );
}
