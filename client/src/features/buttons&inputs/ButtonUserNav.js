import React from "react";
import { useDispatch } from "react-redux";
import { navigate } from "../app/navUser.slice";

/*******    NAV BUTTONS     *******/

const ButtonUserNav = ({ nav }) => {
  const dispatch = useDispatch();
  const buttonTarget = {
    func: nav.split("_")[0],
    name: nav.split("_")[1],
  };

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
      col2: "#30cdf0",
      col1: "#330867",
    },
    {
      func: "nav",
      name: "EditUsername",
      msg: "Mon pseudo",
      col1: "#330867",
      col2: "#30cdf0",
    },
    {
      func: "nav",
      name: "EditMail",
      msg: "Mon adresse email",
      col1: "#30cdf0",
      col2: "#330867",
    },
    {
      func: "nav",
      name: "EditPwd",
      msg: "Mon mot de passe",
      col1: "#330867",
      col2: "#30cdf0",
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
