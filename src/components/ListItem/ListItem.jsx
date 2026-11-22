import styles from './ListItem.module.css';

function ListItem({
  task,
  onToggleDone,
  onToggleImportant,
  deleteItem,
}) {
  const itemClass = [
    styles.item,
    task.important ? styles.itemImportant : '',
    task.done ? styles.itemDone : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={itemClass}>
      <button
        type="button"
        className={styles.text}
        onClick={() => onToggleDone(task.id)}
        aria-label={
          task.done
            ? 'Отметить невыполненным'
            : 'Отметить выполненным'
        }
      >
        {task.title}
      </button>
      <div className={styles.group}>
        <button
          onClick={() => onToggleImportant(task.id)}
          className={`${styles.button} ${styles.important} ${task.important ? styles.importantActive : ''}`}
          aria-label={
            task.important ? 'Снять важность' : 'Отметить важным'
          }
        >
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="8"
              y1="4.5"
              x2="8"
              y2="9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="8" cy="11.3" r="1" fill="currentColor" />
          </svg>
        </button>
        <button
          onClick={() => onToggleDone(task.id)}
          className={`${styles.button} ${styles.doneBtn} ${task.done ? styles.doneBtnActive : ''}`}
          aria-label={
            task.done
              ? 'Отметить невыполненным'
              : 'Отметить выполненным'
          }
        >
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4.8 8.3l2.1 2.1 4.3-4.7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => deleteItem(task.id)}
          className={`${styles.button} ${styles.deleteBtn}`}
          aria-label="Удалить задачу"
        >
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 8a1 1 0 001 1h3.6a1 1 0 001-1l.7-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default ListItem;
