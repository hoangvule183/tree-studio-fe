import { useQuery } from "@tanstack/react-query";
import ProjectsService from "../services/api/projects.service";

export type SearchProjectsParams = {
  groupIds?: string[];
  tagIds?: string[];
  q?: string;
};

const searchProjects = async ({ queryKey }: { queryKey: any }) => {
  const query = queryKey[1] as {
    groupIds?: string[];
    tagIds?: string[];
    q?: string;
  };
  const data = await ProjectsService.searchProjects(query);
  if (data.status === "error") throw new Error(data.error);
  return data;
};

const useSearchProjects = (query?: SearchProjectsParams) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["SEARCH_PROJECTS", query],
    queryFn: searchProjects,
    enabled: !!query,
  });
  return {
    data,
    isError,
    error,
    isLoading,
  };
};

export default useSearchProjects;
