import { PlusCircle } from "phosphor-react";
import React, { useState } from "react";
import { useTasksContext } from "../contexts/TasksContext";
import styles from "./CreateTask.module.scss";

export const CreateTask: React.FC = () => {
  const { addTask } = useTasksContext();
  const [newTaskText, setNewTaskText] = useState("");

  const isNewTaskTextEmpty = newTaskText.length === 0;

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isNewTaskTextEmpty) {
      return;
    }

    addTask(newTaskText);
    setNewTaskText("");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.createTaskForm}>
      <input
        type="text"
        value={newTaskText}
        onChange={e => setNewTaskText(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit" disabled={isNewTaskTextEmpty}>
        Criar
        <PlusCircle fontSize={20} weight="bold" />
      </button>
    </form>
  );
};
