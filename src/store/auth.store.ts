import { create } from "zustand";

import type { UserDTO } from "../lib/types/users.types.ts";

interface AuthState {
  user: Omit<UserDTO, "password"> | null;
}

interface AuthActions {
  setAuthUser: (user: UserDTO) => void;

  reset: () => void;
}

const initialState: AuthState = {
  user: null,
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initialState,

  setAuthUser: (user) => {
    const { password, ...userWithoutPassword } = user;

    set({
      user: userWithoutPassword,
    });
  },

  reset: () => {
    set({ user: null });
  },
}));
