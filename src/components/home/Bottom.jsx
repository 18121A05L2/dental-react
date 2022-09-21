import React from "react";

export default function Bottom() {
  return (
    <div className=" fixed_bottom ">
      <div className="flex gap-[2rem] items-center d">
        <img
          className="w-[60px] h-[60px] "
          src="/home/push.png"
          alt="icon"
        ></img>
        <img
          className="w-[20px] h-[20px]  "
          src="/home/menu.png"
          alt="icon"
        ></img>
      </div>
      <div className="w-[70px] h-[70px] shadow-[inset_-4px_-4px_30px_0px_#5A54A0,inset_4px_4px_30px_0px_#211D15] flex justify-center items-center rounded-full mx-4">
        <img
          className="w-[28px] h-[28px]"
          src="/home/mode.png"
          alt="icon"
        ></img>
      </div>

      <div className="flex gap-[3rem]">
        <img
          className="w-[20px] h-[20px]"
          src="/home/phone.png"
          alt="icon"
        ></img>
        <img
          className="w-[20px] h-[20px]"
          src="/home/person.png"
          alt="icon"
        ></img>
      </div>
    </div>
  );
}
