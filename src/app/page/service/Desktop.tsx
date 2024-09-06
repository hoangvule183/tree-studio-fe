import { useEffect, useRef } from "react";
import ScrollButton from "../../../components/ScrollButton";
import { useStore } from "../../../services/zustand/store";
import useProjects from "../../../hooks/use-projects";
import { setPageUrl } from "../../../routes/utils";
import { IPage } from "../../../types";
import { useRouter } from "../../../routes/hook";

export default function Desktop() {
  const { changePage } = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const secondViewRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { groups, tags } = useStore();
  const { data: projects } = useProjects();

  useEffect(() => {
    console.log({ groups });
    console.log({ tags });
    console.log({ projects });
  }, [groups, tags, projects]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y"
    >
      <div className="relative snap-start" ref={heroRef}>
        <video
          src="/videos/service/banner-desktop.mp4"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className="w-screen h-screen object-cover"
        />
        <ScrollButton containerRef={containerRef} nextViewRef={secondViewRef} />
      </div>
      <div ref={secondViewRef} className="w-screen snap-start pb-[150px]">
        <div className="aspect-[2000/1000] w-screen bg-[url(/images/service/1.png)] bg-cover bg-no-repeat py-[7vw]">
          <div className="max-w-[700px] text-[#ffffff] mx-auto">
            <h2 className="text-title text-[22px] font-black">
              FULL CYCLE 2D AND 3D <br /> ART PRODUCTION SERVICES
            </h2>
            <p className="max-w-[400px] text-balance mt-[10px]">
              From beginning to end we'll help create all the visual aspects of
              your project, saving you time and resources for you to go further
              beyond. We'll work closely with you along the way to make sure
              your idea and vision come alive.
            </p>
          </div>
        </div>
        <div className="mt-[-100px]" id="game-art-assets">
          <img src="/images/service/2.png" className="w-[80%]" />
          <div className="mt-[-80px] w-full flex justify-center gap-[20px]">
            <h3 className="text-title text-[20px] font-black text-[rgba(241,110,102,1)]">
              GAME ART & ASSETS
            </h3>
            <p className="mt-[10px] text-[#000000] text-sm max-w-[280px]">
              A good art direction can take your game to the next level and we
              have the skills to make that happen.
            </p>
          </div>
          <div className="mt-[30px] flex justify-center">
            <div className="max-w-[85vw] w-full flex justify-center gap-[15px] flex-wrap">
              {projects &&
                projects
                  .filter(
                    (p) =>
                      p.ProjectGroupTag.findIndex((pgt) =>
                        pgt.group.name.toLowerCase().includes("game art")
                      ) !== -1
                  )
                  .map((project) => (
                    <div
                      onClick={() =>
                        setPageUrl(IPage.PROJECT_DETAILS, project.id)
                      }
                      key={project.id}
                      className="w-[calc(100%/5-(15px*4/5))] aspect-[0.6] rounded-lg bg-orange-400 flex items-end  text-[#ffffff] px-[10px] py-[5px] relative"
                    >
                      {project.thumbnail?.resource_id && (
                        <div className="w-full h-full bg-">
                          <img
                            referrerPolicy="no-referrer"
                            src={`https://lh3.googleusercontent.com/d/${project.thumbnail?.resource_id}`}
                            className="h-[85%] pointer-events-none select-none"
                          />
                        </div>
                      )}
                      <div className="absolute bottom-5 left-5">
                        {
                          project.ProjectGroupTag.find((pgt) =>
                            pgt.group.name.toLowerCase().includes("game art")
                          )?.tag.name
                        }{" "}
                        <br />
                        {
                          project.ProjectGroupTag.find((pgt) =>
                            pgt.group.name.toLowerCase().includes("game art")
                          )?.group.name
                        }
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div id="character-design">
          <div className="relative w-full flex justify-center">
            <img
              src="/images/service/3.png"
              className="w-[45%] absolute top-[-10px] left-0 z-[-1]"
            />
            <img
              src="/images/service/4.png"
              className="w-[13%] absolute top-[-30px] right-0 z-[-1]"
            />
            <div className="mt-[50px] w-full flex justify-center gap-[20px]">
              <h3 className="text-title text-[20px] font-black text-[rgba(93,166,1,1)]">
                CHARACTER DESIGN
              </h3>
              <p className="mt-[10px] text-[#000000] text-sm">
                Creating memorable characters, evoking powerful emotions.
              </p>
            </div>
          </div>
          <div className="mt-[40px] flex justify-center">
            <div className="max-w-[85vw] w-full flex justify-center gap-[15px] flex-wrap">
              {projects &&
                projects
                  .filter(
                    (p) =>
                      p.ProjectGroupTag.findIndex((pgt) =>
                        pgt.group.name.toLowerCase().includes("character")
                      ) !== -1
                  )
                  .slice(0, 3)
                  .map((project) => (
                    <div
                      onClick={() =>
                        setPageUrl(IPage.PROJECT_DETAILS, project.id)
                      }
                      key={project.id}
                      className="w-[calc(100%/3-(15px*2/3))] aspect-[1] rounded-lg bg-green-400 flex items-end  text-[#ffffff] px-[10px] py-[5px] relative"
                    >
                      {project.thumbnail?.resource_id && (
                        <div className="w-full h-full bg-">
                          <img
                            referrerPolicy="no-referrer"
                            src={`https://lh3.googleusercontent.com/d/${project.thumbnail?.resource_id}`}
                            className="h-[85%] pointer-events-none select-none"
                          />
                        </div>
                      )}
                      <div className="absolute bottom-5 left-5">
                        {
                          project.ProjectGroupTag.find((pgt) =>
                            pgt.group.name.toLowerCase().includes("character")
                          )?.tag.name
                        }{" "}
                        <br />
                        {
                          project.ProjectGroupTag.find((pgt) =>
                            pgt.group.name.toLowerCase().includes("character")
                          )?.group.name
                        }
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div id="visual-design">
          <div className="relative w-full flex justify-center">
            <img
              src="/images/service/5.png"
              className="w-[20%] absolute top-[10px] left-[3%] z-[-1]"
            />
            <div className="mt-[50px] w-full flex flex-col items-center justify-center gap-[10px]">
              <h3 className="text-title text-[20px] font-black text-[rgba(74,105,195,1)]">
                VISUAL & DESIGN
              </h3>
              <p className="mt-[10px] text-[#000000] text-sm text-center">
                Designs that catch the eye, leaving a long lasting impression{" "}
                <br />
                on anyone who views them.
              </p>
            </div>
          </div>
          <div className="mt-[40px] flex justify-center">
            <div className="max-w-[85vw] w-full flex justify-center gap-[15px] flex-wrap">
              {projects &&
                projects
                  .filter(
                    (p) =>
                      p.ProjectGroupTag.findIndex((pgt) =>
                        pgt.group.name.toLowerCase().includes("visual")
                      ) !== -1
                  )
                  .slice(0, 3)
                  .map((project) => (
                    <div
                      onClick={() =>
                        setPageUrl(IPage.PROJECT_DETAILS, project.id)
                      }
                      key={project.id}
                      className="w-[100%] aspect-[3] rounded-lg bg-blue-400 flex items-end  text-[#ffffff] px-[10px] py-[5px]"
                    >
                      {project.thumbnail?.resource_id && (
                        <div className="w-full h-full bg-">
                          <img
                            referrerPolicy="no-referrer"
                            src={`https://lh3.googleusercontent.com/d/${project.thumbnail?.resource_id}`}
                            className="h-[85%] pointer-events-none select-none"
                          />
                        </div>
                      )}
                      <div className="absolute bottom-5 left-5">
                        {
                          project.ProjectGroupTag.find((pgt) =>
                            pgt.group.name.toLowerCase().includes("visual")
                          )?.tag.name
                        }{" "}
                        <br />
                        {
                          project.ProjectGroupTag.find((pgt) =>
                            pgt.group.name.toLowerCase().includes("visual")
                          )?.group.name
                        }
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
