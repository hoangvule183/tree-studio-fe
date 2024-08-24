import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import React from "react";

const TransitionLoader = React.memo(
  ({ src, onCompleted }: { src: string; onCompleted: () => void }) => {
    if (src.endsWith(".json")) {
      return (
        <Player
          autoplay
          speed={0.5}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          className="fixed top-0 left-0 bottom-0 right-0 z-[1]"
          keepLastFrame
          src={src}
          onEvent={(event) => {
            if (event === PlayerEvent.Complete) {
              onCompleted();
            }
          }}
          style={{ height: "100vh", width: "100vw" }}
        />
      );
    }

    return (
      <video
        src={src}
        autoPlay
        playsInline
        muted
        preload="auto"
        onEnded={() => {
          onCompleted();
        }}
        className="w-screen h-screen object-cover fixed top-0 left-0 right-0 bottom-0 z-[1]"
      />
    );
  }
);

export default TransitionLoader;
