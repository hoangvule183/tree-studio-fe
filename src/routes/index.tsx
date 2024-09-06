import About from "../app/page/about";
import Contact from "../app/page/contact";
import Home from "../app/page/home";
import Portfolio from "../app/page/portfolio";
import ProjectDetails from "../app/page/project";
import OurServices from "../app/page/service";
import { IPage } from "../types";
import { IRoute } from "./type";

const routes: IRoute[] = [
  {
    page: IPage.HOME,
    content: <Home />,
    transition: {
      desktop: {
        in: "/transition/home/in.json",
        out: "/transition/home/out.json",
      },
      mobile: {
        in: "/transition/home/in.json",
        out: "/transition/home/out.json",
      },
    },
  },
  {
    page: IPage.SERVICE,
    content: <OurServices />,
    transition: {
      desktop:
       {
              single: {
                [IPage.HOME]: "/transition/service/home.mp4",
                [IPage.PORTFOLIO]: "/transition/service/portfolio.mp4",
                [IPage.ABOUT_US]: "/transition/service/about.mp4",
                [IPage.CONTACT]: "/transition/service/contact.mp4",
                [IPage.PROJECT_DETAILS]: "/transition/contact/portfolio.mp4",
                default: "/transition/service/home.mp4",
              },
            },
      mobile: {
        in: "/transition/home/in.json",
        out: "/transition/home/out.json",
      },
    },
  },
  {
    page: IPage.PORTFOLIO,
    content: <Portfolio />,
    transition: {
      desktop: {
        single: {
          [IPage.HOME]: "/transition/portfolio/home.mp4",
          [IPage.SERVICE]: "/transition/portfolio/service.mp4",
          [IPage.ABOUT_US]: "/transition/portfolio/about.mp4",
          [IPage.CONTACT]: "/transition/portfolio/contact.mp4",
          default: "/transition/portfolio/home.mp4",
        },
      },
      mobile: {
        in: "/transition/home/in.json",
        out: "/transition/home/out.json",
      },
    },
  },
  {
    page: IPage.ABOUT_US,
    content: <About />,
    transition: {
      desktop: {
        single: {
          [IPage.HOME]: "/transition/about/home.mp4",
          [IPage.PORTFOLIO]: "/transition/about/portfolio.mp4",
          [IPage.SERVICE]: "/transition/about/service.mp4",
          [IPage.CONTACT]: "/transition/about/contact.mp4",
          default: "/transition/about/home.mp4",
        },
      },
      mobile: {
        in: "/transition/home/in.json",
        out: "/transition/home/out.json",
      },
    },
  },
  {
    page: IPage.CONTACT,
    content: <Contact />,
    transition: {
      desktop: {
        single: {
          [IPage.HOME]: "/transition/contact/home.mp4",
          [IPage.PORTFOLIO]: "/transition/contact/portfolio.mp4",
          [IPage.SERVICE]: "/transition/contact/service.mp4",
          [IPage.ABOUT_US]: "/transition/contact/about.mp4",
          default: "/transition/contact/home.mp4",
        },
      },
      mobile: {
        in: "/transition/home/in.json",
        out: "/transition/home/out.json",
      },
    },
  },
  {
    page: IPage.PROJECT_DETAILS,
    content: <ProjectDetails />,
    transition: {
      desktop: {
        single: {
          [IPage.HOME]: "/transition/contact/home.mp4",
          [IPage.PORTFOLIO]: "/transition/contact/portfolio.mp4",
          [IPage.SERVICE]: "/transition/contact/service.mp4",
          [IPage.ABOUT_US]: "/transition/contact/about.mp4",
          default: "/transition/contact/portfolio.mp4",
        },
      },
      mobile: {
        in: "/transition/contact/about.mp4",
        out: "/transition/contact/about.mp4",
      },
    },
  },
];

export default routes;
