import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Siren () {
  return (
    <VaultHunter
      name='Amara'
      discipline='Siren'
      skills={skills}
    />
  );
}
