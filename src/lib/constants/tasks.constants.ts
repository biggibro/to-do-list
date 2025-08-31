import { TaskPriorityEnum, TaskStatusEnum } from "../enums/tasks.enums.ts";
import type { TaskDTO } from "../types/tasks.types.ts";

export const tasksMock: TaskDTO[] = [
  {
    id: 1,
    title: `Тренировка в зале`,
    description: `Для тренировки нужно взять с собой полотенце, сланцы, спортивную форму и бутылку воды`,
    creatorId: 1,
    priority: TaskPriorityEnum.Medium,
    status: TaskStatusEnum.Opened,
    responsibleId: 1,
  },
  {
    id: 2,
    title: `Купить продукты`,
    description: `Помидоры, вода, хлеб, стиральный порошок`,
    creatorId: 2,
    priority: TaskPriorityEnum.Low,
    status: TaskStatusEnum.Completed,
    responsibleId: 2,
  },
  {
    id: 3,
    title: `Занятия английским`,
    description: `Перед занятием, необходимо повторить изученный материал и выполнить домашнее задание`,
    creatorId: 1,
    priority: TaskPriorityEnum.High,
    status: TaskStatusEnum.Progress,
    responsibleId: 3,
  },
  {
    id: 4,
    title: `Криптовалюта`,
    description: `Изучить рынок криптовалюты, найти зависимости между ростом и падением цен`,
    creatorId: 1,
    priority: TaskPriorityEnum.High,
    status: TaskStatusEnum.Cancelled,
    responsibleId: 4,
  },
];

export const TaskPriorityConstants = {
  High: "high",
  Medium: "medium",
  Low: "low",
};

export const TaskStatusConstants = {
  Opened: "opened",
  Progress: "progress",
  Completed: "completed",
  Cancelled: "cancelled",
};
