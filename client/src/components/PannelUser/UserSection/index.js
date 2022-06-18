import React from "react";
import { useSelector } from "react-redux";
import ErrorSection from "../../../features/error/ErrorSection";
import PannelStart from "./PannelStart";
import PannelRegister from "./PannelRegister";
import PannelLoggin from "./PannelLoggin";
import "./style.scss";

const UserSection = () => {
  const { nav, app } = useSelector((state) => state);
  return (
    <section className="userSection">
      {/* ERROR SECTION MESSAGE */}
      <ErrorSection />

      {/* PANNEL START GAME */}
      {!app.userLoggin && !nav.nav_SignIn && !nav.nav_SignUp && <PannelStart />}

      {/* PANNEL REGISTER USER */}
      {!app.userLoggin && nav.nav_SignIn && <PannelRegister />}

      {/* PANNEL LOGGIN USER */}
      {!app.userLoggin && nav.nav_SignUp && <PannelLoggin />}
    </section>
  );
};

export default UserSection;
