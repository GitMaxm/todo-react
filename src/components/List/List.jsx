import ListItem from '../ListItem/ListItem';
import listItemStyles from '../ListItem/ListItem.module.css';
import styles from './List.module.css';

function List(props) {
	const { todoData, onToggleImportant, onToggleDone, deleteItem } = props;

	const render = todoData.map((task) => {
		return (
			<ListItem
				onToggleImportant={onToggleImportant}
				onToggleDone={onToggleDone}
				deleteItem={deleteItem}
				key={task.id}
				task={task}
			/>
		);
	});

	const emptyList = (
		<li className={`${listItemStyles.item} ${listItemStyles.empty}`}>
			<span className={listItemStyles.text}>Список дел пуст</span>
		</li>
	);

	return <ul className={styles.list}>{todoData.length > 0 ? render : emptyList}</ul>;
}

export default List;
