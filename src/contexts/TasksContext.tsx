import { createContext, useCallback, useContext, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export interface Task {
  id: string;
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

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useLocalStorageState<Task[]>("@todo:tasks", []);

  const addTask: TasksContextData["addTask"] = useCallback(taskText => {
    setTasks(tasks => [
      ...tasks,
      {
        id: uuidv4(),
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
