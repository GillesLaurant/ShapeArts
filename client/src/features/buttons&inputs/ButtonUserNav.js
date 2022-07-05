import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../user/nav.slice";

/*******    NAV BUTTONS     *******/

const ButtonUserNav = ({ nav }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error.socket);

  const buttonTarget = {
    func: nav.split("_")[0],
    name: nav.split("_")[1],
  };

  // List buttons nav
  const arrayButtons = [
    {
      func: "back_",
      name: "back",
      msg: "Retour",
      col1: "#f9d423",
      col2: "#e14fad",
    },
    {
      func: "nav",
      name: "SignIn",
      msg: "S'inscrire",
      col1: "#00ecbc",
      col2: "#007adf",
    },
    {
      func: "nav",
      name: "SignUp",
      msg: "Se connecter",
      col1: "#2575fc",
      col2: "#6a11cb",
    },
    {
      func: "nav",
      name: "Account",
      msg: "Mon compte",
      col1: "#00ecbc",
      col2: "#007adf",
    },
    {
      func: "nav",
      name: "EditToggle",
      msg: "Editer",
      col2: "#0700b8",
      col1: "#00a1d6",
    },
    {
      func: "nav",
      name: "EditUsername",
      msg: "Mon pseudo",
      col1: "#3ab5c5",
      col2: "#469de7",
    },
    {
      func: "nav",
      name: "EditMail",
      msg: "Mon adresse email",
      col1: "#5e8beb",
      col2: "#8f5ef0",
    },
    {
      func: "nav",
      name: "EditPwd",
      msg: "Mon mot de passe",
      col1: "#9d52f3",
      col2: "#e612fc",
    },
    {
      func: "nav",
      name: "Delete",
      msg: "Se désinscrire",
      col1: "#cc208e",
      col2: "#6713d2",
    },
  ];

  const handleNav = (ev) => {
    ev.preventDefault();

    dispatch(navigate(ev.target.name));
  };

  return (
    <>
      {arrayButtons.map(
        (button) =>
          button.name === buttonTarget.name && (
            <button
              key={button.name}
              type="button"
              className={`buttonUser ${
                buttonTarget.func === "back" ? "backButton" : nav
              }`}
              name={
                buttonTarget.func === "back" ? `nav_${buttonTarget.name}` : nav
              }
              onClick={handleNav}
              disabled={error}
              style={{
                background: `linear-gradient(to bottom, ${
                  buttonTarget.func === "back"
                    ? arrayButtons[0].col1
                    : button.col1
                }, ${
                  buttonTarget.func === "back"
                    ? arrayButtons[0].col2
                    : button.col2
                }`,
              }}
            >
              {buttonTarget.func === "back" ? "Retour" : button.msg}
            </button>
          )
      )}
    </>
  );
};

export default ButtonUserNav;
