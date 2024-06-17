import { authStore } from "../store/auth";
import { io } from "socket.io-client";

export const SOCKET_PATH = import.meta.env.VITE_REACT_APP_SOCKET_SERVER;

export const socketInstance = () => {
  const { userData } = authStore.getState();
  console.log("userDdsfadsfata: ", userData);

  return io(SOCKET_PATH, {
    extraHeaders: {
      authorization: `Bearer ${userData.accessToken}`,
    },
  });
};
