import {
  ApiErrorResponse,
  ApiSuccessResponse,
  Resource,
} from "../types/entities";
import baseService from "./baseAxios";

const ResourcesService = {
  async getById(
    id: number
  ): Promise<ApiSuccessResponse<Resource> | ApiErrorResponse> {
    try {
      const data = (await baseService.get(`/resources/${id}`)) as Resource;
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

export default ResourcesService;
