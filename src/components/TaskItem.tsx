import React from 'react';
import type { Task } from '../types';
import styles from './TaskItem.module.css';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.content} onClick={() => onToggle(task.id)}>
        <div className={styles.checkbox}>
          {task.completed && <span className={styles.check}>✓</span>}
        </div>
        <span className={styles.text}>{task.text}</span>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        aria-label="Eliminar tarea"
      >
        ×
      </button>
    </li>
  );
};

export default TaskItem;
