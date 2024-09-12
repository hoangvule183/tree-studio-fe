import { useEffect, useRef } from "react";
import ScrollButton from "../../../components/ScrollButton";
import { useRouter } from "../../../routes/hook";
import { IPage } from "../../../types";
import SpaceShip from "./SpaceShip";

export default function Desktop() {
  const { page } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const secondViewRef = useRef<HTMLDivElement>(null);

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
                src="/videos/about/about-us-album-video.mp4"
                autoPlay={false}
                muted
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
