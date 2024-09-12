import { useEffect, useRef, useState } from "react";
import ScrollButton from "../../../components/ScrollButton";
import { useRouter } from "../../../routes/hook";
import { IPage } from "../../../types";
import { useStore } from "../../../services/zustand/store";
import useSearchProjects from "../../../hooks/use-search-projects";
import { SortTypeEnum } from ".";

export default function Desktop() {
  const { changePage, page } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const secondViewRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const groups = useStore((state) => state.groups);
  const [groupIds, setGroupIds] = useState<number[] | null>(null);
  const [tmpSortBy, setTmpSortBy] = useState<SortTypeEnum>(SortTypeEnum.NEWEST);
  const [sortBy, setSortBy] = useState<SortTypeEnum>(SortTypeEnum.NEWEST);
  const { data: projects } = useSearchProjects(
    groupIds ? { groupIds: groupIds } : undefined
  );

  useEffect(() => {
    if (page.activePage === IPage.PORTFOLIO && groups?.length > 0) {
      const url = new URL(window.location.href);
      const groupId = url.searchParams.get("group");
      if (!groupId) {
        setGroupIds(groups.map((g) => g.id));
        return;
      }
      if (isNaN(parseInt(groupId))) return;
      setGroupIds([parseInt(groupId)]);
    }
  }, [page.activePage, groups]);

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
        className="w-screen min-h-screen bg-[url(/images/portfolio/bg.png)] bg-cover snap-start pt-[200px]"
      >
        <div
          style={{
            margin: "auto",
            width: "50%",
            position: "relative",
          }}
          className="flex justify-center items-center pb-[20px]"
        >
          <img
            src="/images/portfolio/filter-bg.png"
            className="w-[70%] absolute mx-[15%] z-[10] max-[1200px]:w-[100%]"
          />
          <div className="w-[62.2%] max-[1200px]:w-[85%]  aspect-[4.1] absolute mx-[15%] z-[15] flex flex-col justify-start items-start px-[25px] py-[10px]">
            <div className="w-full text-[#01fcc6] text-[1.5rem] mt-[10px]">
              SORT BY
            </div>
            <div className="w-full flex mt-[15px] gap-3">
              <div className="flex-1 h-[45px] relative">
                <select
                  className="w-full rounded-md text-[1.2rem] border-solid border-[1px] outline-none bg-transparent border-[#01fcc6] text-[#01fcc6] px-2 h-[100%]"
                  value={tmpSortBy}
                  onChange={(e) => setTmpSortBy(e.target.value as SortTypeEnum)}
                >
                  <option value={SortTypeEnum.NEWEST}>Newest</option>
                  <option value={SortTypeEnum.OLDEST}>Oldest</option>
                  <option value={SortTypeEnum.NAME_A_TO_Z}>
                    Name (A to Z)
                  </option>
                  <option value={SortTypeEnum.NAME_Z_TO_A}>
                    Name (Z to A)
                  </option>
                </select>
                <div className="h-[100%] aspect-square absolute right-[0px] top-0 pointer-events-none">
                  <img
                    src="/images/portfolio/filter-dd-icon.png"
                    className="w-[100%] h-[100%] absolute"
                  />
                </div>
              </div>
              <button
                className="focus:bg-[url(/images/portfolio/filter-go-btn-clicked.png)] bg-[url(/images/portfolio/filter-go-btn-idle.png)] text-[white] h-[45px] aspect-video bg-no-repeat bg-center bg-cover"
                onClick={(e) => {
                  e.currentTarget.blur();
                  setSortBy(tmpSortBy)}}
              ></button>
            </div>
          </div>
        </div>
        <div
          key={sortBy}
          className="flex flex-wrap gap-[25px] w-[55%] mx-auto pt-[125px] pb-[200px]"
        >
          {projects &&
            projects
              .sort((p1, p2) => {
                switch (sortBy) {
                  case SortTypeEnum.NAME_A_TO_Z:
                    return p1.project_name
                      .toLowerCase()
                      .localeCompare(p2.project_name.toLowerCase());
                  case SortTypeEnum.NAME_Z_TO_A:
                    return (
                      p1.project_name
                        .toLowerCase()
                        .localeCompare(p2.project_name.toLowerCase()) * -1
                    );
                  case SortTypeEnum.OLDEST:
                    if (
                      new Date(p1.createdAt).getTime() <
                      new Date(p2.createdAt).getTime()
                    ) {
                      return -1;
                    }
                    if (
                      new Date(p1.createdAt).getTime() >
                      new Date(p2.createdAt).getTime()
                    ) {
                      return 1;
                    }
                    return 0;
                  case SortTypeEnum.NEWEST:
                  default:
                    if (
                      new Date(p1.createdAt).getTime() <
                      new Date(p2.createdAt).getTime()
                    ) {
                      return 1;
                    }
                    if (
                      new Date(p1.createdAt).getTime() >
                      new Date(p2.createdAt).getTime()
                    ) {
                      return -1;
                    }
                    return 0;
                }
              })
              .map(
                (p) =>
                  p.thumbnail?.resource_id && (
                    <div
                      onClick={() => changePage(IPage.PROJECT_DETAILS, p.id)}
                      style={{
                        width: "calc((100% / 3) - 25px)",
                      }}
                      className="aspect-[1/1.05] shadow-xl rounded-md overflow-hidden hover:shadow-2xl 
                      transition-all relative hover:-translate-x-1 hover:-translate-y-1 animate-init-page"
                      key={p.id}
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] transition-all text-balance text-center
                    text-[#fff] font-bold text-[2rem] flex items-center justify-center opacity-0 hover:opacity-100"
                      >
                        {p.project_name}
                      </div>
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
