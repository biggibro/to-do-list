import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { useAuthStore } from "../../store/auth.store.ts";
import { Header } from "../header/header.tsx";

import s from "./layout.module.scss";

export const Layout: FC = () => {
  const { user } = useAuthStore();

  const isAuth = !!user;

  return (
    <div className={s.container}>
      {isAuth && <Header />}
      <Outlet />
    </div>
  );
};
