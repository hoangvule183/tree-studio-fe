export type Tag = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Group = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Resource = {
  createdAt: string;
  updatedAt: string;
  id: number;
  resource_id: string;
  type: string;
  description: string | null;
  parent_resource_id: string | null;
  is_thumbnail: boolean;
  child_resources: Resource[];
  parent_resource: Resource;
};

export type ProjectGroupTag = {
  createdAt: string;
  updatedAt: string;
  id: number;
  group_id: number;
  tag_id: number;
  project_id: number;
  group: Group;
  tag: Tag;
}

export type Project = {
  id: number;
  folder_id: number;
  project_name: string;
  slug: string;
  description: string;
  start_date: string | null;
  is_show: boolean;
  createdAt: string;
  updatedAt: string;
  thumbnail: Resource | null;
  ProjectGroupTag: ProjectGroupTag[]
};

export type ProjectDetails = {
  resource: Resource;
} & Omit<Project, "thumbnail">;

export type ApiSuccessResponse<T> = {
  data: T;
  status: "success";
};

export type ApiErrorResponse = {
  error: string;
  status: "error";
};
