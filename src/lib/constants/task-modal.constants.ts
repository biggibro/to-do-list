import { TaskPriorityEnum, TaskStatusEnum } from "../enums/tasks.enums.ts";

export const initialTask = {
  id: 0,
  title: "",
  description: "",
  creatorId: 0,
  status: TaskStatusEnum.Opened,
  priority: TaskPriorityEnum.Low,
};
