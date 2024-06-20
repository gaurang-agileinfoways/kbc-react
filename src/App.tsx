import { Toaster } from "react-hot-toast";
import { Routers } from "./containers/routes";
import { setupAxios } from "./utils/functions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

setupAxios();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
      <Toaster position="top-right" toastOptions={{ duration: 6000 }} />
    </QueryClientProvider>
  );
}

export default App;
