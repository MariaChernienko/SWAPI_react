import React from "react";
import "./ErrorIndicator.css";

const ErrorIndicator = () => {
  return (
    <div className="alert alert-dismissible alert-danger error-indicator">
      <span className="boom">BOOM!</span>
      <span>Something gas gone terribly wrong</span>
      <span>(but we already sent droidsto fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
