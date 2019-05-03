import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Zane () {
	return (
		<VaultHunter
      name = 'Zane'
      skills = { skills }
    />
	);
}
