export default function LoadingBar({ percentage = 0 }: { percentage: number }) {
  return (
    <div className="w-full flex items-end relative justify-center">
      <img
        src="/images/common/loading-bar.png"
        className="w-[40%] mx-auto bg-[#606060]    max-[725px]:w-[95%]"
      />
      <h1
        className="font-['UpheavalPro'] text-[white] absolute w-[35%] 
          max-[1500px]:text-[2rem]
          max-[1000px]:text-[1.5rem]         
          max-[725px]:text-[2rem] max-[725px]:w-[12%]
        right-[0] -top-[5px] z-[100] text-[3rem]"
      >
        {Math.floor(percentage)}%
      </h1>
      <div className="absolute w-[39%] 
       max-[725px]:w-[94%]
      aspect-[14] mx-auto mb-[0.3%] flex bg-[#606060] gap-[10px] px-[10px] py-[5px] flex-wrap items-center justify-start">
        {Array(Math.floor(percentage / 5))
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              style={{
                width: "calc((100% / 20) - 9.5px)",
              }}
              className="h-full bg-[white]"
            />
          ))}
      </div>
    </div>
  );
}
