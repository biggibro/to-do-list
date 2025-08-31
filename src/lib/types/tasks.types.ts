import { TaskPriorityEnum, TaskStatusEnum } from "../enums/tasks.enums.ts";

export interface TaskDTO {
  id: number;
  title?: string;
  description?: string;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
  creatorId: number;
  responsibleId?: number;

  // startDate: string;
  // endDate: string;
  // updateDate?: string;
}
