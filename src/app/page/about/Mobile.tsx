export default function Mobile () {
  return <div className="w-screen h-screen">
  <div className="w-screen h-screen">
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
</div>
}