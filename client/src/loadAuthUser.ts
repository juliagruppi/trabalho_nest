import { useEffect } from "react";
import { useGlobalStore } from "./useGlobalStore";
import { AuthToken } from "./authtoken";
import { api } from "./api/api";

export function LoadAuthUser() {
  const user = useGlobalStore((state) => state.user);
  const setUser = useGlobalStore((state) => state.setUser);

  useEffect(() => {
    const token = AuthToken.get();
    if (!token || user.isAuthenticated) {
      return;
    }
    
    api.get('/users/myself').then((reponse) => {
      setUser({ ...reponse.data, isAuthenticated: true });
    });
  }, [user]);

  return null;
}

