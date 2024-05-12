import "./Loading.css";

import React, { useEffect, useState } from "react";
const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="body" style={{ display: isVisible ? "block" : "none" }}>
      <div class="welcome-text">
        <p>w</p>
        <p>e</p>
        <p>l</p>
        <p>c</p>
        <p>o</p>
        <p>m</p>
        <p>e</p>
      </div>
    </div>
  );
};

export default Loading;
