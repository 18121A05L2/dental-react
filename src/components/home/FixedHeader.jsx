import React from 'react'

function FixedHeader() {
  return (
    <div className=" fixed rounded-[1.9rem] h-[3.5rem] w-[24.563rem] bg-[#3E387C] py-2 right-[1rem] top-[1rem] left-[1rem] z-50 p-[0.6rem]   text-black flex justify-between items-center pb-3">
      <img
        className="w-[1.5rem] h-[1.5rem] "
        src="/home/menu.png"
        alt="menu"
      ></img>

      {/* {isMenuClicked && (
          <div className=" absolute z-40 flex flex-col gap-2 top-16 bg-[#F2F7FB] p-4 border-2 rounded-[0.7rem]">
            <h1 className='font-[700] text-[0.813rem] leading-[1rem]'>Download App Now!</h1>
            <div className="flex justify-between">
              <img
                className="w-[4.125rem] h-[1.35rem]"
                src="/home/google_store.png"
                alt="google store"
              ></img>
              <img
                className="w-[4.125rem] h-[1.35rem]"
                src="/home/apple_store.png"
                alt="apple store"
              ></img>
            </div>
            <div className=" w-[4.625rem] h-[1.375] flex items-center justify-between ml-auto">
              <p className="font-[700] text-[0.625rem] leading-[0.75rem]">
                Continue
              </p>
              <div className=" flex items-center justify-center rounded-full h-[1.375rem] w-[1.375rem] bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
                <img className="w-[0.714rem] h-[0.625rem]" src="/home/arrow.png" alt="arrow"></img>
              </div>
            </div>
          </div>
        )} */}

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