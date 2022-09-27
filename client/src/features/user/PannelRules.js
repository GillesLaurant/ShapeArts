import React from "react";
import { useSelector } from "react-redux";
import ButtonAction from "../buttons&inputs/ButtonAction";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";

const PannelRules = () => {
  const user = useSelector((state) => state.user.username);
  return (
    <div className="pannelRules">
      <header className="pannelRules-head">
        <h2 className="pannelRules-head-title">
          A vous de jouer <span className="pannelRules-head-user">{user}</span>
          <span className="pannelRules-head-user-space">_</span>!
        </h2>
      </header>
      <div className="pannelRules-content">
        <p className="pannelRules-content-text">
          Cliquez sur la toile pour selectionner et modifier votre forme.
          <br />
          Une fois votre forme validée, elle ne peut plus être modifiée, ni
          supprimée de la toile et un délai de 5 minutes est imposé avant votre
          prochaine forme.
        </p>
      </div>
      <footer className="pannelRules-footer">
        {/* REGISTER NAV */}
        <ButtonUserNav nav={"nav_Account"} />

        {/* LOGGIN NAV */}
        <ButtonAction nameButton={"loggout"} />
      </footer>
    </div>
  );
};

export default PannelRules;
