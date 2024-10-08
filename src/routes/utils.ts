import { IPage } from "../types";

export function getPageFromUrl(): IPage {
  const pathname = window.location.pathname.toLowerCase().endsWith("/")
    ? window.location.pathname.toLowerCase()
    : window.location.pathname.toLowerCase() + "/";
  if (!pathname.includes("project")) {
    switch (pathname) {
      case "/":
        return IPage.HOME;
      case "/service/":
        return IPage.SERVICE;
      case "/portfolio/":
        return IPage.PORTFOLIO;
      case "/about-us/":
        return IPage.ABOUT_US;
      case "/contact/":
        return IPage.CONTACT;
      default:
        return IPage.HOME;
    }
  } else {
    return IPage.PROJECT_DETAILS;
  }
}

export function setPageUrl(page: IPage, projectId?: number) {
  let url = "";
  switch (page) {
    case IPage.HOME:
      url = "/";
      break;
    case IPage.SERVICE:
      url = "/service";
      break;
    case IPage.PORTFOLIO:
      url = "/portfolio";
      if(projectId) {
        url += `?group=${projectId}`
      }
      break;
    case IPage.ABOUT_US:
      url = "/about-us";
      break;
    case IPage.CONTACT:
      url = "/contact";
      break;
    case IPage.PROJECT_DETAILS:
      url = "/project/" + projectId;
      break;
    default:
      url = "/";
      break;
  }
  window.history.pushState({}, "", url);
}
