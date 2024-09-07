import { useQuery } from "@tanstack/react-query";
import ProjectsService, { SearchProjectsParams } from "../services/api/projects.service";

const searchProjects = async ({ queryKey }: { queryKey: any }) => {
  const query = queryKey[1] as SearchProjectsParams
  const data = await ProjectsService.searchProjects(query);
  if (data.status === "error") throw new Error(data.error);
  return data.data;
};

const useSearchProjects = (query?: SearchProjectsParams) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["SEARCH_PROJECTS", query],
    queryFn: searchProjects,
    enabled: !!query,
  });
  return {
    data: data ?? [],
    isError,
    error,
    isLoading,
  };
};

export default useSearchProjects;
