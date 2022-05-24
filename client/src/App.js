import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Equipments from "./pages/Equipments";
import Equipment from "./pages/Equipment";
import NewEquipment from "./pages/NewEquipment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipment/:id" element={<Equipment />} />
          <Route path="/equipment/create" element={<NewEquipment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
