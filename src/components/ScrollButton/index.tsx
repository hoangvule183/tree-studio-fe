import { useEffect, useState } from "react";

export default function ScrollButton ({
  containerRef,
  nextViewRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  nextViewRef: React.RefObject<HTMLDivElement>;
}) {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const container = containerRef.current
    const handleScroll = () => {
      if (container?.scrollTop && container?.scrollTop > 0) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    }
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  if (!showScroll) {
    return null;
  }

  return <div className="absolute bottom-[18%] left-0 right-0 flex justify-center pointer-events-none">
    <img
      src="/images/common/scroll.png"
      className="w-[60px] pointer-events-auto cursor-pointer"
      onClick={() => {
        nextViewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }}
    />
  </div>
}