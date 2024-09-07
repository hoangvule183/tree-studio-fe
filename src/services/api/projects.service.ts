import {
  ApiErrorResponse,
  ApiSuccessResponse,
  Project,
  ProjectDetails,
} from "../../types/entities";
import baseService from "./baseAxios";

export type SearchProjectsParams = {
  groupIds?: number[];
  tagIds?: number[];
  q?: string;
};

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
  async searchProjects(query: SearchProjectsParams) {
    try {
      const { groupIds, tagIds, q } = query;
      const data = (await baseService.get(`/projects/search`, {
        params: {
          group_id: groupIds ?? [],
          tag_id: tagIds ?? [],
        },
        paramsSerializer: {
          indexes: null
        }
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
