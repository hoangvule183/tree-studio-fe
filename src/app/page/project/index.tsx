import Media from "react-media";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function ProjectDetails() {
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
