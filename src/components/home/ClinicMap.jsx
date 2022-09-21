import React from "react";

function ClinicMap() {
  return (
    <div className="clinic_map ">
      <img
        className="w-[10.81rem] h-[7.75rem]"
        src="/home/clinic.png"
        alt="clinic"
      ></img>
      <div className=" flex flex-col gap-[1rem] ">
        <div>
          <h2 className="font-[700] text-[1rem] leading-[1.162] ">
            Dental Clinic
          </h2>
          <span className=" text-[#FF8412] font-[400] text-[0.69rem] ">
            12/2, Mathura Road, Sector 37, Faridabad - Delhi
          </span>
        </div>

        <div className=" w-[8.5rem] h-[3rem] rounded-l-[0.625rem] rounded-r-[1.875rem]  flex justify-center items-center   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
          <p className="font-[700]  text-white ">Open Map</p>
        </div>
      </div>
    </div>
  );
}

export default ClinicMap;
