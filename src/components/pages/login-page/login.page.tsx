import type { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { RoutesEnums } from "../../../lib/enums/routes.enums.ts";
import { useUsersStore } from "../../../store/users.store.ts";
import { useAuthStore } from "../../../store/auth.store.ts";

import { Input } from "../../ui/input/input.tsx";

import s from "./login.page.module.scss";

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Harry");
  const [password, setPassword] = useState("123");

  const { checkUserAuth, getError, reset } = useUsersStore();
  const { setAuthUser } = useAuthStore();

  const error = getError();
  const disabledSubmit = !username.trim() || !password.trim();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setUsername(value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setPassword(value);
  };

  const onSubmit = () => {
    const findUser = checkUserAuth(username, password);

    if (!findUser) {
      return;
    }

    setAuthUser(findUser);
    navigate(RoutesEnums.Board);
    reset();
  };

  return (
    <div className={s.container}>
      <span className={s.label}>Авторизация</span>
      <Input
        value={username}
        onChange={onChangeUsername}
        placeholder="login"
        type="text"
      />
      <Input
        value={password}
        onChange={onChangePassword}
        type="password"
        placeholder="password"
      />

      <button onClick={onSubmit} disabled={disabledSubmit}>
        Войти
      </button>
      {!!error && <div className={s.error}>{error}</div>}
    </div>
  );
};
