import { create } from "zustand";

import { usersMock } from "../lib/constants/users.constants.ts";
import type { UserDTO } from "../lib/types/users.types.ts";

interface UsersState {
  users: UserDTO[];

  errorPassword: string;
  errorUsername: string;
}

interface UsersActions {
  checkUserAuth: (username: string, password: string) => UserDTO | null;

  getError: () => string;
  getUser: (userId?: number) => UserDTO | null;
  reset: () => void;
}

const initialState: UsersState = {
  users: usersMock,

  errorPassword: "",
  errorUsername: "",
};

export const useUsersStore = create<UsersState & UsersActions>((set, get) => ({
  ...initialState,

  checkUserAuth: (username, password) => {
    const users = get().users;

    const findUser = users.find((user) => user.username === username);

    if (!findUser) {
      set({ errorUsername: "Пользователя с таким логином не существует" });
    } else {
      set({ errorUsername: "" });
    }

    const isDifferentPassword = findUser?.password !== password;
    if (isDifferentPassword) {
      set({ errorPassword: "Неверный пароль" });
    } else {
      set({ errorPassword: "" });
    }

    const hasErrors = !!get().errorUsername || !!get().errorPassword;

    if (hasErrors) {
      return null;
    }

    return findUser || null;
  },

  getError: () => get().errorUsername || get().errorPassword,

  getUser: (userId) => {
    if (!userId) {
      return null;
    }

    const users = get().users;

    return users.find((user) => user.id === userId) || null;
  },

  reset: () => set({ ...initialState }),
}));
