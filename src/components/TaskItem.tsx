import { Check, Trash } from "phosphor-react";
import { Task, useTasksContext } from "../contexts/TasksContext";
import styles from "./TaskItem.module.scss";

type TaskItemProps = Task;

function classNames(...classes: string[]) {
  return classes.join(" ");
}

export const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed }) => {
  const { deleteTask, toggleTaskCompleted } = useTasksContext();

  function handleToggleTaskCompleted() {
    toggleTaskCompleted(id);
  }

  function handleDeleteTask() {
    deleteTask(id);
  }

  return (
    <div
      className={
        completed
          ? classNames(styles.taskItem, styles.completed)
          : styles.taskItem
      }
    >
      <div className={styles.checkboxContainer}>
        <span
          className={styles.checkbox}
          tabIndex={0}
          title="Alternar marcação de tarefa concluída"
          onClick={handleToggleTaskCompleted}
        >
          {completed && <Check fontSize={11} weight="bold" />}
        </span>
      </div>

      <p onClick={handleToggleTaskCompleted}>{text}</p>

      <button type="button" onClick={handleDeleteTask}>
        <Trash fontSize={18} />
      </button>
    </div>
  );
};
