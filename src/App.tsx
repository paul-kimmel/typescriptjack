import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { TestHands } from "./pages/TestHands";
import { CardTrick } from "./pages/CardTrick";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestHands />} />
        <Route path="/TestHands" element={<TestHands />} />
        <Route path="/CardTrick" element={<CardTrick />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
