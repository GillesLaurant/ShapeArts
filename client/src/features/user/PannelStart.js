import React from "react";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";

/*******    PANNEL START     *******/

const PannelStart = () => {
  return (
    <div className="pannelStart">
      <header className="pannelStart-head">
        <h2 className="pannelStart-head-title">Bienvenue !</h2>

        <h4 className="pannelStart-head-text">
          Veuillez vous inscrire ou vous connecter pour jouer.
        </h4>
      </header>

      <footer className="pannelStart-footer">
        {/* REGISTER NAV */}
        <ButtonUserNav nav={"nav_SignIn"} />

        {/* LOGGIN NAV */}
        <ButtonUserNav nav={"nav_SignUp"} />
      </footer>
    </div>
  );
};

export default PannelStart;
