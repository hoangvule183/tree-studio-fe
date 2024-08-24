import { useMemo } from "react";
import useClickButton from "../../hooks/useClickButton";
import { useRouter } from "../../routes/hook";
import { IPage } from "../../types";

export default function PanelMobile() {
  const { changePage, page } = useRouter();

  const [homeClicked, handleClickHome] = useClickButton(() => {
    changePage(IPage.HOME);
  });

  const pages = useMemo(() => {
    return [
      IPage.SERVICE,
      IPage.PORTFOLIO,
      IPage.HOME,
      IPage.ABOUT_US,
      IPage.CONTACT,
    ];
  }, []);

  const [nextPageClicked, handleClickNextPage] = useClickButton(() => {
    const index = pages.indexOf(page.activePage);
    const nextPage = pages[index + 1] || pages[0];
    changePage(nextPage);
  });

  const [prevPageClicked, handleClickPrevPage] = useClickButton(() => {
    const index = pages.indexOf(page.activePage);
    const prevPage = pages[index - 1] || pages[pages.length - 1];
    changePage(prevPage);
  });

  return <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 select-none flex justify-center">
  <svg
    width="60%"
    style={{
      aspectRatio: "501/279",
    }}
    viewBox="0 0 501 279"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="501" height="278.107" fill="url(#pattern0_70_5)" />
    {!prevPageClicked && <rect
      x="49"
      y="130"
      width="130"
      height="124"
      fill="url(#pattern1_70_5)"
      style={{
        cursor: 'pointer'
      }}
      onClick={() => {
        handleClickPrevPage()
      }}
    />}
    {nextPageClicked && <rect
      x="311"
      y="126"
      width="146"
      height="124"
      fill="url(#pattern2_70_5)"
    />}
    {homeClicked && <rect
      x="158"
      y="112"
      width="185"
      height="162"
      fill="url(#pattern3_70_5)"
    />}
    {prevPageClicked && <rect
      x="42"
      y="125"
      width="144"
      height="124"
      fill="url(#pattern4_70_5)"
    />}
    {!nextPageClicked && <rect
      x="316"
      y="129"
      width="130"
      height="124"
      style={{
        cursor: 'pointer'
      }}
      fill="url(#pattern5_70_5)"
      onClick={() => {
        handleClickNextPage()
      }}
    />}
    {!homeClicked && <rect
      x="166"
      y="122"
      width="165"
      height="147"
      fill="url(#pattern6_70_5)"
      style={{
        cursor: 'pointer'
      }}
      onClick={() => {
        handleClickHome()
      }}
    />}
    {page.activePage === IPage.PORTFOLIO && <rect
      x="155"
      y="51"
      width="191"
      height="66"
      fill="url(#pattern7_70_5)"
    />}
    {page.activePage === IPage.SERVICE && <rect
      x="154"
      y="49"
      width="191"
      height="66"
      fill="url(#pattern8_70_5)"
    />}
    {page.activePage === IPage.CONTACT && <rect
      x="151"
      y="51"
      width="191"
      height="66"
      fill="url(#pattern9_70_5)"
    />}
    {page.activePage === IPage.ABOUT_US && <rect
      x="152"
      y="52"
      width="191"
      height="66"
      fill="url(#pattern10_70_5)"
    />}
    <defs>
      <pattern
        id="pattern0_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_70_5"
          transform="matrix(0.00127745 0 0 0.00230137 -0.223553 -4.60614)"
        />
      </pattern>
      <pattern
        id="pattern1_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image1_70_5"
          transform="scale(0.00769231 0.00806452)"
        />
      </pattern>
      <pattern
        id="pattern2_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image2_70_5"
          transform="scale(0.00684932 0.00806452)"
        />
      </pattern>
      <pattern
        id="pattern3_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image3_70_5"
          transform="scale(0.00540541 0.00617284)"
        />
      </pattern>
      <pattern
        id="pattern4_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image4_70_5"
          transform="scale(0.00694444 0.00806452)"
        />
      </pattern>
      <pattern
        id="pattern5_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image5_70_5"
          transform="scale(0.00769231 0.00806452)"
        />
      </pattern>
      <pattern
        id="pattern6_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image6_70_5"
          transform="scale(0.00606061 0.00680272)"
        />
      </pattern>
      <pattern
        id="pattern7_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image7_70_5"
          transform="scale(0.0052356 0.0151515)"
        />
      </pattern>
      <pattern
        id="pattern8_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image8_70_5"
          transform="scale(0.0052356 0.0151515)"
        />
      </pattern>
      <pattern
        id="pattern9_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image9_70_5"
          transform="scale(0.0052356 0.0151515)"
        />
      </pattern>
      <pattern
        id="pattern10_70_5"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image10_70_5"
          transform="scale(0.0052356 0.0151515)"
        />
      </pattern>
      <image
        id="image0_70_5"
        width="1125"
        height="2436"
        xlinkHref="/images/common/mobile/panel.png"
      />
      <image
        id="image1_70_5"
        width="130"
        height="124"
        xlinkHref="/images/common/mobile/left.png"
      />
      <image
        id="image2_70_5"
        width="146"
        height="124"
        xlinkHref="/images/common/mobile/right-clicked.png"
      />
      <image
        id="image3_70_5"
        width="185"
        height="162"
        xlinkHref="/images/common/mobile/home-clicked.png"
      />
      <image
        id="image4_70_5"
        width="144"
        height="124"
        xlinkHref="/images/common/mobile/left-clicked.png"
      />
      <image
        id="image5_70_5"
        width="130"
        height="124"
        xlinkHref="/images/common/mobile/right.png"
      />
      <image
        id="image6_70_5"
        width="165"
        height="147"
        xlinkHref="/images/common/mobile/home.png"
      />
      <image
        id="image7_70_5"
        width="191"
        height="66"
        xlinkHref="/images/common/mobile/portfolio.png"
      />
      <image
        id="image8_70_5"
        width="191"
        height="66"
        xlinkHref="/images/common/mobile/service.png"
      />
      <image
        id="image9_70_5"
        width="191"
        height="66"
        xlinkHref="/images/common/mobile/contact.png"
      />
      <image
        id="image10_70_5"
        width="191"
        height="66"
        xlinkHref="/images/common/mobile/about.png"
      />
    </defs>
  </svg>
</div>
}