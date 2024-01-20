import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import AccountSpeech from "./MainAccountSpeech";

export default function Account() {
  const [accountBalance, changeAccountBalance] = useState(0);
  const [accountId, changeAccountId] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://divyang-node.onrender.com/account/${id}`)
      .then((res) => res.json())
      .then((data) => {
        changeAccountBalance(data.balance);
        changeAccountId(data.accountId);
      });
  }, [id]); // Include 'id' in the dependency array

  return (
    <div className="account">
      <h1>Username:</h1>
      <h3>{id}</h3>

      <AccountSpeech />
      <Dashboard />
      <h1>Account Id</h1>
      <h3>{accountId}</h3>

      <h1>Account Balance: </h1>
      <h2>₹{accountBalance}</h2>
    </div>
  );
}
