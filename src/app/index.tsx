import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useEffect } from "react";
import TagsService from "../services/api/tags.service";
import { useStore } from "../services/zustand/store";
import GroupsService from "../services/api/groups.service";
const Panel = lazy(() => import("../components/Panel"));
const Router = lazy(() => import("../components/PageRouter"));
function App() {
  const { setTags, setGroups } = useStore()
  const queryClient = new QueryClient();

  useEffect(() => {
    const getTags = async () => {
      const data = await TagsService.getAll();
      if (data.status === "error") throw new Error(data.error);
      setTags(data.data)
    };
    const getGroups = async () => {
      const data = await GroupsService.getAll();
      if (data.status === "error") throw new Error(data.error);
      setGroups(data.data)
    };
    getTags()
    getGroups()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading....</div>}>
        <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen">
          <Router />
          <Panel />
        </div>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
