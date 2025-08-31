import type { ChangeEvent, FC } from "react";

import {
  TaskPriorityEnum,
  TaskStatusEnum,
} from "../../../../../../../lib/enums/tasks.enums.ts";
import { useTaskModalStore } from "../../../../../../../store/task-modal.store.ts";
import { taskStatusOptions } from "./constants/task-priority-options.constants.ts";
import { taskPriorityOptions } from "./constants/task-status-options.constants.ts";
import type { OptionDTO } from "../../../../../../../lib/types/select.types.ts";
import { Select } from "../../../../../../ui/select/select.tsx";

import { UserPositionEnum } from "../../../../../../../lib/enums/users.enum.ts";
import { useUsersStore } from "../../../../../../../store/users.store.ts";
import { useAuthStore } from "../../../../../../../store/auth.store.ts";
import { Input } from "../../../../../../ui/input/input.tsx";

import s from "./task-form.module.scss";

export const TaskForm: FC = () => {
  const { users } = useUsersStore();

  const {
    form,
    onSetTitle,
    onSetDescription,
    onSetPriority,
    onSetStatus,
    onSetResponsibleId,
  } = useTaskModalStore();

  const { user } = useAuthStore();

  const usersOptions: OptionDTO[] = users.map((user) => ({
    label: user.username,
    value: user.id,
  }));

  const isAvailable = user?.position === UserPositionEnum.Lead;

  const selectedStatus = taskStatusOptions.find(
    (option) => option.value === form.status
  ) as OptionDTO;

  const selectedPriority = taskPriorityOptions.find(
    (option) => option.value === form.priority
  ) as OptionDTO;

  const selectedUser = usersOptions.find(
    (option) => option.value === form?.responsibleId
  );

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    onSetTitle(value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    onSetDescription(value);
  };

  return (
    <div className={s.container}>
      <Input
        value={form?.title || ""}
        onChange={onChangeTitle}
        placeholder="Заголовок"
        disabled={!isAvailable}
        label="Заголовок"
        type="text"
      />

      <Input
        value={form?.description || ""}
        onChange={onChangeDescription}
        placeholder="Описание"
        disabled={!isAvailable}
        label="Описание"
        type="text"
      />

      <Select
        selectedOption={selectedPriority}
        options={taskPriorityOptions}
        onSelect={(option) => onSetPriority(option.value as TaskPriorityEnum)}
        size="MD"
        disabled={!isAvailable}
        label="Приоритет"
      />
      <Select
        selectedOption={selectedStatus}
        options={taskStatusOptions}
        onSelect={(option) => onSetStatus(option.value as TaskStatusEnum)}
        size="MD"
        label="Статус"
      />
      <Select
        selectedOption={selectedUser}
        options={usersOptions}
        onSelect={(option) => onSetResponsibleId(option.value as number)}
        size="MD"
        disabled={!isAvailable}
        label="Ответственный"
      />
    </div>
  );
};
