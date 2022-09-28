import React, { useState,useEffect } from "react";
import Temperature from "./Temperature";
import TempSlide from "./TempSlide";

function Stemp() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const time = setTimeout(() => {
      setIndex((prev) => prev=== 1 ? 0 : prev+1 )
    },2500)
  
    return () => {
      clearInterval(time)
    }
  }, [index])
  
  return (
    <div className="slideshow overflow-hidden">
      <div
        className="slideshowSlider whitespace-nowrap  "
        style={{
          transform: `translate3d(${-index * 100}%,0,0)`,
          transition: "ease 1000ms",
        }}
      >
        <Temperature />
        <div className="inline-block">
          <div className="grid grid-cols-3 gap-3 ">
            <TempSlide image="/home/sappointment.png" text="Book Appointment" />
            <TempSlide image="/home/sproblem.png" text="Choose Problem" />
            <TempSlide image="/home/smap.png" text="Clinic Map" />
            <TempSlide image="/home/sdoctor.png" text="Find Your Doctor" />
            <TempSlide image="/home/sinsurence.png" text="Insurence" />
            <TempSlide image="/home/sngo.png" text="Donate To NGO" />
          </div>
        </div>
      </div>
      <div className="flex my-6 rounded-full justify-around items-center m-auto w-[2.2rem] h-[0.7rem] shadow-[inset_-1px_-1px_2px_#FFFFFF,inset_1px_1px_2px_#D3E0EB]">
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={` ${
            index === 0 ? "bg-black" : ""
          }  w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB]`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={` ${
            index === 1 ? "bg-black" : ""
          }  w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB]`}
        ></div>
      </div>
    </div>
  );
}

export default Stemp;
