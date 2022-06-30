import React from "react";
import { useSelector } from "react-redux";
import ErrorSection from "../error/ErrorSection";
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
  const nav = useSelector((state) => state.nav);
  const user = useSelector((state) => state.user);
  const dateShape = useSelector((state) => state.shape.dateCreated);

  return (
    <section className="userSection">
      {/* ERROR SECTION MESSAGE */}
      <ErrorSection errorTarget={"server"} />

      {/* PANNEL START GAME */}
      {!user.isLoggin && !nav.nav_SignIn && !nav.nav_SignUp && <PannelStart />}

      {/* PANNEL REGISTER USER */}
      {!user.isLoggin && nav.nav_SignIn && !nav.nav_SignUp && (
        <PannelRegister />
      )}

      {/* PANNEL LOGGIN USER */}
      {!user.isLoggin && !nav.nav_SignIn && nav.nav_SignUp && <PannelLoggin />}

      {/* PANNEL RULES GAME */}
      {user.isLoggin &&
        !nav.nav_Account &&
        !nav.nav_EditToggle &&
        !nav.nav_EditUsername &&
        !nav.nav_EditMail &&
        !nav.nav_EditPwd &&
        !nav.nav_Delete &&
        !dateShape && <PannelRules />}

      {/* PANNEL TIMING PLAY */}
      {user.isLoggin &&
        !nav.nav_Account &&
        !nav.nav_EditToggle &&
        !nav.nav_EditUsername &&
        !nav.nav_EditMail &&
        !nav.nav_EditPwd &&
        !nav.nav_Delete &&
        dateShape && <PannelTiming />}

      {/* PANNEL ACCOUNT */}
      {user.isLoggin && nav.nav_Account && <PannelAccount />}

      {/* PANNEL NAV EDIT */}
      {user.isLoggin && nav.nav_EditToggle && <PannelNavEdit />}

      {/* PANNEL EDIT PSEUDO */}
      {user.isLoggin && nav.nav_EditUsername && <PannelEditPseudo />}

      {/* PANNEL EDIT MAIL */}
      {user.isLoggin && nav.nav_EditMail && <PannelEditMail />}

      {/* PANNEL EDIT PASSWORD */}
      {user.isLoggin && nav.nav_EditPwd && <PannelEditPwd />}

      {/* PANNEL DELETE */}
      {user.isLoggin && nav.nav_Delete && <PannelDelete />}
    </section>
  );
};

export default UserSection;
