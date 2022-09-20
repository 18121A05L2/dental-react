import React from 'react'

function top() {
  return (
    <div className="top_section">
      <div className="text-black flex justify-between">
        <img
          className="w-[1.5rem] h-[1.5rem] "
          src="/home/menub.png"
          alt="menu"
        ></img>
        <img
          className="w-[1.5rem] h-[1.5rem]"
          src="/home/settings.png"
          alt="settings"
        ></img>
      </div>
      <div className="flex justify-between">
        <h1 className=" font-['Kumbh_Sans'] font-[900] text-[1.75rem] leading-[2.2rem] text-[#211F2B] ">
          LET'S <span className="text-[#FF8412]">FIND </span>YOUR CONSULTANT
        </h1>
        <img
          className="w-[4.32rem] h-[4.32rem]"
          src="/home/manpic.png"
          alt="man"
        />
      </div>

      {/* ***************search*********************** */}
      <div className="bg-white flex items-center  max-w-[23rem] h-[2.94rem] rounded-[1.88rem] px-3">
        <img
          className="w-[1.25rem] h-[1.25rem] "
          src="/home/search.png"
          alt="search"
        ></img>
        <input
          className="font-[700] pl-3 outline-none "
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}

export default top