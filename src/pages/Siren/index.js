import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Siren ({ path }) {
  return (
    <VaultHunter
      name='Amara'
      discipline='Siren'
      skills={skills}
      path={path}
    />
  );
}
