export default function LoadingBar({ percentage = 0 }: { percentage: number }) {
  return (
    <div className="w-full flex items-end relative justify-center">
      <img src="/images/common/loading-bar.png" className="w-[40%] mx-auto bg-[#606060]" />
      <div className="absolute w-[39%] aspect-[14] mx-auto mb-[0.3%] flex bg-[#606060] gap-[10px] px-[10px] py-[5px] flex-wrap items-center justify-start">
        {Array(Math.floor(percentage / 5)).fill("").map((_, i) => 
        <div key={i} 
        style={{
            width: 'calc((100% / 20) - 9.5px)',
        }}
        className="h-full bg-[white]"/>
        )}
        </div>
    </div>
  );
}
