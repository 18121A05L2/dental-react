import React, { useState } from "react";

function Insurence({ icon, text }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-[23.3rem] h-[6.83rem] rounded-[1.875rem] shadow-[10px_10px_20px_0px_#D3E7F6,-10px_-10px_20px_0px_#FFFFFF] flex items-center justify-between relative  ">
      <div className="h-[6.83rem] flex items-center justify-between">
        <img
          className="w-[6rem] h-[2.1rem] object-contain "
          src={icon}
          alt="icon"
        ></img>
      </div>

      <div className=" h-[6.83rem] w-[17rem] rounded-[1.875rem] p-[1.25rem] shadow-[inset_10px_10px_20px_0px_#D3E7F6,inset_-10px_-10px_20px_0px_#FFFFFF] flex justify-between items-center   ">
        <p className="max-w-[10.63rem]  font-[700] text-[1rem] leading-[1.25rem]">
          {text}
        </p>
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="relative  flex items-center "
        >
          <img
            className="w-[2.7rem] h-[2.7rem] "
            src="/home/ellipsewhite.png"
            alt="ellipse White"
          ></img>
          {isClicked && (
            <div className="w-[0.8rem] h-[0.8rem] right-[0.93rem] top-[0.97rem] rounded-full bg-[#FF8412] absolute shadow-[0px_0Px_10px_5px_#E0965B]"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Insurence;
