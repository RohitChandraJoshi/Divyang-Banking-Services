import React, { useState } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="popup" onClick={handleClose}>
      <h1>This is a pop-up!</h1>
      <p>This pop-up will disappear in 10 seconds.</p>
    </div>
  );
};

export default Popup;
