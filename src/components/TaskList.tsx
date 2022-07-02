import { ClipboardText } from "phosphor-react";
import styles from "./TaskList.module.scss";

export const TaskList: React.FC = () => {
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

      <div className={styles.noTasks}>
        <ClipboardText fontSize={56} />

        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
};
