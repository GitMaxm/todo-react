const ListItem = ({ task, onToggleDone, onToggleImportant, deleteItem }) => {
	const classNameList = `todo-item ${task.important ? 'important' : ''} ${task.done ? 'done' : ''}`.trim();

	return (
		<li className={classNameList}>
			<span
				className="todo-item-text"
				onClick={() => onToggleDone(task.id)}
				aria-label={task.done ? 'Отметить невыполненным' : 'Отметить выполненным'}
			>
				{task.title}
			</span>
			<div className="btn-group">
				<button
					onClick={() => onToggleImportant(task.id)}
					className={`btn btn-important ${task.important ? 'active' : ''}`}
					aria-label={task.important ? 'Снять важность' : 'Отметить важным'}
				>
					<i className="bi bi-exclamation-circle"></i>
				</button>
				<button
					onClick={() => onToggleDone(task.id)}
					className={`btn btn-done ${task.done ? 'active' : ''}`}
					aria-label={task.done ? 'Отметить невыполненным' : 'Отметить выполненным'}
				>
					<i className={`bi ${task.done ? "bi-check-circle-fill" : "bi-check-circle"}`}></i>
				</button>
				<button
					onClick={() => deleteItem(task.id)}
					className="btn btn-delete"
					aria-label="Удалить задачу"
				>
					<i className="bi bi-trash"></i>
				</button>
			</div>
		</li>
	);
};

export default ListItem;