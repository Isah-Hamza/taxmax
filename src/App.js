import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Wallet from "./pages/Dashboard/Wallet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
