import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksContextData {
  tasks: Task[];
  addTask: (taskText: Task["text"]) => void;
  deleteTask: (taskId: Task["id"]) => void;
  toggleTaskCompleted: (taskId: Task["id"]) => void;
  completedTaskCount: number;
}

const TasksContext = createContext({} as TasksContextData);

export const useTasksContext = () => useContext(TasksContext);

interface TasksContextProviderProps {
  children: React.ReactNode;
}

function* getIdGenerator() {
  let id = 0;

  while (true) {
    yield ++id;
  }
}

const idGenerator = getIdGenerator();

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask: TasksContextData["addTask"] = useCallback(taskText => {
    setTasks(tasks => [
      ...tasks,
      {
        id: idGenerator.next().value!,
        text: taskText,
        completed: false,
      },
    ]);
  }, []);

  const deleteTask: TasksContextData["deleteTask"] = useCallback(taskId => {
    setTasks(tasks => {
      return tasks.filter(task => task.id !== taskId);
    });
  }, []);

  const toggleTaskCompleted: TasksContextData["toggleTaskCompleted"] =
    useCallback(taskId => {
      setTasks(tasks => {
        return tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        });
      });
    }, []);

  const completedTaskCount = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTaskCompleted,
        completedTaskCount,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
