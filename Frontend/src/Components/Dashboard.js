import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import AccountSpeech from "./MainAccountSpeech";

const Dashboard = () => {


  const navigate = useNavigate();
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation();
  const handleCommandsClick = () => {
    navigate(`/dashboard/${id}`);
    
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); // 5 seconds in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const isDashboardRoute = location.pathname === `/dashboard/${id}`;
  return (
    <div>
      

      <div>
        {isDashboardRoute && showPopup && (
          <div className="popup-container">
            <div className="popup">
              <h1 className="popup-heading">Welcome to our banking app!</h1>
              <h2 className="popup-text">Please use the following commands for navigation:</h2>
              <ul  class="popup-list">
                <h3>1. Account</h3>
                <h3>2. Transfer</h3>
                <h3>3. Commands</h3>
                <h3>4. Logout</h3>
              </ul>
            </div>
          </div>
        )}

        <nav>
        <div className="details">
  <h2 style={{ display: "inline-block", marginRight: "8px" }}>Hi </h2>
  <h1 style={{ display: "inline-block" }}>{id}</h1>
</div>
          <img className="logo img-fluid" src="/images/bank.png" alt="" />
          <ul className="nav-bar-list">
            <li>
              <Link to={`/dashboard/${id}`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/dashboard/${id}/account`}>Account</Link>
            </li>
            <li>
              <Link to={`/dashboard/${id}/transfer`}>Transfer</Link>
            </li>
            <li>
              <Link to={`/dashboard/${id}`} onClick={handleCommandsClick}>
                Commands
              </Link>
            </li>
          </ul>
          <Link to="/" class="btn-signup">
            Logout
          </Link>
        </nav>

        {isDashboardRoute && (
          <div class = "page-container">
            <AccountSpeech />
            <h2>
              <br /> Welcome to our banking app!
            </h2>
            <p>Please use the navigation menu to access different pages of the app.</p>
            <p style={{ wordWrap: "break-word" }}>
              In order to empower the differently abled (Divyaang) people of the country with digital
              banking services, easy-to-use innovative solutions for digital banking services such as
              digital payments, account opening, account statement, payment of utility bills, usage of
              debit/credit cards, etc., may be explored. This would provide equal opportunity to the
              physically challenged without any discrimination by the digitisation of banking and enable
              a greater inclusion of the physically challenged into the mainstream
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
