
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payments from './Payments';
import Home from './Home';
import Invoice from "./components/Invoice";
import DocDescription from "./DocDescription";
import Desc from "./Desc";
import Navigation from "./Navigation";
import DonateInsurence from "./DonateInsurence";
import Location from "./Location";


function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/invoice" element={<Invoice />}></Route>
          <Route path="/description" element={<DocDescription />} />
          <Route path="/desc" element={<Desc />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/donate-insurence" element={<DonateInsurence />} />
          <Route path="/location" element={ <Location/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
