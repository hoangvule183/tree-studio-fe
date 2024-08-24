import { useRef } from "react";
import ScrollButton from "../../../components/ScrollButton";

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const secondViewRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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
        <div className="h-[300vh]"></div>
      </div>
    </div>
  );
}
