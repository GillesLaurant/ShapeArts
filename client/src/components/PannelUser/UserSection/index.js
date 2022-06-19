import React from "react";
import { useSelector } from "react-redux";
import ErrorSection from "../../../features/error/ErrorSection";
import PannelStart from "./PannelStart";
import PannelRegister from "./PannelRegister";
import PannelLoggin from "./PannelLoggin";
import PannelRules from "./PannelRules";
import PannelTiming from "./PannelTiming";
import PannelAccount from "./PannelAccount";
import PannelNavEdit from "./PannelNavEdit";
import PannelEditPseudo from "./PannelEditPseudo";
import PannelEditMail from "./PannelEditMail";
import PannelEditPwd from "./PannelEditPwd";
import PannelDelete from "./PannelDelete";
import "./style.scss";

/*******    PANNEL USER PANNELS CONTAINER     *******/

const UserSection = () => {
  // Nav & userLoggin & shapeCreated
  const { nav, app } = useSelector((state) => state);

  return (
    <section className="userSection">
      {/* ERROR SECTION MESSAGE */}
      <ErrorSection />

      {/* PANNEL START GAME */}
      {!app.userLoggin && !nav.nav_SignIn && !nav.nav_SignUp && <PannelStart />}

      {/* PANNEL REGISTER USER */}
      {!app.userLoggin && nav.nav_SignIn && !nav.nav_SignUp && (
        <PannelRegister />
      )}

      {/* PANNEL LOGGIN USER */}
      {!app.userLoggin && !nav.nav_SignIn && nav.nav_SignUp && <PannelLoggin />}

      {/* PANNEL RULES GAME */}
      {app.userLoggin &&
        !app.timeShapecreated &&
        !nav.nav_Account &&
        !nav.nav_EditToggle &&
        !nav.nav_EditUsername &&
        !nav.nav_EditMail &&
        !nav.nav_EditPwd &&
        !nav.nav_Delete && <PannelRules />}

      {/* PANNEL TIMING PLAY */}
      {app.userLoggin &&
        app.timeShapecreated &&
        !nav.nav_Account &&
        !nav.nav_EditToggle &&
        !nav.nav_EditUsername &&
        !nav.nav_EditMail &&
        !nav.nav_EditPwd &&
        !nav.nav_Delete && <PannelTiming />}

      {/* PANNEL ACCOUNT */}
      {app.userLoggin && nav.nav_Account && <PannelAccount />}

      {/* PANNEL NAV EDIT */}
      {app.userLoggin && nav.nav_EditToggle && <PannelNavEdit />}

      {/* PANNEL EDIT PSEUDO */}
      {app.userLoggin && nav.nav_EditUsername && <PannelEditPseudo />}

      {/* PANNEL EDIT MAIL */}
      {app.userLoggin && nav.nav_EditMail && <PannelEditMail />}

      {/* PANNEL EDIT PASSWORD */}
      {app.userLoggin && nav.nav_EditPwd && <PannelEditPwd />}

      {/* PANNEL DELETE */}
      {app.userLoggin && nav.nav_Delete && <PannelDelete />}
    </section>
  );
};

export default UserSection;
