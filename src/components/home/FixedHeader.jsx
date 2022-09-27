import React from 'react'

function FixedHeader() {
  return (
    <div className=" fixed rounded-[1.9rem] h-[3.5rem] w-[24.563rem] bg-[#3E387C] py-2 right-[1rem] top-[1rem] left-[1rem] z-50 p-[0.6rem]   text-black flex justify-between items-center pb-3">
      <img
        className="w-[1.5rem] h-[1.5rem] "
        src="/home/menu.png"
        alt="menu"
      ></img>



      <div className=" bg-[#3E387C]   flex justify-around shadow-[0px_0px_8px_3px_#332E64] rounded-full text-black w-[20rem] h-[2.5rem]">
        <div className=" flex justify-evenly px-2 items-center w-[6.9rem] h-[2.5rem] rounded-full  ">
          <img
            className="w-[1.125rem] h-[1.125rem]"
            src="/home/cities.png"
            alt="cities"
          ></img>
          <p className=" font-[700] text-[0.813rem] leading-[1rem] text-white">
            50 Cities
          </p>
        </div>
        <div className=" flex justify-evenly px-2 gap-1 items-center w-[8rem] h-[2.5rem] rounded-full  ">
          <img
            className="w-[0.94rem] h-[1.125rem]"
            src="/home/patients.png"
            alt="patients"
          ></img>
          <p className=" font-[700] text-[0.813rem] leading-[1rem] whitespace-nowrap text-white">
            1 Lakh Patients
          </p>
        </div>
        <div className=" flex justify-evenly px-2  items-center w-[6.9rem] h-[2.5rem] rounded-full  ">
          <img
            className="w-[0.813rem] h-[1.125rem]"
            src="/home/clinics.png"
            alt="clinic"
          ></img>
          <p className=" font-[700] text-[0.813rem] leading-[1rem] text-white">
            60 Clinics
          </p>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader