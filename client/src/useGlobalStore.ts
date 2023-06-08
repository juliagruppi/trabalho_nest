import { create } from "zustand";
import type { User } from "./types";

type StoreUser = User & { isAuthenticated: boolean};

type GlobalStore = {
  user: StoreUser;
  setUser: (user: Partial<StoreUser>) => void;
};

export const initialUser = {
  isAuthenticated: false,
  name: "",
  surname: "",
  email: "",
  id: 0,
  userPicture: null,
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  user: initialUser,
  setUser(user) {
    set({ user: { ...get().user, ...user } });
  },
}));