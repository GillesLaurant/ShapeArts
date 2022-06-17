import React from "react";
import "./error.scss";

const ErrorSection = () => {
  return (
    <section className="error-section">
      <h5 className="error-section-title">Erreur système</h5>
      <p className="error-section-msg">Veuillez réessayer plus tard svp.</p>
    </section>
  );
};

export default ErrorSection;
