import { useState } from 'react';

function Footer({ addItem }) {
	const [taskTitle, setTaskTitle] = useState('');

	const onInputChange = (event) => {
		setTaskTitle(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (taskTitle.trim()) {
			addItem(taskTitle);
		}
		setTaskTitle('');
	};

	return (
		<form onSubmit={onSubmit} className="footer">
			<input
				value={taskTitle}
				onChange={onInputChange}
				type="text"
				placeholder="Что необходимо сделать"
				className="task-input"
				aria-label="Новая задача"
			/>
			<button type="submit" className="btn-add" disabled={!taskTitle.trim()}>
				<i className="bi bi-plus-lg"></i> Добавить
			</button>
		</form>
	);
}

export default Footer;
