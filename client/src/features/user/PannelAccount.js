import React from "react";
import { useSelector } from "react-redux";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";

/*******    PANNEL ACCOUNT     *******/

const PannelAccount = () => {
  // Username & mail & count shapes & notif edit password success
  const { user, app } = useSelector((state) => state);

  return (
    <div className="pannelAccount">
      <header className="pannelAccount-head">
        <h2 className="pannelAccount-head-title">Mon compte</h2>
      </header>

      {/* USERNAME */}
      <div className="pannelAccount-content">
        <p className="pannelAccount-content-text">
          <span className="account-item">pseudo : </span>
          <span className="account-data">{user.username}</span>
        </p>

        {/* MAIL */}
        <p className="pannelAccount-content-text">
          <span className="account-item">email : </span>
          <span className="account-data account-data-mail">{user.mail}</span>
        </p>

        {/* NOTIF PASSWORD EDITED SUCCESS */}
        {app.pwdEdited && (
          <p className="pannelAccount-content-text">
            <span className="account-item">Mot de passe : </span>
            <span className="account-data account-data-pwd">modifié</span>
          </p>
        )}

        {/* COUNT SHAPES */}
        <p className="pannelAccount-content-text">
          <span className="account-item account-item-shapes">
            Formes crées :{" "}
          </span>
          <span className="account-data ">{user.countShapes}</span>
        </p>
      </div>

      <footer className="pannelAccount-footer">
        {/* EDIT TOGGLE NAV */}
        <ButtonUserNav nav={"nav_EditToggle"} />

        {/* DELETE NAV */}
        <ButtonUserNav nav={"nav_Delete"} />

        {/* BACK RULES || TIMING  */}
        <ButtonUserNav nav={"back_Account"} />
      </footer>
    </div>
  );
};

export default PannelAccount;
