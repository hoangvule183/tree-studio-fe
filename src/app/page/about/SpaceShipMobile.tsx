import { useState } from "react";

export default function SpaceShipMobile() {
  const [currentHover, setCurrentHover] = useState("");

  return (
    <div
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setCurrentHover("");
        }
        setCurrentHover("");
      }}
      className="mt-[100px] w-full max-w-[100%]"
    >
      <svg
        width="100%"
        style={{
          aspectRatio: "973/1183",
        }}
        viewBox="0 0 973 1183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="972.945" height="1182.16" fill="url(#pattern0_52_2)" />
        <rect
          x="391.763"
          y="233"
          width="84"
          height="94"
          fill="url(#oab)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("oab");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="444.763"
          y="813"
          width="94"
          height="95"
          fill="url(#pattern4_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("tea");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="535.763"
          y="654"
          width="115"
          height="101"
          fill="url(#pattern7_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("fumi");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="423.763"
          y="584"
          width="72"
          height="76"
          fill="url(#pattern10_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("aka");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="538.763"
          y="214"
          width="104"
          height="126"
          fill="url(#bibi)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("bibi");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />
        <rect
          x="157.763"
          y="684"
          width="110"
          height="99"
          fill="url(#pattern16_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("chep");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="442.763"
          y="1054"
          width="116"
          height="87"
          fill="url(#pattern19_52_2)"
        />
        <rect
          x="442.763"
          y="1054"
          width="116"
          height="87"
          fill="url(#pattern20_52_2)"
        />
        <rect
          x="442.763"
          y="1054"
          width="116"
          height="87"
          fill="url(#pattern21_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("dane");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="796.763"
          y="462"
          width="105"
          height="101"
          fill="url(#pattern24_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("hy");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="517.763"
          y="576"
          width="117.419"
          height="101"
          fill="url(#pattern27_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("jacy");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="277.763"
          y="452"
          width="88"
          height="82"
          fill="url(#meh)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("meh");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="200.763"
          y="188"
          width="112"
          height="113"
          fill="url(#min)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("min");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="605.763"
          y="454"
          width="106"
          height="99"
          fill="url(#pattern36_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("momo");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="365.763"
          y="990"
          width="133"
          height="108"
          fill="url(#pattern39_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("nan");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="483.763"
          y="576"
          width="55"
          height="62"
          fill="url(#pattern42_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("ney");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="299.763"
          y="509"
          width="154"
          height="127"
          fill="url(#pattern45_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("niju");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="455.763"
          y="371"
          width="83"
          height="106"
          fill="url(#niki)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("niki");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="375.763"
          y="654"
          width="110"
          height="88"
          fill="url(#pattern51_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("rey");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="796.763"
          y="318"
          width="165"
          height="180"
          fill="url(#pattern54_52_2)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("sgam");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />

        <rect
          x="459.763"
          y="248"
          width="91.0005"
          height="70"
          fill="url(#sil)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("sil");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />
        <rect
          x="437.763"
          y="128"
          width="137"
          height="105"
          fill="url(#kei)"
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentHover("kei");
          }}
          onMouseLeave={() => setCurrentHover("")}
        />
        {currentHover === "jacy" && (
          <>
            <rect
              x="517.763"
              y="576"
              width="117.419"
              height="101"
              fill="url(#pattern28_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern29_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "fumi" && (
          <>
            <rect
              x="535.763"
              y="654"
              width="115"
              height="101"
              fill="url(#pattern8_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern9_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "sgam" && (
          <>
            <rect
              x="796.763"
              y="318"
              width="165"
              height="180"
              fill="url(#pattern55_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern56_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "hy" && (
          <>
            <rect
              x="796.763"
              y="462"
              width="105"
              height="101"
              fill="url(#pattern25_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern26_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "ney" && (
          <>
            <rect
              x="483.763"
              y="576"
              width="55"
              height="62"
              fill="url(#pattern43_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern44_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "nan" && (
          <>
            <rect
              x="365.763"
              y="990"
              width="133"
              height="108"
              fill="url(#pattern40_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern41_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "dane" && (
          <>
            <rect
              x="442.763"
              y="1054"
              width="116"
              height="87"
              fill="url(#pattern22_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern23_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "tea" && (
          <>
            <rect
              x="444.763"
              y="813"
              width="94"
              height="95"
              fill="url(#pattern5_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern6_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "niki" && (
          <>
            <rect
              x="455.763"
              y="371"
              width="83"
              height="106"
              fill="url(#pattern49_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern50_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "niju" && (
          <>
            <rect
              x="299.763"
              y="509"
              width="154"
              height="127"
              fill="url(#pattern46_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern47_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "rey" && (
          <>
            <rect
              x="375.763"
              y="654"
              width="110"
              height="88"
              fill="url(#pattern52_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern53_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "oab" && (
          <>
            <rect
              x="391.763"
              y="233"
              width="84"
              height="94"
              fill="url(#pattern2_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern3_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "meh" && (
          <>
            <rect
              x="277.763"
              y="452"
              width="88"
              height="82"
              fill="url(#pattern31_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern32_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "momo" && (
          <>
            <rect
              x="605.763"
              y="454"
              width="106"
              height="99"
              fill="url(#pattern37_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern38_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "chep" && (
          <>
            <rect
              x="157.763"
              y="684"
              width="110"
              height="99"
              fill="url(#pattern17_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern18_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "bibi" && (
          <>
            <rect
              x="538.763"
              y="214"
              width="104"
              height="126"
              fill="url(#pattern14_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern15_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "sil" && (
          <>
            <rect
              x="459.763"
              y="248"
              width="91.0005"
              height="70"
              fill="url(#pattern58_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern59_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "aka" && (
          <>
            <rect
              x="423.763"
              y="584"
              width="72"
              height="76"
              fill="url(#pattern11_52_2)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#pattern12_52_2)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "kei" && (
          <>
            <rect
              x="437.763"
              y="128"
              width="137"
              height="105"
              fill="url(#kei-hover)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#kei-content)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {currentHover === "min" && (
          <>
            <rect
              x="200.763"
              y="188"
              width="112"
              height="113"
              fill="url(#min-hover)"
              style={{
                pointerEvents: "none",
              }}
            />
            <rect
              fill="url(#min-content)"
              width="80%"
              x="0"
              y="25%"
              height="50%"
              preserveAspectRatio="xMinYMin slice"
              style={{
                width: "100%",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        <defs>
          <pattern
            id="pattern0_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_52_2"
              transform="scale(0.000521921 0.000429553)"
            />
          </pattern>
          <pattern
            id="oab"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_52_2"
              transform="matrix(0.00604524 0 0 0.00540213 -4.66667 -2.47872)"
            />
          </pattern>
          <pattern
            id="pattern2_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_52_2"
              transform="matrix(0.00604524 0 0 0.00540213 -4.66667 -2.47872)"
            />
          </pattern>
          <pattern
            id="pattern3_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image3_52_2"
              transform="scale(0.0035461 0.00543478)"
            />
          </pattern>
          <pattern
            id="pattern4_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image4_52_2"
              transform="matrix(0.00540213 0 0 0.00534526 -4.73404 -8.55789)"
            />
          </pattern>
          <pattern
            id="pattern5_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image5_52_2"
              transform="matrix(0.00540213 0 0 0.00534526 -4.73404 -8.55789)"
            />
          </pattern>
          <pattern
            id="pattern6_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image6_52_2"
              transform="scale(0.0035461 0.00446429)"
            />
          </pattern>
          <pattern
            id="pattern7_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image7_52_2"
              transform="matrix(0.00441565 0 0 0.00502772 -4.6588 -6.47525)"
            />
          </pattern>
          <pattern
            id="pattern8_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image8_52_2"
              transform="matrix(0.00441565 0 0 0.00502772 -4.6588 -6.47525)"
            />
          </pattern>
          <pattern
            id="pattern9_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image9_52_2"
              transform="scale(0.0035461 0.00588235)"
            />
          </pattern>
          <pattern
            id="pattern10_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image10_52_2"
              transform="matrix(0.00705278 0 0 0.00668158 -5.88559 -7.68421)"
            />
          </pattern>
          <pattern
            id="pattern11_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image11_52_2"
              transform="matrix(0.00705278 0 0 0.00668158 -5.88559 -7.68421)"
            />
          </pattern>
          <pattern
            id="pattern12_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image12_52_2"
              transform="scale(0.0035461 0.00581395)"
            />
          </pattern>
          <pattern
            id="bibi"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image13_52_2"
              transform="matrix(0.00488269 0 0 0.00403016 -5.18041 -1.69841)"
            />
          </pattern>
          <pattern
            id="pattern14_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image14_52_2"
              transform="matrix(0.00488269 0 0 0.00403016 -5.18041 -1.69841)"
            />
          </pattern>
          <pattern
            id="pattern15_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image15_52_2"
              transform="scale(0.0035461 0.0044843)"
            />
          </pattern>
          <pattern
            id="pattern16_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image16_52_2"
              transform="matrix(0.00461636 0 0 0.00512929 -1.43421 -6.90909)"
            />
          </pattern>
          <pattern
            id="pattern17_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image17_52_2"
              transform="matrix(0.00461636 0 0 0.00512929 -1.43421 -6.90909)"
            />
          </pattern>
          <pattern
            id="pattern18_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image18_52_2"
              transform="scale(0.0035461 0.00588235)"
            />
          </pattern>
          <pattern
            id="pattern19_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image19_52_2"
              transform="matrix(0.00437759 0 0 0.00583678 -3.81692 -12.1149)"
            />
          </pattern>
          <pattern
            id="pattern20_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image19_52_2"
              transform="matrix(0.00437759 0 0 0.00583678 -3.81692 -12.1149)"
            />
          </pattern>
          <pattern
            id="pattern21_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image19_52_2"
              transform="matrix(0.00437759 0 0 0.00583678 -3.81692 -12.1149)"
            />
          </pattern>
          <pattern
            id="pattern22_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image20_52_2"
              transform="matrix(0.00437759 0 0 0.00583678 -3.81692 -12.1149)"
            />
          </pattern>
          <pattern
            id="pattern23_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image21_52_2"
              transform="scale(0.0035461 0.00549451)"
            />
          </pattern>
          <pattern
            id="pattern24_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image22_52_2"
              transform="matrix(0.00483619 0 0 0.00502772 -7.58822 -4.57426)"
            />
          </pattern>
          <pattern
            id="pattern25_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image23_52_2"
              transform="matrix(0.00483619 0 0 0.00502772 -7.58822 -4.57426)"
            />
          </pattern>
          <pattern
            id="pattern26_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image24_52_2"
              transform="scale(0.0035461 0.00546448)"
            />
          </pattern>
          <pattern
            id="pattern27_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image25_52_2"
              transform="matrix(0.00432467 0 0 0.00502772 -4.40951 -5.70297)"
            />
          </pattern>
          <pattern
            id="pattern28_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image26_52_2"
              transform="matrix(0.00432467 0 0 0.00502772 -4.40951 -5.70297)"
            />
          </pattern>
          <pattern
            id="pattern29_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image27_52_2"
              transform="scale(0.0035461 0.00480769)"
            />
          </pattern>
          <pattern
            id="meh"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image28_52_2"
              transform="matrix(0.00577046 0 0 0.00619268 -3.15639 -5.5122)"
            />
          </pattern>
          <pattern
            id="pattern31_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image29_52_2"
              transform="matrix(0.00577046 0 0 0.00619268 -3.15639 -5.5122)"
            />
          </pattern>
          <pattern
            id="pattern32_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image30_52_2"
              transform="scale(0.0035461 0.00543478)"
            />
          </pattern>
          <pattern
            id="min"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image31_52_2"
              transform="matrix(0.00453393 0 0 0.00449381 -1.79252 -1.66372)"
            />
          </pattern>
          <pattern
            id="min-hover"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image32_52_2"
              transform="matrix(0.00453393 0 0 0.00449381 -1.79252 -1.66372)"
            />
          </pattern>
          <pattern
            id="min-content"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image33_52_2"
              transform="scale(0.0035461 0.00543478)"
            />
          </pattern>
          <pattern
            id="pattern36_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image34_52_2"
              transform="matrix(0.00479059 0 0 0.00512929 -5.71477 -4.58586)"
            />
          </pattern>
          <pattern
            id="pattern37_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image35_52_2"
              transform="matrix(0.00479059 0 0 0.00512929 -5.71477 -4.58586)"
            />
          </pattern>
          <pattern
            id="pattern38_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image36_52_2"
              transform="scale(0.0035461 0.00546448)"
            />
          </pattern>
          <pattern
            id="pattern39_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image37_52_2"
              transform="matrix(0.00381805 0 0 0.00470185 -2.7501 -9.16667)"
            />
          </pattern>
          <pattern
            id="pattern40_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image38_52_2"
              transform="matrix(0.00381805 0 0 0.00470185 -2.7501 -9.16667)"
            />
          </pattern>
          <pattern
            id="pattern41_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image39_52_2"
              transform="scale(0.0035461 0.00588235)"
            />
          </pattern>
          <pattern
            id="pattern42_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image40_52_2"
              transform="matrix(0.00923273 0 0 0.00819032 -8.79568 -9.29032)"
            />
          </pattern>
          <pattern
            id="pattern43_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image41_52_2"
              transform="matrix(0.00923273 0 0 0.00819032 -8.79568 -9.29032)"
            />
          </pattern>
          <pattern
            id="pattern44_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image42_52_2"
              transform="scale(0.0035461 0.00588235)"
            />
          </pattern>
          <pattern
            id="pattern45_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image43_52_2"
              transform="matrix(0.0032974 0 0 0.00399843 -1.94651 -4.00787)"
            />
          </pattern>
          <pattern
            id="pattern46_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image44_52_2"
              transform="matrix(0.0032974 0 0 0.00399843 -1.94651 -4.00787)"
            />
          </pattern>
          <pattern
            id="pattern47_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image45_52_2"
              transform="scale(0.0035461 0.00543478)"
            />
          </pattern>
          <pattern
            id="niki"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image46_52_2"
              transform="matrix(0.00611807 0 0 0.00479057 -5.49112 -3.5)"
            />
          </pattern>
          <pattern
            id="pattern49_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image47_52_2"
              transform="matrix(0.00611807 0 0 0.00479057 -5.49112 -3.5)"
            />
          </pattern>
          <pattern
            id="pattern50_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image48_52_2"
              transform="scale(0.0035461 0.00515464)"
            />
          </pattern>
          <pattern
            id="pattern51_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image49_52_2"
              transform="matrix(0.00461636 0 0 0.00577046 -3.41602 -7.43182)"
            />
          </pattern>
          <pattern
            id="pattern52_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image50_52_2"
              transform="matrix(0.00461636 0 0 0.00577046 -3.41602 -7.43182)"
            />
          </pattern>
          <pattern
            id="pattern53_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image51_52_2"
              transform="scale(0.0035461 0.00502513)"
            />
          </pattern>
          <pattern
            id="pattern54_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image52_52_2"
              transform="matrix(0.00307758 0 0 0.00282111 -4.82886 -1.76667)"
            />
          </pattern>
          <pattern
            id="pattern55_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image53_52_2"
              transform="matrix(0.00307758 0 0 0.00282111 -4.82886 -1.76667)"
            />
          </pattern>
          <pattern
            id="pattern56_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image54_52_2"
              transform="scale(0.0035461 0.00546448)"
            />
          </pattern>
          <pattern
            id="sil"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image55_52_2"
              transform="matrix(0.00558019 0 0 0.00725429 -5.0523 -3.54286)"
            />
          </pattern>
          <pattern
            id="pattern58_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image56_52_2"
              transform="matrix(0.00558019 0 0 0.00725429 -5.0523 -3.54286)"
            />
          </pattern>
          <pattern
            id="pattern59_52_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image57_52_2"
              transform="scale(0.0035461 0.00595238)"
            />
          </pattern>
          <pattern
            id="kei"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image58_52_2"
              transform="matrix(0.00370656 0 0 0.00483619 -3.19533 -1.21905)"
            />
          </pattern>
          <pattern
            id="kei-hover"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image59_52_2"
              transform="matrix(0.00370656 0 0 0.00483619 -3.19533 -1.21905)"
            />
          </pattern>
          <pattern
            id="kei-content"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image60_52_2"
              transform="scale(0.0035461 0.00588235)"
            />
          </pattern>
          <image
            id="image0_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/ship.png"
          />
          <image
            id="image1_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/oab.png"
          />
          <image
            id="image2_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/oab-hover.png"
          />
          <image
            id="image3_52_2"
            width="282"
            height="184"
            xlinkHref="/images/about/ship/oab-content.png"
          />
          <image
            id="image4_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/tea.png"
          />
          <image
            id="image5_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/tea-hover.png"
          />
          <image
            id="image6_52_2"
            width="282"
            height="224"
            xlinkHref="/images/about/ship/tea-content.png"
          />
          <image
            id="image7_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/fumi.png"
          />
          <image
            id="image8_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/fumi-hover.png"
          />
          <image
            id="image9_52_2"
            width="282"
            height="170"
            xlinkHref="/images/about/ship/fumi-content.png"
          />
          <image
            id="image10_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/aka.png"
          />
          <image
            id="image11_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/aka-hover.png"
          />
          <image
            id="image12_52_2"
            width="282"
            height="172"
            xlinkHref="/images/about/ship/aka-content.png"
          />
          <image
            id="image13_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/bibi.png"
          />
          <image
            id="image14_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/bibi-hover.png"
          />
          <image
            id="image15_52_2"
            width="282"
            height="223"
            xlinkHref="/images/about/ship/bibi-content.png"
          />
          <image
            id="image16_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/chep.png"
          />
          <image
            id="image17_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/chep-hover.png"
          />
          <image
            id="image18_52_2"
            width="282"
            height="170"
            xlinkHref="/images/about/ship/chep-content.png"
          />
          <image
            id="image19_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/dane.png"
          />
          <image
            id="image20_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/dane-hover.png"
          />
          <image
            id="image21_52_2"
            width="282"
            height="182"
            xlinkHref="/images/about/ship/dane-content.png"
          />
          <image
            id="image22_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/hy.png"
          />
          <image
            id="image23_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/hy-hover.png"
          />
          <image
            id="image24_52_2"
            width="282"
            height="183"
            xlinkHref="/images/about/ship/hy-content.png"
          />
          <image
            id="image25_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/jacy.png"
          />
          <image
            id="image26_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/jacy-hover.png"
          />
          <image
            id="image27_52_2"
            width="282"
            height="208"
            xlinkHref="/images/about/ship/jacy-content.png"
          />
          <image
            id="image28_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/meh.png"
          />
          <image
            id="image29_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/meh-hover.png"
          />
          <image
            id="image30_52_2"
            width="282"
            height="184"
            xlinkHref="/images/about/ship/meh-content.png"
          />
          <image
            id="image31_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/min.png"
          />
          <image
            id="image32_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/min-hover.png"
          />
          <image
            id="image33_52_2"
            width="282"
            height="184"
            xlinkHref="/images/about/ship/min-content.png"
          />
          <image
            id="image34_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/momo.png"
          />
          <image
            id="image35_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/momo-hover.png"
          />
          <image
            id="image36_52_2"
            width="282"
            height="183"
            xlinkHref="/images/about/ship/momo-content.png"
          />
          <image
            id="image37_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/nan.png"
          />
          <image
            id="image38_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/nan-hover.png"
          />
          <image
            id="image39_52_2"
            width="282"
            height="170"
            xlinkHref="/images/about/ship/nan-content.png"
          />
          <image
            id="image40_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/ney.png"
          />
          <image
            id="image41_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/ney-hover.png"
          />
          <image
            id="image42_52_2"
            width="282"
            height="170"
            xlinkHref="/images/about/ship/ney-content.png"
          />
          <image
            id="image43_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/niju.png"
          />
          <image
            id="image44_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/niju-hover.png"
          />
          <image
            id="image45_52_2"
            width="282"
            height="184"
            xlinkHref="/images/about/ship/niju-content.png"
          />
          <image
            id="image46_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/niki.png"
          />
          <image
            id="image47_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/niki-hover.png"
          />
          <image
            id="image48_52_2"
            width="282"
            height="194"
            xlinkHref="/images/about/ship/niki-content.png"
          />
          <image
            id="image49_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/rey.png"
          />
          <image
            id="image50_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/rey-hover.png"
          />
          <image
            id="image51_52_2"
            width="282"
            height="199"
            xlinkHref="/images/about/ship/rey-content.png"
          />
          <image
            id="image52_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/sgam.png"
          />
          <image
            id="image53_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/sgam-hover.png"
          />
          <image
            id="image54_52_2"
            width="282"
            height="183"
            xlinkHref="/images/about/ship/sgam-content.png"
          />
          <image
            id="image55_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/sil.png"
          />
          <image
            id="image56_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/sil-hover.png"
          />
          <image
            id="image57_52_2"
            width="282"
            height="168"
            xlinkHref="/images/about/ship/sil-content.png"
          />
          <image
            id="image58_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/kei.png"
          />
          <image
            id="image59_52_2"
            width="1916"
            height="2328"
            xlinkHref="/images/about/ship/kei-hover.png"
          />
          <image
            id="image60_52_2"
            width="282"
            height="170"
            xlinkHref="/images/about/ship/kei-content.png"
          />
        </defs>
      </svg>
    </div>
  );
}
