import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import { useState, useEffect } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Transfer from "./Components/Transfer";
import Account from "./Components/Account";
import Help from "./Components/Help";
import Help1 from "./Components/Help1";

function App() {
  const [message, sendMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => sendMessage(data.message));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/:id/transfer" element={<Transfer />} />
          <Route path="/dashboard/:id/account" element={<Account />} />
          <Route path="/dashboard/:id/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/Help1" element={<Help1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
