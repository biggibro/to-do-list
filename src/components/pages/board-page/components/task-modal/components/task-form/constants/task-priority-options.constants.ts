import { getTaskStatusLabel } from "../../../../../../../../lib/helpers/tasks.helpers.ts";
import type { OptionDTO } from "../../../../../../../../lib/types/select.types.ts";
import { TaskStatusEnum } from "../../../../../../../../lib/enums/tasks.enums.ts";

export const taskStatusOptions: OptionDTO[] = [
  {
    value: TaskStatusEnum.Opened,
    label: getTaskStatusLabel(TaskStatusEnum.Opened),
  },
  {
    value: TaskStatusEnum.Progress,
    label: getTaskStatusLabel(TaskStatusEnum.Progress),
  },
  {
    value: TaskStatusEnum.Completed,
    label: getTaskStatusLabel(TaskStatusEnum.Completed),
  },
  {
    value: TaskStatusEnum.Cancelled,
    label: getTaskStatusLabel(TaskStatusEnum.Cancelled),
  },
];
