import { ClipboardText } from "phosphor-react";
import { Fragment } from "react";
import { useTasksContext } from "../contexts/TasksContext";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.scss";

export const TaskList: React.FC = () => {
  const { tasks, completedTaskCount } = useTasksContext();

  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <span>Concluídas</span>
          <span>
            {tasks.length > 0 ? (
              <Fragment>
                {completedTaskCount} de {tasks.length}
              </Fragment>
            ) : (
              "0"
            )}
          </span>
        </div>
      </header>

      {tasks.length > 0 ? (
        <div className={styles.tasks}>
          {tasks.map(task => (
            <TaskItem key={task.id} {...task} />
          ))}
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
