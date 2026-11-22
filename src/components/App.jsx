import { useState, useMemo } from 'react';
import Header from './Header';
import Search from './Search';
import StatusBar from "./StatusBar";
import List from './List';
import Footer from './Footer';

const App = () => {
	const [todoData, setTodoData] = useState([
		{ id: 0, title: 'Выпить кофе', important: false, done: false },
		{ id: 1, title: 'Сделать React приложение', important: false, done: true },
		{ id: 2, title: 'Позавтракать', important: true, done: false },
		{ id: 4, title: 'Купить молоко', important: false, done: true },
		{ id: 5, title: 'Позвонить маме', important: true, done: true },
		{ id: 6, title: 'Записаться на курс по React и Redux, чтобы изучить все хуки и лучшие практики', important: true, done: false },
		{ id: 7, title: 'Разобраться с API (JSON, REST)', important: false, done: false },

	]);
	const [term, setTerm] = useState('');
	const [status, setStatus] = useState('all');

	const onToggleImportant = (id) => {
		setTodoData(prev =>
			prev.map(item =>
				item.id === id ? { ...item, important: !item.important } : item
			)
		);
	};

	const onToggleDone = (id) => {
		setTodoData(prev =>
			prev.map(item =>
				item.id === id ? { ...item, done: !item.done } : item
			)
		);
	};

	const deleteItem = (id) => {
		setTodoData(prev => prev.filter(item => id !== item.id));
	};

	const addItem = (value) => {
		setTodoData(prev => {
			const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
			return [...prev, { id: newId, title: value, important: false, done: false }];
		});
	};

	const search = (items, term) => {
		const normalizedTerm = term.toLowerCase().trim();
		return normalizedTerm.length === 0
			? items
			: items.filter(item => item.title.toLowerCase().includes(normalizedTerm));
	};

	const filterStatus = (items, status) => {
		switch (status) {
			case 'active': return items.filter(item => !item.done);
			case 'important': return items.filter(item => item.important);
			case 'done': return items.filter(item => item.done);
			default: return items;
		}
	};

	const statusCounterActive = useMemo(() =>
		todoData.reduce((counter, item) => item.done ? counter : counter + 1, 0),
		[todoData]
	);

	const statusCounterDone = useMemo(() =>
		todoData.reduce((counter, item) => item.done ? counter + 1 : counter, 0),
		[todoData]
	);

	// const filteredBySearchItems = search(todoData, term);
	// const filteredByStatusItems = filterStatus(filteredBySearchItems, status);

	const filteredItems = useMemo(() => {
		const searchedItems = search(todoData, term);
		return filterStatus(searchedItems, status);
	}, [todoData, term, status]);

	return (
		<div>
			<Header
				statusCounterActive={statusCounterActive}
				statusCounterDone={statusCounterDone}
			/>

			<div className="search mb-2">
				<Search changeTerm={setTerm} term={term} />
				<StatusBar changeStatus={setStatus} status={status} />
			</div>

			<List
				todoData={filteredItems}
				onToggleImportant={onToggleImportant}
				onToggleDone={onToggleDone}
				deleteItem={deleteItem}
			/>
			<Footer addItem={addItem} />
		</div>
	);
};

export default App;