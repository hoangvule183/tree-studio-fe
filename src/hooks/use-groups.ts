import { useQuery } from "@tanstack/react-query";
import GroupsService from "../services/groups.service";

const getGroups = async () => {
  const data = await GroupsService.getAll();
  if (data.status === "error") throw new Error(data.error);
  return data;
};

const useGroups = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["GET_GROUPS"],
    queryFn: getGroups,
  });
  return {
    data,
    isError,
    error,
    isLoading,
  };
};

export default useGroups;
