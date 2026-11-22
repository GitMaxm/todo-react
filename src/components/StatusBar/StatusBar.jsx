import styles from './StatusBar.module.css';

function StatusBar({ changeStatus, status }) {
	const buttons = [
		{ status: 'all', title: 'Все' },
		{ status: 'active', title: 'Активные' },
		{ status: 'important', title: 'Важные' },
		{ status: 'done', title: 'Выполненные' },
	];

	return (
		<div className={styles.group} role="group">
			{buttons.map((item) => (
				<button
					key={item.status}
					onClick={() => changeStatus(item.status)}
					type="button"
					className={`${styles.button} ${status === item.status ? styles.active : styles.outline}`}
				>
					{item.title}
				</button>
			))}
		</div>
	);
}

export default StatusBar;
