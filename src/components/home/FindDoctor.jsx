import React from "react";
import FindBox from "../../images/findbox.png"

function FindDoctor({ text, image }) {
  return (
    <div className=" flex w-[23.2rem] h-[8rem] relative   pl-[2rem]  ">
      <img
        className="w-[8rem] h-[8rem]  absolute z-10 left-0"
        src={image}
        alt="doctorimg"
      ></img>
      <div
        className=" w-[18rem] h-[8rem] absolute -right-[0.8rem] space-y-[1rem] flex items-center  pl-[2.8rem]  "
        style={{
          backgroundImage: `url(${FindBox})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" flex items-center justify-center gap-[1.5rem] ">
          <div className="flex flex-col ">
            <h1 className="font-[700]  leading-[1.25rem] text-base text-[#211F2B] whitespace-nowrap ">
              {text}
            </h1>
            <p className="font-[600] text-[#FF8412]">Dental Sergeon</p>
            <div className="flex gap-1 items-center">
              <img
                className="w-[0.68rem] h-[0.68rem]"
                src="/home/star.png"
                alt="star"
              />
              <p className="font-[600] text-[#FF8412]">4.6</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center ">
            <img
              className=" w-[3.2rem] h-[3.2rem] "
              src="/home/findellipse.png"
              alt="ellipse"
            ></img>
            <div className=" w-[1.68rem] h-[1.68rem] bg-[#DAEBF7] flex items-center justify-center font-[600] rounded-full absolute ">
              <img
                className="w-[0.5rem] h-[1rem]  "
                src="/home/gt.png"
                alt="gt"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDoctor;
