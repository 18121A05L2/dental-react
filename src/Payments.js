import React from "react";
import Pinputs from "./components/payments/Pinputs";
import FixedBottom from "./components/payments/FixedBottom";
import Modal from "./components/payments/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "./atom/ModalState";

function Payments() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div
      className={`p-[1.563rem] pt-[5.063rem] flex  flex-col gap-6 bg-[#F2F7FB] min-h-screen font-['Kumbh_Sans'] text-[#211F2B] pb-[10rem] ${
        isOpen && "blur "
      } `}
    >
      {/* ***************************** fixed Header ***************** */}
      <div className=" fixed rounded-[1.9rem] h-[3.5rem] w-[24.563rem] bg-[#2B275A] py-2 right-[1rem] top-[1rem] left-[1rem] z-50 p-[0.6rem]   text-black flex justify-between items-center pb-3">
        <img
          className="w-[1.5rem] h-[1.5rem] "
          src="/home/menub.png"
          alt="menu"
        ></img>

        <div className=" bg-[#2B275A]   flex justify-around shadow-[-3px_-3px_5px_#35306A,3px_3px_5px_#201D4D] rounded-full text-black w-[20rem] h-[2.5rem]">
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

      <div className="flex justify-between ">
        <img
          className="w-[2.125rem] h-[2.125rem]"
          src="/home/back.png"
          alt="home"
        ></img>
        <img
          className="w-[1.57rem] h-[1.57rem]"
          src="/home/settings.png"
          alt="settings"
        ></img>
      </div>

      {/* ************************* Card ******************** */}
      <div className="w-[23.5rem] h-[13.5rem] border-2 rounded-[1.25rem]">
        <img
          className="bg-blend-overlay w-full h-full "
          src="/home/card.jpg"
          alt="card"
        ></img>
      </div>
      <div></div>
      <h1 className="caption">Payment Methods</h1>
      <div className="flex flex-col gap-5">
        <Pinputs
          icon="/payments/cash.png"
          text="Pay At Clinic"
          heading="Cash"
        />
        <Pinputs
          icon="/payments/upi.png"
          text="GooglePay, PhonePe,."
          heading="UPI"
        />
        <Pinputs
          icon="/payments/bank.png"
          text="All Indian Banks"
          heading="Net Banking"
        />
        <Pinputs
          icon="/payments/wallet.png"
          text="All Indian Banks"
          heading="Wallet"
        />
        <Pinputs icon="/payments/credit.png" text="Visa, Master.." heading="Card"/>
      </div>
      <div className="h-[3.57rem]  flex justify-center items-center border rounded-full bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]  shadow-[10px_10px_20px_4px_#D2E1ED,-10px_-10px_20px_0px_#FFFFFF] text-white caption ">
        Confirm
      </div>
      <Modal></Modal>
      <FixedBottom />
    </div>
  );
}

export default Payments;
