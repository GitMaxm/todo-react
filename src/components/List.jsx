// List.jsx
import ListItem from './ListItem';

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
		<li className="todo-item empty">
			<span className="todo-item-text">Список дел пуст</span>
		</li>
	);

	return <ul className="todo-list">{todoData.length > 0 ? render : emptyList}</ul>;
}

export default List;