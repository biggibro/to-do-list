import { type FC } from "react";

import { TaskModal } from "./components/task-modal/task-modal.tsx";
import { useTasksStore } from "../../../store/tasks.store.ts";

import { initialTask } from "../../../lib/constants/task-modal.constants.ts";
import { useTaskModalStore } from "../../../store/task-modal.store.ts";
import { Tasks } from "./components/tasks/tasks.tsx";

import { UserPositionEnum } from "../../../lib/enums/users.enum.ts";
import { useAuthStore } from "../../../store/auth.store.ts";

import s from "./board.module.scss";

export const BoardPage: FC = () => {
  const { isOpen, onOpen } = useTaskModalStore();
  const { tasks } = useTasksStore();
  const { user } = useAuthStore();

  const tasksCount = tasks.length;

  const isAvailable = user?.position === UserPositionEnum.Lead;

  const onClickCreateTask = () => {
    onOpen(initialTask);
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.label}>Количество: {tasksCount}</div>
        <button onClick={onClickCreateTask} disabled={!isAvailable}>
          Создать
        </button>
      </div>
      {!!tasksCount && <Tasks />}
      {!tasksCount && <div className={s.empty}>Нет задач</div>}

      {isOpen && <TaskModal />}
    </div>
  );
};
