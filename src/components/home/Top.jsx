import React,{useState} from 'react'

function Top() {
  const [inputText, setInputText] = useState("")
  const [isMenuClicked,setIsMenuClicked] = useState(false)
  console.log("Input text : "+inputText)

  return (
    <div className="top_section">
      <div className=" fixed rounded-xl bg-[#F2F7FB] py-2 right-[1rem] top-[1rem] left-[1rem] z-50 p-[0.6rem]   text-black flex justify-between items-center pb-3">
        <img
          onClick={() => setIsMenuClicked(!isMenuClicked)}
          className="w-[1.5rem] h-[1.5rem] "
          src="/home/menub.png"
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

        <div className=" bg-[#F2F7FB] flex justify-around shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#D3E7F7] rounded-full text-black w-[20rem] h-[2.5rem]">
          <div className=" flex justify-evenly px-2 items-center w-[6.9rem] h-[2.5rem] rounded-full  ">
            <img
              className="w-[1.125rem] h-[1.125rem]"
              src="/home/cities.png"
              alt="cities"
            ></img>
            <p className=" font-[700] text-[0.813rem] leading-[1rem]">
              50 Cities
            </p>
          </div>
          <div className=" flex justify-evenly px-2 items-center w-[8rem] h-[2.5rem] rounded-full  ">
            <img
              className="w-[0.94rem] h-[1.125rem]"
              src="/home/patients.png"
              alt="patients"
            ></img>
            <p className=" font-[700] text-[0.813rem] leading-[1rem] whitespace-nowrap">
              1Lakh Patients
            </p>
          </div>
          <div className=" flex justify-evenly px-2 items-center w-[6.9rem] h-[2.5rem] rounded-full  ">
            <img
              className="w-[0.813rem] h-[1.125rem]"
              src="/home/clinics.png"
              alt="clinic"
            ></img>
            <p className=" font-[700] text-[0.813rem] leading-[1rem]">
              60 Clinics
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-2">
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
      <div className="bg-white flex items-center  w-[100%] h-[2.94rem] rounded-[1.88rem] px-3">
        <img
          className="w-[1.25rem] h-[1.25rem] "
          src="/home/search.png"
          alt="search"
        ></img>
        <input
          onChange={(e) => setInputText(e.target.value)}
          className="font-[700] pl-3 outline-none "
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}

export default Top