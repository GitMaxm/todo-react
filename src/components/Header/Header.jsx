import styles from './Header.module.css';

function Header({ statusCounterActive, statusCounterDone }) {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Список дел</h1>
			<span className={styles.desc}>
				<span className={`${styles.counter} ${styles.active}`}>{statusCounterActive}</span> осталось,
				<span className={`${styles.counter} ${styles.done}`}> {statusCounterDone}</span> сделано
			</span>
		</header>
	);
}

export default Header;
