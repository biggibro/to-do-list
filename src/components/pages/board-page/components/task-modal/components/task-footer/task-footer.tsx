import type { FC } from "react";

import { useTaskModalStore } from "../../../../../../../store/task-modal.store.ts";
import { useTasksStore } from "../../../../../../../store/tasks.store.ts";
import { useAuthStore } from "../../../../../../../store/auth.store.ts";

import s from "./task-footer.module.scss";

export const TaskFooter: FC = () => {
  const { getIsDisabledSubmit, form, reset } = useTaskModalStore();

  const disabledSubmit = getIsDisabledSubmit();

  const { createTask, updateTask } = useTasksStore();

  const { user } = useAuthStore();

  const userId = user?.id || 0;

  const isCreate = !form?.id;

  const onSubmit = () => {
    if (isCreate && userId) {
      createTask({ ...form, creatorId: userId });
    }

    if (!isCreate && form) {
      updateTask({ ...form });
    }

    reset();
  };

  const onClose = () => {
    reset();
  };

  return (
    <div className={s.container}>
      <button onClick={onClose}>Отмена</button>
      <button onClick={onSubmit} disabled={disabledSubmit}>
        {isCreate ? "Создать" : "Сохранить"}
      </button>
    </div>
  );
};
