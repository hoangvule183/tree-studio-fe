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
            height: "100px",
            background: "blue",
            clipPath:
              "polygon(32% 29%, 100% 30%, 100% 100%, 7% 100%, 0 83%, 0 0, 21% 0)",
          }}
          className='flex items-center gap-5 justify-center pt-[20px]'
        >
          <select
            value={tmpSortBy}
            onChange={(e) => setTmpSortBy(e.target.value as SortTypeEnum)}
          >
            <option value={SortTypeEnum.NEWEST}>Newest</option>
            <option value={SortTypeEnum.OLDEST}>Oldest</option>
            <option value={SortTypeEnum.NAME_A_TO_Z}>Name (A to Z)</option>
            <option value={SortTypeEnum.NAME_Z_TO_A}>Name (Z to A)</option>
          </select>
          <button  className='bg-[black] text-[white] p-5' onClick={() => setSortBy(tmpSortBy)}>Go</button>
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
                (p, i) =>
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
