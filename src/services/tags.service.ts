import { ApiErrorResponse, ApiSuccessResponse, Tag } from "../types/entities";
import baseService from "./baseAxios";

const TagsService = {
  async getAll(): Promise<ApiSuccessResponse<Tag> | ApiErrorResponse> {
    try {
      const data = (await baseService.get("/tags")) as Tag;
      return {
        status: "success",
        data,
      };
    } catch (err: any) {
      return {
        status: "error",
        error: err.toString(),
      };
    }
  },
};

export default TagsService;
