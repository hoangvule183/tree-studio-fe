export default function Home() {
  const desktop = () => (
    <div className="relative w-screen h-screen max-md:hidden">
      <video
        src="/videos/home/banner-desktop.mp4"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        className="w-screen h-screen object-cover"
      />
      <div className="absolute top-[25%] left-[10%] text-balance max-w-[350px] text-white select-none">
        <img
          src="/images/common/logo-white.png"
          className="w-[60px] mb-[10px]"
        />
        Tree studio is an art outsourcing studio for game art, concept art,
        2D/3D environment, assets and animations specializing in stylized art
        styles.
      </div>
    </div>
  );

  const mobile = () => (
    <div className="relative w-screen h-screen md:hidden">
      <div className="w-screen h-screen">
        <video
          src="/videos/home/banner-mobile.mp4"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className="relative w-auto h-screen max-w-[unset] animate-background-translate"
        />
      </div>
      <div className="absolute top-[15%] text-balance text-white select-none px-[20px]">
        <img
          src="/images/common/logo-white.png"
          className="w-[60px] mb-[10px]"
        />
        Tree studio is an art outsourcing studio for game art, concept art,
        2D/3D environment, assets and animations specializing in stylized art
        styles.
      </div>
    </div>
  );

  return (
    <>
      {desktop()}
      {mobile()}
    </>
  );
}
