import React from "react";
import ClinicMap from "./components/home/ClinicMap";
import Appointment from "./components/home/Appointment";
import Top from "./components/home/Top";
import Temperature from "./components/home/Temperature";
import Doctors from "./components/home/Doctors";
import Ratings from "./components/home/Ratings";
import ChooseProblem from "./components/home/ChooseProblem";
import Consultation from "./components/home/Consultation";
import FindDoctor from "./components/home/FindDoctor";
import Insurence from "./components/home/Insurence";
import Ngo from "./components/home/Ngo";
import Bottom from "./components/home/Bottom";
import Footer from "./components/Footer";
import SecurePayments from "./components/home/SecurePayments";
import Slider from "./components/home/Slider";

import Stemp from "./components/home/Stemp";

function Home() {
  return (
    <div className="">
      <div className=" app flex flex-col ">
        {/* ************************** Top section *****************/}
        <Top />
        {/* ****************************** Temperature section *********** */}
        <Temperature />
        <Stemp/>
        <div className="flex rounded-full justify-around items-center m-auto w-[2.2rem] h-[0.7rem] shadow-[inset_-1px_-1px_2px_#FFFFFF,inset_1px_1px_2px_#D3E0EB]">
          <div className="bg-black w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB]"></div>
          <div className="w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB]"></div>
          
        </div>
        {/* ************************************** Book Appointment ******************************** */}
        <h1 className="caption">Book Appointment</h1>
        <Appointment />
        {/* *************************************** Clinic Map ************************************************ */}
        <h1 className="caption">Clinic Map</h1>
        <ClinicMap />

        {/* ------------------------------  Doctor Ratings -------------------------------- */}
        <h1 className="caption">Doctor Ratings</h1>
        <div className="ratings_section">
          <Ratings
            icon="/home/realself.png"
            heading=" 8 Out of 10"
            text="Ratings On RealSelf By Our 5768 Patients."
          />
          <Ratings
            icon="/home/signal.png"
            heading=" 4.4 Out of 5"
            text="Ratings On RateMDs By Our 3677 Patients."
          />
          <Ratings
            icon="/home/heart.png"
            heading="8.5 Out of 10 "
            text="Ratings On Healthgrades By Our 8342 Patients."
          />
          <Ratings
            icon="/home/vitals.png"
            heading=" 4 Out of 5"
            text="Ratings On Vitals By Our 9965 Patients."
          />
          <Slider />
        </div>
        {/* ******************************************* Choose Problem Section *********************************** */}
        <h1 className="caption">Choose Problem</h1>
        <div>
          <div className="problem_section pb-8">
            <ChooseProblem text="Anesthetics" icon="/home/panesthetics.png" />
            <ChooseProblem text="Braces" icon="/home/pbraces.png" />
            <ChooseProblem text="Bridges" icon="/home/pbridges.png" />
            <ChooseProblem text="Cleaning" icon="/home/pcleaning.png" />
            <ChooseProblem
              text="Cosmetic Dentistry"
              icon="/home/pcosmetic.png"
            />
            <ChooseProblem text="Crown" icon="/home/pcrown.png" />
            <ChooseProblem text="Dentreus" icon="/home/pdentreus.png" />
            <ChooseProblem text="Extraction" icon="/home/pextraction.png" />
          </div>
          <Slider />
        </div>

        {/* *********************************** Choose Consultation *********************************************
        <h1 className="caption">Choose Consultation</h1>
        <Consultation /> */}

        {/* **************************************** Find Your Doctor ****************************************** */}
        <h1 className="caption">Find Your Doctor</h1>
        <div className="find_section relative pb-80">
          <FindDoctor image="/home/julie.png" text="Dr. Julie Smith" />
          <FindDoctor image="/home/john.png" text="Dr. John Gibbs" />
          <FindDoctor image="/home/karen.png" text="Dr. Karen Lane" />
          <FindDoctor image="/home/brian.png" text="Dr. Brian Stanley" />
          <Slider />
          <SecurePayments />
        </div>

        {/* ******************************* Doctor of the Month *************************** */}
        <h1 className="caption">Doctor Of The Month</h1>
        <Doctors />

        {/* ********************************************  Insurence ************************************************** */}
        <h1 className="caption">Insurence</h1>
        <div className="insurence_section">
          <Insurence
            icon="/home/hdfc.png"
            text="HDFC Life Insurance Company Ltd."
          />
          <Insurence icon="/home/maxlife.png" text="Max Life Insurance" />
          <Insurence icon="/home/birla.png" text="Birla Sun Life Insurance " />
          <Insurence
            icon="/home/sbi.png"
            text="SBI Life Insurance Company Ltd."
          />
          <Insurence
            icon="/home/indiafirst.png"
            text="IndiaFirst Life Insurance "
          />
          <Insurence
            icon="/home/lic.png"
            text="Life Insurance Corporation of India"
          />
        </div>
        {/* ****************************************** Donate to Ngo ******************************************** */}
        <h1 className="caption">Donate To NGO</h1>
        <div className="ngo_section">
          <Ngo text="Bharati Foundation" icon="/home/bharati.png" />
          <Ngo text="Ipas Development Foundation" icon="/home/ipas.png" />
          <Ngo text="Room To Read India Trust" icon="/home/room.png" />
          <Ngo text="SEWA Rural" icon="/home/sewa.png" />
        </div>

        {/* ****************************** Fixed Bottom ********************** */}
        <Bottom />
      </div>
      {/* ********************************* Footer ******************************** */}
      <Footer />
    </div>
  );
}

export default Home;
