import { Fragment } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export const App: React.FC = () => (
  <Fragment>
    <Header />

    <main>
      <CreateTask />
      <TaskList />
    </main>
  </Fragment>
);
