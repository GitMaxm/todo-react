import { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import StatusBar from './components/StatusBar/StatusBar';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import { filterStatus, search } from './utils/filters';
import styles from './App.module.css';

const App = () => {
  const [todoData, setTodoData] = useState([
    { id: 0, title: 'Выпить кофе', important: false, done: false },
    {
      id: 1,
      title: 'Сделать React приложение',
      important: false,
      done: true,
    },
    { id: 2, title: 'Позавтракать', important: true, done: false },
    { id: 4, title: 'Купить молоко', important: false, done: true },
    { id: 5, title: 'Позвонить маме', important: true, done: true },
    {
      id: 6,
      title:
        'Записаться на курс по React и Redux, чтобы изучить все хуки и лучшие практики',
      important: true,
      done: false,
    },
    {
      id: 7,
      title: 'Разобраться с API (JSON, REST)',
      important: false,
      done: false,
    },
  ]);
  const [term, setTerm] = useState('');
  const [status, setStatus] = useState('all');

  const onToggleImportant = (id) => {
    setTodoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, important: !item.important }
          : item,
      ),
    );
  };

  const onToggleDone = (id) => {
    setTodoData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const deleteItem = (id) => {
    setTodoData((prev) => prev.filter((item) => id !== item.id));
  };

  const addItem = (value) => {
    setTodoData((prev) => {
      const newId =
        prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
      return [
        ...prev,
        { id: newId, title: value, important: false, done: false },
      ];
    });
  };

  const statusCounterActive = useMemo(
    () =>
      todoData.reduce(
        (counter, item) => (item.done ? counter : counter + 1),
        0,
      ),
    [todoData],
  );

  const statusCounterDone = useMemo(
    () =>
      todoData.reduce(
        (counter, item) => (item.done ? counter + 1 : counter),
        0,
      ),
    [todoData],
  );

  const filteredItems = useMemo(() => {
    const searchedItems = search(todoData, term);
    return filterStatus(searchedItems, status);
  }, [todoData, term, status]);

  return (
    <div className={styles.app}>
      <Header
        statusCounterActive={statusCounterActive}
        statusCounterDone={statusCounterDone}
      />

      <div className={styles.controls}>
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
