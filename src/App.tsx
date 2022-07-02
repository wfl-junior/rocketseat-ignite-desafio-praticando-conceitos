import { Fragment } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TasksContextProvider } from "./contexts/TasksContext";

export const App: React.FC = () => (
  <Fragment>
    <Header />

    <main>
      <TasksContextProvider>
        <CreateTask />
        <TaskList />
      </TasksContextProvider>
    </main>
  </Fragment>
);
