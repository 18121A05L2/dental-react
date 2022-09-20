import React from 'react'


function Ratings({icon,heading,text}) {
  return (
    <div className=" relative flex h-[8.13rem] items-end justify-end ">
      <div className="w-[7.25rem] h-[6rem] rounded-[1.87rem]   ds flex justify-center items-center absolute left-0 top-0 z-20 bg-[#F2F7FB] ">
        <img
          className="w-[3rem] h-[3rem] object-contain"
          src={icon}
          alt="icon"
        ></img>
      </div>
      <div className={`w-[18.25rem] h-[6rem] flex justify-center items-center z-0 `}>
        <div className="  flex justify-between items-center gap-[1.5rem]  ">
          <div className="flex flex-col justify-center max-w-[8.6rem] ">
            <h1 className="font-[700]  ">{heading}</h1>
            <p className="font-[600] text-[0.625rem] leading-[0.77rem]   text-[#FF8412] ">
              {text}
            </p>
          </div>
          <img
            className="w-[2.5rem] h-[2.5rem]"
            src="/home/ratingring.png"
            alt="ratingstar"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Ratings