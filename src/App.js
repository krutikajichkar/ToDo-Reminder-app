import Dashboard from "./components/Dashboard";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./components/ToDo";
import Reminder from "./components/Reminder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
