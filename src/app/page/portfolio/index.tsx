import Media from "react-media";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export enum SortTypeEnum  {
  NEWEST = "NEWEST",
  OLDEST = "OLDEST",
  NAME_A_TO_Z = "NAME_A_TO_Z",
  NAME_Z_TO_A = "NAME_Z_TO_A"
}

export default function Portfolio() {
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
