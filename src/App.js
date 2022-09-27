
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payments from './Payments';
import Home from './Home';
import Invoice from "./components/Invoice";
import DocDescription from "./DocDescription";


function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/invoice" element={<Invoice />}></Route>
          <Route path="/description" element={<DocDescription/> } />
        
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
