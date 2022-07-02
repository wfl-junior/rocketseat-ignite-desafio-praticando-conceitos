import { Check, Trash } from "phosphor-react";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  completed: boolean;
}

function classNames(...classes: string[]) {
  return classes.join(" ");
}

export const TaskItem: React.FC<TaskItemProps> = ({ completed }) => {
  return (
    <div
      className={
        completed
          ? classNames(styles.taskItem, styles.completed)
          : styles.taskItem
      }
    >
      <span
        className={styles.checkbox}
        tabIndex={0}
        title="Marcar como completa"
      >
        {completed && <Check fontSize={11} weight="bold" />}
      </span>

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button type="button">
        <Trash fontSize={18} />
      </button>
    </div>
  );
};
