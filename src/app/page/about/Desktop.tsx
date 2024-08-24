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
      <div ref={secondViewRef} className="w-screen snap-start">
        <img src="/images/about/temp.png" className="w-screen" />
      </div>
    </div>
  );
}
