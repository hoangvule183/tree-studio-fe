import { useEffect, useRef } from "react";
import ScrollButton from "../../../components/ScrollButton";
import { useRouter } from "../../../routes/hook";
import { IPage } from "../../../types";

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
        <img src="/images/about/temp.png" className="w-screen" />
        {/* <div
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[28.4%] z-[1000] left-[49.5%] w-[7%] aspect-square rounded-full bg-green-400"
        ></div> */}

<div
          onClick={() => alert(true)}
          className="mix-blend-overlay cursor-pointer absolute top-[30.4%] z-[1000] left-[55.5%] w-[9%] aspect-square rounded-full bg-green-400 opacity-0 hover:opacity-100"
        ></div>

        {/* <div
          onClick={() => alert(true)}
          className="mix-blend-lighten cursor-pointer absolute top-[28.4%] z-[1000] left-[51%] w-[5%] aspect-square bg-[red]"
        ></div>

        <div
          onClick={() => alert(true)}
          className="mix-blend-lighten cursor-pointer absolute top-[28.4%] z-[1000] left-[51%] w-[5%] aspect-square bg-[red]"
        ></div> */}
      </div>
    </div>
  );
}
