import style from './index.css';

export default function VaultHunter ({name = 'Unnamed', skills = {}}) {
	return (
		<div>
      <h2>{ name }</h2>
      <pre>{JSON.stringify(skills, null, 2)}</pre>
		</div>
	);
}
