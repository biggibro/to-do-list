import { create } from "zustand";

import type { TaskDTO } from "../lib/types/tasks.types.ts";
import { initialTask } from "../lib/constants/task-modal.constants.ts";
import type { TaskPriorityEnum } from "../lib/enums/tasks.enums.ts";
import { TaskStatusEnum } from "../lib/enums/tasks.enums.ts";

interface TaskModalState {
  form: TaskDTO;

  isOpen: boolean;
}

interface TaskModalActions {
  onSetTitle: (title: string) => void;
  onSetDescription: (title: string) => void;
  onSetPriority: (title: TaskPriorityEnum) => void;
  onSetStatus: (status: TaskStatusEnum) => void;
  onSetResponsibleId: (userId: number) => void;

  onOpen: (task: TaskDTO) => void;

  getIsDisabledSubmit: () => boolean;

  reset: () => void;
}

const initialState: TaskModalState = {
  form: {
    ...initialTask,
  },

  isOpen: false,
};

export const useTaskModalStore = create<TaskModalState & TaskModalActions>(
  (set, get) => ({
    ...initialState,

    onSetTitle: (title) => {
      const form = get().form;

      set({ form: { ...form, title } });
    },

    onSetDescription: (description) => {
      const form = get().form;

      set({ form: { ...form, description } });
    },

    onSetPriority: (priority) => {
      const form = get().form;

      set({ form: { ...form, priority } });
    },

    onSetStatus: (status) => {
      const form = get().form;

      set({ form: { ...form, status } });
    },

    onSetResponsibleId: (userId) => {
      const form = get().form;

      set({ form: { ...form, responsibleId: userId } });
    },

    onOpen: (task) => set({ isOpen: true, form: { ...task } }),

    getIsDisabledSubmit: () => {
      const { title, priority, status } = get().form;

      return !title?.trim() || !priority || !status;
    },

    reset: () => set({ ...initialState }),
  })
);
