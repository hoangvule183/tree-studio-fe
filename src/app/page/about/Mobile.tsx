import SpaceShipMobile from "./SpaceShipMobile";

export default function Mobile() {
  return (
    <div className="w-screen h-[102vh]">
      <div className="w-screen h-[100%] overflow-y-auto snap-mandatory snap-y">
        <div className="w-screen h-screen relative snap-start">
          <video
            src="/videos/about/banner-mobile.mp4"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            className="relative w-auto h-screen max-w-[unset] animate-background-translate"
          />
        </div>
        <div className="w-screen snap-start relative">
          <div className="snap-mandatory snap-y bg-[url(/images/about/about-us-bg.png)] w-sreen bg-cover bg-center min-h-screen flex flex-col align-center justify-center pb-[300px]">
            <div className="w-[100%] snap-start h-screen flex justify-center mx-auto">
              <SpaceShipMobile />
            </div>
            <div className="w-full snap-start flex flex-col justify-center items-center relative pt-10 pb-[400px] gap-10">
              <img src="/images/about/about-us-album-mobile-1.png" className="w-[90%]" />
              <div className="w-[85%] mx-auto aspect-video rounded-lg shadow-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LbS7WSFlrW8"
                  title="Welcome to TREE Studios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <img src="/images/about/about-us-album-mobile-2.png" className="w-[70%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
