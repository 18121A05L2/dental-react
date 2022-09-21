import React from "react";
import RatingInset from "../../images/ratinginset.png";

function Ratings({ icon, heading, text }) {
  return (
    <div className=" relative flex h-[8.13rem] items-end justify-end ">
      <div className="w-[7.25rem] h-[6rem] rounded-[1.87rem]   ds flex justify-center items-center absolute left-0 top-0 z-20 bg-[#F2F7FB] ">
        <img
          className="w-[3rem] h-[3rem] object-contain"
          src={icon}
          alt="icon"
        ></img>
      </div>

      <div
        className={`w-[18.25rem] h-[6rem] flex justify-center items-center z-0 relative  `}
        style={{
          backgroundImage: `url(${RatingInset})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="  flex justify-between items-center gap-[1.5rem]  ">
          <div className="flex flex-col justify-center max-w-[8.6rem] ">
            <h1 className="font-[700]  ">{heading}</h1>
            <p className="font-[600] text-[0.625rem] leading-[0.77rem]   text-[#FF8412] ">
              {text}
            </p>
          </div>
          <div className="relative flex">
            <img
              className="w-[2.6rem] h-[2.6rem] z-10 "
              src="/home/ratingring.png"
              alt="ratingstar"
            ></img>
            <div className=" absolute inset-0  -z-0 w-[2.8rem] h-[2.8rem] border-10 border-[#F2F7FB] rounded-full flex items-center justify-center shadow-[inset_-2px_-2px_4px_0px_#FFFFFF,inset_2px_2px_4px_0px_#D3E7F6]">
              <div className="w-[2rem] h-[2rem]  rounded-full shadow-[-3px_-3px_4px_0px_#FFFFFF,3px_3px_4px_0px_#D3E7F6] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
