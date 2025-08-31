import { TaskPriorityEnum, TaskStatusEnum } from "../enums/tasks.enums.ts";
import type { BadgeColorsType } from "../types/badge.types.ts";

export const getTaskStatusLabel = (status: TaskStatusEnum): string => {
  switch (status) {
    case TaskStatusEnum.Opened:
      return "К выполнению";
    case TaskStatusEnum.Progress:
      return "Выполняется";
    case TaskStatusEnum.Completed:
      return "Выполнена";
    case TaskStatusEnum.Cancelled:
      return "Отменена";

    default:
      return "";
  }
};

export const getTaskStatusColor = (status: TaskStatusEnum): BadgeColorsType => {
  switch (status) {
    case TaskStatusEnum.Opened:
      return "gray";
    case TaskStatusEnum.Progress:
      return "blue";
    case TaskStatusEnum.Completed:
      return "green";
    case TaskStatusEnum.Cancelled:
      return "gray";

    default:
      return "gray";
  }
};

export const getTaskPriorityLabel = (priority: TaskPriorityEnum): string => {
  switch (priority) {
    case TaskPriorityEnum.Low:
      return "Низкий";
    case TaskPriorityEnum.Medium:
      return "Средний";
    case TaskPriorityEnum.High:
      return "Высокий";

    default:
      return "";
  }
};

export const getTaskPriorityColor = (
  priority: TaskPriorityEnum
): BadgeColorsType => {
  switch (priority) {
    case TaskPriorityEnum.Low:
      return "gray";
    case TaskPriorityEnum.Medium:
      return "orange";
    case TaskPriorityEnum.High:
      return "red";

    default:
      return "gray";
  }
};
