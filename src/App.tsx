import { Fragment } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

export const App: React.FC = () => (
  <Fragment>
    <Header />

    <main>
      <CreateTask />
    </main>
  </Fragment>
);
