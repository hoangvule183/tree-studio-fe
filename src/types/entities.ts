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

export type ApiSuccessResponse<T> = {
  data: T;
  status: "success";
};

export type ApiErrorResponse = {
  error: string;
  status: "error";
};
