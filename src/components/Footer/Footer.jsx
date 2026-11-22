import { useState } from 'react';
import styles from './Footer.module.css';

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
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        value={taskTitle}
        onChange={onInputChange}
        type="text"
        placeholder="Что необходимо сделать"
        className={styles.input}
        aria-label="Новая задача"
      />
      <button
        type="submit"
        className={styles.addButton}
        disabled={!taskTitle.trim()}
      >
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            d="M8 2.5v11M2.5 8h11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Добавить
      </button>
    </form>
  );
}

export default Footer;
