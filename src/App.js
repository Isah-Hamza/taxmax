import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Wallet from "./pages/Dashboard/Wallet";

export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState(() => {
    let lsUsers = localStorage.getItem("users");
    if (lsUsers) {
      return JSON.parse(lsUsers);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  console.log(users);

  const value = { users, setUsers };
  return (
    <UsersContext.Provider value={value}>
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
    </UsersContext.Provider>
  );
}

export default App;
