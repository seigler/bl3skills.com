import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function BotJock ({ path }) {
  return (
    <VaultHunter
      name='Moze'
      discipline='Bot Jock'
      skills={skills}
      path={path}
    />
  );
}
