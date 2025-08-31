import { create } from "zustand";

import { tasksMock } from "../lib/constants/tasks.constants.ts";
import type { TaskDTO } from "../lib/types/tasks.types.ts";

type CreateTaskDTO = Omit<TaskDTO, "id">;

interface TasksState {
  tasks: TaskDTO[];
}

interface TasksActions {
  createTask: (task: CreateTaskDTO) => void;
  updateTask: (task: TaskDTO) => void;
}

const initialState: TasksState = {
  tasks: [...tasksMock],
};

export const useTasksStore = create<TasksState & TasksActions>((set, get) => ({
  ...initialState,

  createTask: (task) => {
    const tasks = get().tasks;

    const lastTaskId = tasks?.[tasks.length - 1]?.id || 0;
    const taskWithId = { ...task, id: lastTaskId + 1 };

    tasks.push(taskWithId);

    set({ tasks });
  },

  updateTask: (task) => {
    const tasks = get().tasks;

    const taskIndex = tasks.findIndex((item) => item.id === task.id);

    tasks[taskIndex] = { ...task };

    set({ tasks });
  },
}));
