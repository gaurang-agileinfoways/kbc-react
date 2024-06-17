import { Toaster } from "react-hot-toast";
import { Routers } from "./containers/routes";
import { setupAxios } from "./utils/functions";

setupAxios();

function App() {
  return (
    <>
      <Routers />
      <Toaster position="top-right" toastOptions={{ duration: 6000 }} />
    </>
  );
}

export default App;
