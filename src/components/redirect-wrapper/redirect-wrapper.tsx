import type { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { RoutesEnums } from "../../lib/enums/routes.enums.ts";
import { useAuthStore } from "../../store/auth.store.ts";

export const RedirectWrapper: FC = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to={RoutesEnums.Login} />;
  }

  return <Outlet />;
};
