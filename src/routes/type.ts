import { IPage } from "../types";

type Transition = {
  in?: {
    [key: string]: string;
    default: string;
  } | string
  out?: string | {
    [key: string]: string;
    default: string;
  } | string;
  single?: {
    [key: string]: string;
    default: string;
  } | string
}

type RouteTransition = {
  desktop?: Transition;
  mobile?: Transition;
};

export interface IRoute {
  page: IPage;
  content: React.ReactNode;
  transition?: RouteTransition;
}

export interface IRouter {
  routes: IRoute[];
}
