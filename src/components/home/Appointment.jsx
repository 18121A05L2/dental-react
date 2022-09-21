import React, { useState } from "react";
import Consultation from "./Consultation";

function Appointment() {
  const [click, setClick] = useState(false);
  const styles = {
    div: "w-[100%] h-[2.94rem] rounded-[1.87rem] shadow-[5px_5px_5px_0px_#D3E7F6,-5px_-5px_5px_0px_#FFFFFF] flex items-center px-4 ",
    image: "w-[1.25rem] h-[1.25rem] mr-3 ",
    input:
      "outline-none bg-inherit font-[700] leading-[1.25rem] px-3 border-l-[0.0875rem] border-[#C5D9E9] h-full",
  };
  return (
    <div className="appointment_section">
      <div className={styles.div}>
        <img className={styles.image} src="/home/name.png" alt="name"></img>
        <input className={styles.input} placeholder="Enter Patient Name*" />
      </div>
      <div className={styles.div}>
        <img
          className={styles.image}
          src="/home/consultaion.png"
          alt="consultation"
        ></img>
        <input className={styles.input} placeholder="Select Doctor*" />
        <img
          className="w-[0.563] h-[0.337rem] ml-auto"
          src="/home/drop_down.png"
          alt="drop down"
        ></img>
      </div>
      <div className={styles.div}>
        <img className={styles.image} src="/home/date.png" alt="date"></img>
        <input className={styles.input} placeholder="Date & Time*" />
        <img
          className="w-[0.563] h-[0.337rem] ml-auto"
          src="/home/drop_down.png"
          alt="drop down"
        ></img>
      </div>
      <div onClick={() => setClick(!click)} className={styles.div}>
        <img className={styles.image} src="/home/age.png" alt="age"></img>
        <input className={styles.input} placeholder="Consultation*" />
        <img
          className="w-[0.563] h-[0.337rem] ml-auto"
          src="/home/drop_down.png"
          alt="drop down"
        ></img>
      </div>

      {click && <Consultation />}

      <div className={styles.div}>
        <img
          className={styles.image}
          src="/home/problem.png"
          alt="problem"
        ></img>
        <input className={styles.input} placeholder="Problem*" />
        <img
          className="w-[0.563] h-[0.337rem] ml-auto"
          src="/home/drop_down.png"
          alt="drop down"
        ></img>
      </div>
      {/* <div className={styles.div}>
        <img className={styles.image} src="/home/test.png" alt="test"></img>
        <input className={styles.input} placeholder="Test & Meds*" />
      </div> */}

      <div className="w-[100%] h-[3.56rem] flex justify-center items-center bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] shadow-[-10px_-10px_20px_0px_#FFFFFF,10px_10px_20px_4px_#D2E1ED] rounded-full ">
        <p className="font-[900] text-white text-[1.25rem] leading-[a.5rem] ">
          {" "}
          Book Appointment
        </p>
      </div>
    </div>
  );
}

export default Appointment;
