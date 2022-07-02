import { PlusCircle } from "phosphor-react";
import React, { useState } from "react";
import styles from "./CreateTask.module.scss";

export const CreateTask: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("creating...", newTaskText);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.createTaskForm}>
      <input
        type="text"
        value={newTaskText}
        onChange={e => setNewTaskText(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit">
        Criar
        <PlusCircle fontSize={20} weight="bold" />
      </button>
    </form>
  );
};
