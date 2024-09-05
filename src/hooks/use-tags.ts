import { useQuery } from "@tanstack/react-query";
import TagsService from "../services/api/tags.service";

const getTags = async () => {
  const data = await TagsService.getAll();
  if (data.status === "error") throw new Error(data.error);
  return data;
};

const useTags = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["GET_TAGS"],
    queryFn: getTags,
  });
  return {
    data,
    isError,
    error,
    isLoading,
  };
};

export default useTags;
