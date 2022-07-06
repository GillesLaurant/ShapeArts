import React from "react";
import { useSelector } from "react-redux";
import "./error.scss";

/*******    SECTION ERROR     *******/

const ErrorSection = ({ errorTarget }) => {
  const { error, errorMsg } = useSelector((state) => state.error);

  // List titles error
  const listTitles = {
    shape: "Soyez patient...",
    server: "Erreur système",
  };

  return (
    <section
      className="error-section"
      style={{
        display: error[errorTarget] ? "flex" : "none",
      }}
    >
      <h5 className="error-section-title">{listTitles[errorTarget]}</h5>
      <p className="error-section-msg">{errorMsg[errorTarget]}</p>
    </section>
  );
};

export default ErrorSection;
