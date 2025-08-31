import type { FC } from "react";

import { useTasksStore } from "../../../../../store/tasks.store.ts";
import { TaskCard } from "./task-card/task-card.tsx";

import s from "./tasks.module.scss";

export const Tasks: FC = () => {
  const { tasks } = useTasksStore();

  return (
    <div className={s.container}>
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};
