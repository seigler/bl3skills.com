import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Beastmaster ({ path }) {
  return (
    <VaultHunter
      name='FL4K'
      discipline='Beastmaster'
      skills={skills}
      path={path}
    />
  );
}
