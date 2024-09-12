import { useEffect, useRef, useState } from "react";
import ScrollButton from "../../../components/ScrollButton";
import { useRouter } from "../../../routes/hook";
import { IPage } from "../../../types";
import SpaceShip from "./SpaceShip";

export default function Desktop() {
  const { page } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const secondViewRef = useRef<HTMLDivElement>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [modalPos, setModalPos] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    if (page?.activePage === IPage.ABOUT_US) {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page.activePage]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen max-md:hidden overflow-y-scroll snap-mandatory snap-y"
    >
      <div className="relative snap-start" ref={heroRef}>
        <video
          src="/videos/about/banner-desktop.mp4"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className="w-screen h-screen object-cover"
        />
        <ScrollButton containerRef={containerRef} nextViewRef={secondViewRef} />
      </div>
      <div ref={secondViewRef} className="w-screen snap-start relative">
        <div className=" bg-[url(/images/about/about-us-bg.png)] w-sreen bg-cover bg-center min-h-screen flex flex-col align-center justify-center pb-[300px]">
          <div className="w-[65%] flex justify-center mx-auto">
            <SpaceShip />
          </div>
          <div className="w-full flex justify-center items-center mt-[300px] relative">
            <img src="/images/about/about-us-album.png" className="w-[70%]" />
            <div className="absolute w-[41%] mx-auto aspect-video rounded-lg shadow-2xl overflow-hidden">
              <video
                src="/videos/about/banner-desktop.mp4"
                autoPlay={true}
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <img src="/images/about/temp.png" className="w-screen" />
        {hoverId && (
          <div
            style={{
              left: `${modalPos?.x}%`,
              top: `${modalPos?.y}%`,
              background: `url(/images/about/member-info/member-${hoverId}.png)`,
              backgroundSize: 'cover',
              backgroundPosition: "center",
            }}
            className={`absolute z-[1001] translate-x-[20%]  -translate-y-[10%] bg-[red] w-[20%] aspect-video
            `}
          >
          </div>
        )}
        <div
          onMouseEnter={() => {
            setHoverId(1);
            setModalPos({ x: 51, y: 27 });
          }}
          onMouseLeave={() => {
            setHoverId(null);
            setModalPos(null);
          }}
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[28.4%] z-[1000] left-[49.5%] w-[7%] aspect-square rounded-full bg-green-400"
        ></div>

        <div
          onMouseEnter={() => {
            setHoverId(2);
            setModalPos({ x: 55.5, y: 30.4 });
          }}
          onMouseLeave={() => {
            setHoverId(null);
            setModalPos(null);
          }}
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[30.4%] z-[1000] left-[55.5%] w-[9%] aspect-square rounded-full bg-green-400 opacity-0 hover:opacity-100"
        ></div>

        <div
          onClick={() => alert(true)}
          onMouseEnter={() => {
            setHoverId(3);
            setModalPos({ x: 48, y: 30 });
          }}
          onMouseLeave={() => {
            setHoverId(null);
            setModalPos(null);
          }}
          className="mix-blend-overlay cursor-pointer absolute top-[31%] z-[1000] left-[48%] w-[7%] aspect-square rounded-full bg-green-400 opacity-0 hover:opacity-100"
        ></div>

        <div
          onMouseEnter={() => {
            setHoverId(4);
            setModalPos({ x: 43.5, y: 30 });
          }}
          onMouseLeave={() => {
            setHoverId(null);
            setModalPos(null);
          }}
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[31.2%] z-[1000] left-[43%] w-[6%] aspect-square rounded-full bg-green-400 opacity-0 hover:opacity-100"
        ></div>

        <div
          onMouseEnter={() => {
            setHoverId(5);
            setModalPos({ x: 30.5, y: 29 });
          }}
          onMouseLeave={() => {
            setHoverId(null);
            setModalPos(null);
          }}
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[30%] z-[1000] left-[29%] w-[7%] aspect-square rounded-full bg-green-400 opacity-0 hover:opacity-100"
        ></div>

        <div
          onMouseEnter={() => {
            setHoverId(6);
            setModalPos({ x: 48.5, y: 34.5 });
          }}
          onMouseLeave={() => {
            setHoverId(null);
            setModalPos(null);
          }}
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[36%] z-[1000] left-[47%] w-[7%] aspect-square rounded-full bg-green-400 opacity-100 hover:opacity-100"
        ></div> */}
      </div>
    </div>
  );
}
