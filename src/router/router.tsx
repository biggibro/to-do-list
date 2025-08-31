import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage } from "../components/pages/login-page/login.page.tsx";
import { BoardPage } from "../components/pages/board-page/board.page.tsx";
import { Layout } from "../components/layout/layout.tsx";
import { RedirectWrapper } from "../components/redirect-wrapper/redirect-wrapper.tsx";
import { RoutesEnums } from "../lib/enums/routes.enums.ts";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: RoutesEnums.Login,
          element: <LoginPage />,
        },
        {
          element: <RedirectWrapper />,
          children: [
            {
              path: RoutesEnums.Board,
              element: <BoardPage />,
            },
            {
              path: "*",
              element: <Navigate to={RoutesEnums.Login} />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/" }
);
