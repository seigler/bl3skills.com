import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Operative () {
	return (
		<VaultHunter
      name = 'Zane'
      discipline = 'Operative'
      skills = { skills }
    />
	);
}
