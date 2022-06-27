import React from "react";
import ButtonAction from "../buttons&inputs/ButtonAction";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";

/*******    PANNEL DELETE     *******/

const PannelDelete = () => {
  return (
    <div className="pannelDelete">
      <header className="pannelDelete-head">
        <h2 className="pannelDelete-head-title">
          Êtes-vous sûre de vouloir supprimer votre compte ?
        </h2>
      </header>

      <div className="pannelDelete-content">
        <p className="pannelDelete-content-text">
          Cette action est irréversible et vos formes resteront sur la toile.
        </p>
      </div>

      <footer className="pannelDelete-footer">
        {/* DELETE ACTION */}
        <ButtonAction nameButton={"delete"} />

        {/* BACK DELETE */}
        <ButtonUserNav nav={"back_Delete"} />
      </footer>
    </div>
  );
};

export default PannelDelete;
