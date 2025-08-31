import type { FC } from "react";

import { useTaskModalStore } from "../../../../../store/task-modal.store.ts";
import { TaskFooter } from "./components/task-footer/task-footer.tsx";
import { TaskForm } from "./components/task-form/task-form.tsx";

import s from "./task-modal.module.scss";

export const TaskModal: FC = () => {
  const { form } = useTaskModalStore();

  const isCreate = !form?.id;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <b>{isCreate ? "Создать задачу" : "Редактировать задачу"}</b>

        <TaskForm />
        <TaskFooter />
      </div>
    </div>
  );
};
