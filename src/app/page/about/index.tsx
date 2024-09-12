import Media from "react-media";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export const aboutUsData: {
  name: string;
  position:string;
  personality: string;
  likes: string;
}[] = [{
  name: "HY",
  position: "Animation",
  personality: "I'm a person who likes to draw and watch anime.",
  likes: "I like to draw and watch anime.",
}]

export default function About() {
  return (
    <Media
      queries={{
        small: '(max-width: 768px)',
        large: '(min-width: 769px)',
      }}
    >
      {(matches) => (
        <>
          {matches.small && <Mobile />}
          {matches.large && <Desktop />}
        </>
      )}
    </Media>
  );
}
