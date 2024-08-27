import {
  ApiErrorResponse,
  ApiSuccessResponse,
  Project,
  ProjectDetails,
} from "../types/entities";
import baseService from "./baseAxios";

const ProjectsService = {
  async getAll(): Promise<ApiSuccessResponse<Project[]> | ApiErrorResponse> {
    try {
      const data = (await baseService.get("/projects")) as Project[];
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
  async getById(
    id: number
  ): Promise<ApiSuccessResponse<ProjectDetails> | ApiErrorResponse> {
    try {
      const data = (await baseService.get(`/projects/${id}`)) as ProjectDetails;
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
  async searchProjects(query: {
    groupIds?: string[];
    tagIds?: string[];
    q?: string;
  }) {
    try {
      const { groupIds, tagIds, q } = query;
      const data = (await baseService.get(`/projects/search`, {
        params: {
          group_id: groupIds ?? [],
          tag_id: tagIds ?? [],
        },
      })) as Project[];
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

export default ProjectsService;
