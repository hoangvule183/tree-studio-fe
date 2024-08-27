import { ApiErrorResponse, ApiSuccessResponse, Group } from "../types/entities";
import baseService from "./baseAxios";

const GroupsService = {
  async getAll(): Promise<ApiSuccessResponse<Group> | ApiErrorResponse> {
    try {
      const data = (await baseService.get("/groups")) as Group;
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

export default GroupsService;
