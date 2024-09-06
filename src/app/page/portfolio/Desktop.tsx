import { useRef } from "react";
import ScrollButton from "../../../components/ScrollButton";
import useProjects from "../../../hooks/use-projects";
import { useRouter } from "../../../routes/hook";
import { IPage } from "../../../types";

export default function Desktop() {
  const { changePage } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const secondViewRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { data: projects } = useProjects();

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y"
    >
      <div className="relative snap-start" ref={heroRef}>
        <video
          src="/videos/portfolio/banner-desktop.mp4"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className="w-screen h-screen object-cover"
        />
        <ScrollButton containerRef={containerRef} nextViewRef={secondViewRef} />
      </div>
      <div
        ref={secondViewRef}
        className="w-screen bg-[url(/images/portfolio/bg.png)] bg-cover snap-start"
      >
        <div className="flex flex-wrap gap-[15px] w-[55%] mx-auto pt-[125px] pb-[200px]">
          {projects &&
            projects.map(
              (p) =>
                p.thumbnail?.resource_id && (
                  <div
                  onClick={() => changePage(IPage.PROJECT_DETAILS, p.id)}
                    style={{
                      width: "calc((100% / 3) - 15px)",
                    }}
                    className="aspect-square rounded-md overflow-hidden hover:shadow-xl transition-all"
                    key={p.id}
                  >
                    <img
                      referrerPolicy="no-referrer"
                      src={`https://lh3.googleusercontent.com/d/${p.thumbnail.resource_id}`}
                      className="w-[100%] h-[100%] pointer-events-none select-none"
                    />
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}
