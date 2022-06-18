import React from "react";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";

const PannelStart = () => {
  return (
    <div className="pannelStart">
      <header className="pannelStart-head">
        <h2 className="pannelStart-head-title">Bienvenue !</h2>

        <h4 className="pannelStart-head-text">
          Veuillez vous inscrire ou vous connecter pour jouer.
        </h4>
      </header>

      <div className="pannelStart-nav">
        {/* BUTTON REGISTER NAV */}
        <ButtonUserNav nav={"nav_SignIn"} />

        {/* BUTTON LOGGIN NAV */}
        <ButtonUserNav nav={"nav_SignUp"} />
      </div>
    </div>
  );
};

export default PannelStart;
