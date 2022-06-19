import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../app/navUser.slice";

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
      col1: "rgb(244, 244, 106)",
      col2: "rgb(206, 98, 36)",
    },
    {
      func: "nav",
      name: "SignIn",
      msg: "S'inscrire",
      col1: "rgb(70, 221, 199)",
      col2: "rgb(7, 114, 124)",
    },
    {
      func: "nav",
      name: "SignUp",
      msg: "Se connecter",
      col1: "rgb(69, 145, 252)",
      col2: "rgb(41, 77, 160)",
    },
    {
      func: "nav",
      name: "Account",
      msg: "Mon compte",
      col1: "rgb(70, 221, 199)",
      col2: "rgb(7, 114, 124)",
    },
    {
      func: "nav",
      name: "EditToggle",
      msg: "Editer",
      col1: "rgb(33, 112, 186)",
      col2: "rgb(10, 57, 101)",
    },
    {
      func: "nav",
      name: "EditUsername",
      msg: "Mon pseudo",
      col1: "rgb(33, 112, 186)",
      col2: "rgb(10, 57, 101)",
    },
    {
      func: "nav",
      name: "EditMail",
      msg: "Mon adresse email",
      col1: "rgb(33, 112, 186)",
      col2: "rgb(10, 57, 101)",
    },
    {
      func: "nav",
      name: "EditPwd",
      msg: "Mon mot de passe",
      col1: "rgb(33, 112, 186)",
      col2: "rgb(10, 57, 101)",
    },
    {
      func: "nav",
      name: "Delete",
      msg: "Se désinscrire",
      col1: "rgb(246, 62, 155)",
      col2: "rgb(147, 27, 83)",
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
