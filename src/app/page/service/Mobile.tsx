import { useMemo } from "react";
import { useRouter } from "../../../routes/hook";
import useProjects from "../../../hooks/use-projects";
import { useStore } from "../../../services/zustand/store";
import { IPage } from "../../../types";

export default function Mobile() {
  const { changePage, page } = useRouter();
  const groups = useStore((state) => state.groups);
  const { data: projects } = useProjects(page.activePage === IPage.SERVICE);
  const gameArtProjects = useMemo(
    () =>
      projects
        ? projects.filter(
            (p) =>
              p.ProjectGroupTag.findIndex((pgt) =>
                pgt.group.name.toLowerCase().includes("game art")
              ) !== -1
          )
        : [],
    [projects]
  );

  const characterProjects = useMemo(
    () =>
      projects
        ? projects.filter(
            (p) =>
              p.ProjectGroupTag.findIndex((pgt) =>
                pgt.group.name.toLowerCase().includes("character")
              ) !== -1
          )
        : [],
    [projects]
  );

  const visualProjects = useMemo(
    () =>
      projects
        ? projects.filter(
            (p) =>
              p.ProjectGroupTag.findIndex((pgt) =>
                pgt.group.name.toLowerCase().includes("visual")
              ) !== -1
          )
        : [],
    [projects]
  );

  return (
    <div className="w-screen h-[102vh]">
      <div className="w-screen h-[100%] overflow-y-auto snap-mandatory snap-y">
        <div className="w-screen h-[100%] snap-start">
          <video
            src="/videos/service/banner-mobile.mp4"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            className="relative w-auto h-screen max-w-[unset] animate-background-translate"
          />
        </div>
        <div className="w-screen min-h-[100%] snap-start relative">
          <div
            className="bg-[url(/images/about/about-us-bg.png)] w-screen
           bg-cover bg-center min-h-screen flex flex-col align-center justify-center pt-[50px] pb-[200px]"
          >
            <div className="w-[90%] mx-auto aspect-video relative bg-[url(/images/service/services-art-assets.png)] bg-cover bg-center bg-no-repeat">
              <div className="absolute right-0 w-[49.4%] h-[55.2%] top-[22.5%]">
                {gameArtProjects?.length > 0 && (
                  <img
                   onClick={() => {
                    if (groups.length === 0) return;
                    const group = groups.find((g) =>
                      g.name.toLowerCase().includes("game art")
                    );
                    if (!group) return;
                    changePage(IPage.PORTFOLIO, group.id);
                  }}
                    
                    src={`https://lh3.googleusercontent.com/d/${
                      gameArtProjects.filter((p) => p.thumbnail?.resource_id)[0]
                        .thumbnail?.resource_id
                    }`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <div
              className="w-[90%] mx-auto aspect-video relative flex flex-col items-center 
            justify-center bg-[url(/images/service/services-mobile-characters.png)] bg-cover bg-center bg-no-repeat"
            >
                <div className="absolute right-0 w-[49.4%] h-[55.2%] top-[22.5%]">
                {characterProjects?.length > 0 && (
                  <img
                  onClick={() => {
                    if (groups.length === 0) return;
                    const group = groups.find((g) =>
                      g.name.toLowerCase().includes("character")
                    );
                    if (!group) return;
                    changePage(IPage.PORTFOLIO, group.id);
                  }}
                    src={`https://lh3.googleusercontent.com/d/${
                      characterProjects.filter((p) => p.thumbnail?.resource_id)[0]
                        .thumbnail?.resource_id
                    }`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <div
              className="w-[90%] mx-auto aspect-video flex flex-col items-center relative
            justify-center bg-[url(/images/service/services-mobile-visual.png)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute right-0 w-[49.4%] h-[55.2%] top-[22.5%]">
                {visualProjects?.length > 0 && (
                  <img
                  onClick={() => {
                    if (groups.length === 0) return;
                    const group = groups.find((g) =>
                      g.name.toLowerCase().includes("visual")
                    );
                    if (!group) return;
                    changePage(IPage.PORTFOLIO, group.id);
                  }}
                    src={`https://lh3.googleusercontent.com/d/${
                      visualProjects.filter((p) => p.thumbnail?.resource_id)[0]
                        .thumbnail?.resource_id
                    }`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
