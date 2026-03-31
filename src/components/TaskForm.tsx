import React, { useState } from 'react';
import styles from './TaskForm.module.css';

interface Props {
  onAdd: (text: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
