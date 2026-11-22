import styles from './Search.module.css';

function Search({ changeTerm, term }) {
	return (
		<input
			className={styles.input}
			value={term}
			onChange={(event) => changeTerm(event.target.value)}
			type="text"
			placeholder="введите фразу для поиска"
		/>
	);
}

export default Search;
