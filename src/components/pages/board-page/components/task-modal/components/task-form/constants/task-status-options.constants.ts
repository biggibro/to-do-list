import { getTaskPriorityLabel } from "../../../../../../../../lib/helpers/tasks.helpers.ts";
import { TaskPriorityEnum } from "../../../../../../../../lib/enums/tasks.enums.ts";
import type { OptionDTO } from "../../../../../../../../lib/types/select.types.ts";

export const taskPriorityOptions: OptionDTO[] = [
  {
    value: TaskPriorityEnum.Low,
    label: getTaskPriorityLabel(TaskPriorityEnum.Low),
  },
  {
    value: TaskPriorityEnum.Medium,
    label: getTaskPriorityLabel(TaskPriorityEnum.Medium),
  },
  {
    value: TaskPriorityEnum.High,
    label: getTaskPriorityLabel(TaskPriorityEnum.High),
  },
];
