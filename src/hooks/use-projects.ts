import { useQuery } from "@tanstack/react-query";
import ProjectsService from "../services/projects.service";

const getProjects = async () => {
  const data = await ProjectsService.getAll();
  if (data.status === "error") throw new Error(data.error);
  return data;
};

const useProjects = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["GET_PROJECTS"],
    queryFn: getProjects,
  });
  return {
    data,
    isError,
    error,
    isLoading,
  };
};

export default useProjects;
