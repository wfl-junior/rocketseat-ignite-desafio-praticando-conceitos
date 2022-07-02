import { ClipboardText } from "phosphor-react";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.scss";

export const TaskList: React.FC = () => {
  const tasks = ["todo"];

  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span>0</span>
        </div>

        <div className={styles.completedTasks}>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </header>

      {tasks.length > 0 ? (
        <div className={styles.tasks}>
          <TaskItem completed={false} />
          <TaskItem completed={false} />
          <TaskItem completed={false} />
          <TaskItem completed />
          <TaskItem completed />
        </div>
      ) : (
        <div className={styles.noTasks}>
          <ClipboardText fontSize={56} />

          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  );
};
