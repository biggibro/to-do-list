import type { FC } from "react";

import type { TaskDTO } from "../../../../../../lib/types/tasks.types.ts";

import { Badge } from "../../../../../ui/badge/badge.tsx";
import {
  getTaskPriorityColor,
  getTaskPriorityLabel,
  getTaskStatusColor,
  getTaskStatusLabel,
} from "../../../../../../lib/helpers/tasks.helpers.ts";
import { useUsersStore } from "../../../../../../store/users.store.ts";
import { useTaskModalStore } from "../../../../../../store/task-modal.store.ts";

import s from "./task-card.module.scss";

interface Props {
  task: TaskDTO;
}

export const TaskCard: FC<Props> = (props) => {
  const { task } = props;

  const { getUser } = useUsersStore();
  const { onOpen } = useTaskModalStore();

  const onClickTask = (task: TaskDTO) => {
    onOpen(task);
  };

  return (
    <div
      onClick={() => onClickTask(task)}
      className={s.container}
      key={task.id}
    >
      <b>{task.title}</b>
      <div className={s.field}>
        Приоритет:
        <Badge
          title={getTaskPriorityLabel(task.priority)}
          color={getTaskPriorityColor(task.priority)}
        />
      </div>
      <div className={s.field}>
        Статус:
        <Badge
          title={getTaskStatusLabel(task.status)}
          color={getTaskStatusColor(task.status)}
        />
      </div>
      <div />
      <div className={s.field}>
        Ответственный:
        <span>{getUser(task.responsibleId)?.username || "-"}</span>
      </div>
    </div>
  );
};
