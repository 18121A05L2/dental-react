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
      className={`p-[1.563rem] flex  flex-col gap-6 bg-[#F2F7FB] min-h-screen font-['Kumbh_Sans'] text-[#211F2B] pb-[10rem] ${
        isOpen && "blur "
      } `}
    >
      <div className="flex justify-between">
        <img className="w-[2.125rem] h-[2.125rem]" src="/home/back.png" alt="home"></img>
        <img className="w-[1.57rem] h-[1.57rem]" src="/home/settings.png" alt="settings"></img>
      </div>

      {/* ************************* Card ******************** */}
      <div className="w-[23rem] h-[13.5rem] border-2 rounded-[1.25rem]">
        <img className="bg-blend-overlay w-full h-full " src="/home/card.jpg" alt="card"></img>
      </div>
      <div></div>
      <h1 className="caption">Payment Methods</h1>
      <div className="flex flex-col gap-5">
        <Pinputs icon="/payments/cash.png" />
        <Pinputs icon="/payments/upi.png" />
        <Pinputs icon="/payments/bank.png" />
        <Pinputs icon="/payments/wallet.png" />
        <Pinputs icon="/payments/credit.png" />
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
