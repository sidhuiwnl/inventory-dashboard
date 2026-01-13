import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Inventory from "./page/InventoryDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}