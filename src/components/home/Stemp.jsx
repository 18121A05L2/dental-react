import React from "react";
import TempSlide from "./TempSlide";

function Stemp() {
  return (
    <div className="grid grid-cols-3 gap-3">
      
      <TempSlide image="/home/sappointment.png" text="Book Appointment" />
      <TempSlide image="/home/sproblem.png" text="Choose Problem" />
      <TempSlide image="/home/smap.png" text="Clinic Map" />
      <TempSlide image="/home/sdoctor.png" text="Find Your Doctor" />
      <TempSlide image="/home/sinsurence.png" text="Insurence" />
      <TempSlide image="/home/sngo.png" text="Donate To NGO" />
    </div>
  );
}

export default Stemp;
