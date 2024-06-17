import { setAxiosInterceptor } from "../service";
import { authStore } from "../service/store/auth";
import { LocalStorageKeys } from "./constants";

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const { actions } = authStore.getState();

export const setupAxios = () => {
  const userStorage = localStorage.getItem(LocalStorageKeys.user);
  const tokenStorage = localStorage.getItem(LocalStorageKeys.authToken);

  if (userStorage && tokenStorage) {
    actions.authSuccess({ data: JSON.parse(userStorage) });
  } else {
    actions.authFail();
  }
  setAxiosInterceptor();
};
