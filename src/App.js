
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payments from './Payments';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/payments" element={<Payments />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
