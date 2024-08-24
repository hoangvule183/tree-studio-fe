import useClickButton from "../../hooks/useClickButton";
import { useRouter } from "../../routes/hook";
import { IPage } from "../../types";

export default function PanelDesktop() {
  const { changePage, page } = useRouter();

  const [homeClicked, handleClickHome] = useClickButton(() => {
    changePage(IPage.HOME);
  });
  const [portfolioClicked, handleClickPortfolio] = useClickButton(() => {
    changePage(IPage.PORTFOLIO);
  });

  const [aboutClicked, handleClickAbout] = useClickButton(() => {
    changePage(IPage.ABOUT_US);
  });

  const [contactClicked, handleClickContact] = useClickButton(() => {
    changePage(IPage.CONTACT);
  });

  const [serviceClicked, handleClickService] = useClickButton(() => {
    changePage(IPage.SERVICE);
  });
  return (
    <div className="max-md:hidden">
      <img
        src="/images/common/panel-top.png"
        className="fixed top-0 left-0 right-0 w-screen z-10 pointer-events-none select-none"
      />
      <svg
        width="100%"
        viewBox="0 0 2560 734"
        fill="none"
        style={{
          aspectRatio: "2560 / 734",
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="fixed bottom-0 left-0 right-0 z-10 select-none pointer-events-none"
      >
        <rect width="100%" height="100%" fill="url(#pattern0_65_941)" />
        {contactClicked || page.activePage === IPage.CONTACT ? (
          <rect
            x="1854"
            y="604"
            width="306"
            height="130"
            fill="url(#contact-clicked)"
            style={{
              cursor: "not-allowed",
              pointerEvents: "all",
            }}
          />
        ) : (
          <rect
            x="1856"
            y="611"
            width="294"
            height="112"
            fill="url(#contact)"
            style={{
              cursor: "pointer",
              pointerEvents: "all",
            }}
            onClick={() => {
              if (page.activePage === IPage.CONTACT) return;
              handleClickContact();
            }}
          />
        )}
        {aboutClicked || page.activePage === IPage.ABOUT_US ? (
          <rect
            x="1486"
            y="577"
            width="330"
            height="132"
            fill="url(#about-clicked)"
            style={{
              cursor: "not-allowed",
              pointerEvents: "all",
            }}
          />
        ) : (
          <rect
            x="1486"
            y="577"
            width="328"
            height="126"
            fill="url(#about)"
            style={{
              cursor: "pointer",
              pointerEvents: "all",
            }}
            onClick={() => {
              if (page.activePage === IPage.ABOUT_US) return;
              handleClickAbout();
            }}
          />
        )}
        {homeClicked || page.activePage === IPage.HOME ? (
          <rect
            x="1192"
            y="523"
            width="176"
            height="154"
            fill="url(#home-clicked)"
            style={{
              cursor: "not-allowed",
              pointerEvents: "all",
            }}
          />
        ) : (
          <rect
            x="1207"
            y="541"
            width="146"
            height="128"
            fill="url(#home)"
            style={{
              cursor: "pointer",
              pointerEvents: "all",
            }}
            onClick={() => {
              if (page.activePage === IPage.HOME) return;
              handleClickHome();
            }}
          />
        )}

        {serviceClicked || page.activePage === IPage.SERVICE ? (
          <rect
            x="392"
            y="596"
            width="314"
            height="135"
            fill="url(#service-clicked)"
            style={{
              cursor: "not-allowed",
              pointerEvents: "all",
            }}
          />
        ) : (
          <rect
            x="384"
            y="593"
            width="314"
            height="138"
            fill="url(#service)"
            style={{
              cursor: "pointer",
              pointerEvents: "all",
            }}
            onClick={() => {
              if (page.activePage === IPage.SERVICE) return;
              handleClickService();
            }}
          />
        )}
        {portfolioClicked || page.activePage === IPage.PORTFOLIO ? (
          <rect
            x="729"
            y="574"
            width="343"
            height="139"
            fill="url(#portfolio-clicked)"
            style={{
              cursor: "not-allowed",
              pointerEvents: "all",
            }}
          />
        ) : (
          <rect
            x="729"
            y="574"
            width="328"
            height="139"
            fill="url(#portfolio)"
            style={{
              cursor: "pointer",
              pointerEvents: "all",
            }}
            onClick={() => {
              if (page.activePage === IPage.PORTFOLIO) return;
              handleClickPortfolio();
            }}
          />
        )}

        <defs>
          <pattern
            id="pattern0_65_941"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_65_941"
              transform="matrix(0.000390472 0 0 0.0013624 0 -0.49455)"
            />
          </pattern>
          {contactClicked || page.activePage === IPage.CONTACT ? (
            <pattern
              id="contact-clicked"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image1_65_941"
                transform="matrix(0.00289004 0 0 0.00680272 -0.00286781 0)"
              />
            </pattern>
          ) : (
            <pattern
              id="contact"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image7_65_941"
                transform="matrix(0.00297619 0 0 0.0078125 -0.0014881 0)"
              />
            </pattern>
          )}

          {aboutClicked || page.activePage === IPage.ABOUT_US ? (
            <pattern
              id="about-clicked"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image2_65_941"
                transform="matrix(0.00272109 0 0 0.00680272 -0.000680272 0)"
              />
            </pattern>
          ) : (
            <pattern
              id="about"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image8_65_941"
                transform="matrix(0.00286676 0 0 0.00746269 -0.00168365 0)"
              />
            </pattern>
          )}
          {homeClicked || page.activePage === IPage.HOME ? (
            <pattern
              id="home-clicked"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image3_65_941"
                transform="scale(0.00568182 0.00649351)"
              />
            </pattern>
          ) : (
            <pattern
              id="home"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image10_65_941"
                transform="scale(0.00684932 0.0078125)"
              />
            </pattern>
          )}
          {portfolioClicked || page.activePage === IPage.PORTFOLIO ? (
            <pattern
              id="portfolio-clicked"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image4_65_941"
                transform="matrix(0.00276243 0 0 0.00681665 0 -0.00102349)"
              />
            </pattern>
          ) : (
            <pattern
              id="portfolio"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image5_65_941"
                transform="matrix(0.00292262 0 0 0.00689655 -0.00123003 0)"
              />
            </pattern>
          )}
          {serviceClicked || page.activePage === IPage.SERVICE ? (
            <pattern
              id="service-clicked"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image6_65_941"
                transform="matrix(0.00293255 0 0 0.0068209 0 -0.00133594)"
              />
            </pattern>
          ) : (
            <pattern
              id="service"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image9_65_941"
                transform="matrix(0.00292994 0 0 0.00666667 -0.0156688 0)"
              />
            </pattern>
          )}

          <image
            id="image0_65_941"
            width="2561"
            height="1097"
            xlinkHref="/images/common/panel.png"
          />
          <image
            id="image1_65_941"
            width="348"
            height="147"
            xlinkHref="/images/common/contact-clicked.png"
          />
          <image
            id="image2_65_941"
            width="368"
            height="147"
            xlinkHref="/images/common/about-clicked.png"
          />
          <image
            id="image3_65_941"
            width="176"
            height="154"
            xlinkHref="/images/common/home-clicked.png"
          />
          <image
            id="image4_65_941"
            width="362"
            height="147"
            xlinkHref="/images/common/portfolio-clicked.png"
          />
          <image
            id="image5_65_941"
            width="343"
            height="145"
            xlinkHref="/images/common/portfolio.png"
          />
          <image
            id="image6_65_941"
            width="341"
            height="147"
            xlinkHref="/images/common/service-clicked.png"
          />
          <image
            id="image7_65_941"
            width="337"
            height="128"
            xlinkHref="/images/common/contact.png"
          />
          <image
            id="image8_65_941"
            width="350"
            height="134"
            xlinkHref="/images/common/about.png"
          />
          <image
            id="image9_65_941"
            width="352"
            height="150"
            xlinkHref="/images/common/service.png"
          />
          <image
            id="image10_65_941"
            width="146"
            height="128"
            xlinkHref="/images/common/home.png"
          />
        </defs>
      </svg>
    </div>
  );
}
