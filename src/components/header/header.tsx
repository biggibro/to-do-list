import type { FC } from "react";

import { useAuthStore } from "../../store/auth.store.ts";

import s from "./header.module.scss";

export const Header: FC = () => {
  const { reset, user } = useAuthStore();

  const onClickLogOut = () => {
    reset();
  };

  return (
    <div className={s.container}>
      <b>
        Менеджер задач | {user?.username} ({user?.position})
      </b>
      <button onClick={onClickLogOut}>Выход</button>
    </div>
  );
};
