import React, { useEffect, useState } from "react";
import "./Splash.css";

export default function Splash({ visible }) {
  const [hideClass, setHideClass] = useState(false);

  // Handle fade-out when visible turns false
  useEffect(() => {
    if (!visible) {
      setHideClass(true);
      const timer = setTimeout(() => setHideClass(false), 350);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Remove completely when animation done
  if (!visible && !hideClass) return null;

  return (
    <div className={`splash-backdrop ${!visible ? "splash-hide" : ""}`}>
      <div className="splash-panel">
        <img src="/images/logo.png" alt="Loading..." className="splash-logo" />
      </div>
    </div>
  );
}
