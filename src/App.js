
import ClinicMap from './components/ClinicMap';
import Appointment from './components/Appointment';
import Top from './components/Top';
import Temperature from './components/Temperature';
import Doctors from './components/Doctors';
import Ratings from './components/Ratings';
import ChooseProblem from './components/ChooseProblem';
import Consultation from './components/Consultation';
import FindDoctor from './components/FindDoctor';
import Insurence from './components/Insurence';
import Ngo from './components/Ngo';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App app">
      {/* ************************** Top section *****************/}
      <Top />
      {/* ****************************** Temperature section *********** */}
      <Temperature />
      {/* ******************************* Doctor of the Month *************************** */}
      <h1 className="caption">Doctor Of The Month</h1>
      <Doctors />

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
      </div>
      {/* ******************************************* Choose Problem Section *********************************** */}
      <h1 className="caption">Choose Problem</h1>
      <div className="problem_section">
        <ChooseProblem text="Anesthetics" icon="/home/panesthetics.png" />
        <ChooseProblem text="Braces" icon="/home/pbraces.png" />
        <ChooseProblem text="Bridges" icon="/home/pbridges.png" />
        <ChooseProblem text="Cleaning" icon="/home/pcleaning.png" />
        <ChooseProblem text="Cosmetic Dentistry" icon="/home/pcosmetic.png" />
        <ChooseProblem text="Crown" icon="/home/pcrown.png" />
        <ChooseProblem text="Dentreus" icon="/home/pdentreus.png" />
        <ChooseProblem text="Extraction" icon="/home/pextraction.png" />
      </div>

      {/* *********************************** Choose Consultation ********************************************* */}
      <h1 className="caption">Choose Consultation</h1>
      <Consultation />

      {/* ************************************** Book Appointment ******************************** */}
      <h1 className="caption">Book Appointment</h1>
      <Appointment />
      {/* *************************************** Clinic Map ************************************************ */}
      <h1 className="caption">Clinic Map</h1>
      <ClinicMap />
      {/* **************************************** Find Your Doctor ****************************************** */}
      <h1 className="caption">Find Your Doctor</h1>
      <div className="find_section">
        <FindDoctor image="/home/julie.png" text="Dr. Julie Smith" />
        <FindDoctor image="/home/john.png" text="Dr. John Gibbs" />
        <FindDoctor image="/home/karen.png" text="Dr. Karen Lane" />
        <FindDoctor image="/home/brian.png" text="Dr. Brian Stanley" />
      </div>
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
  );
}

export default App;
