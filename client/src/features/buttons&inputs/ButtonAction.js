import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  loggin,
  editUsername,
  editMail,
  editPwd,
} from "../app/user.slice";
import { setError } from "../error/error.slice";
import "./style.scss";

const ButtonAction = ({ nameButton }) => {
  const buttonTarget = useRef();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const inputsUser = useSelector((state) => state.user);
  const listButtons = {
    register: {
      name: "register",
      content: "S'inscrire",
      inputs: ["username", "mail", "password"],
    },
    loggin: {
      name: "loggin",
      content: "Se connecter",
      inputs: ["mail", "password"],
    },
    editUsername: {
      name: "editUsername",
      content: "Modifer",
      inputs: ["usernameEdited"],
    },
    editMail: {
      name: "editMail",
      content: "Modifier",
      inputs: ["mailEdited"],
    },
    editPwd: {
      name: "editPwd",
      content: "Modifier",
      inputs: ["holdPwd", "newPwd"],
    },
    loggout: {
      name: "loggout",
      content: "Se déconnecter",
      inputs: [],
    },
    delete: {
      name: "delete",
      content: "Se désinscrire",
      inputs: [],
    },
  };

  // Check validity form
  const checkValidity = (ev) => {
    ev.preventDefault();
    const button = listButtons[nameButton];
    const regex = {
      username: /^[A-Za-z0-9_-]{3,15}$/,
      usernameEdited: /^[A-Za-z0-9_-]{3,15}$/,
      mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      mailEdited: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password: /^[A-Za-z0-9_-]{4,15}$/,
      holdPwd: /^[A-Za-z0-9_-]{4,15}$/,
      newPwd: /^[A-Za-z0-9_-]{4,15}$/,
    };

    let failed = [];
    // If empty input => seterror
    button.inputs.forEach((input) => {
      if (!regex[input].test(inputsUser[input])) {
        // Add failed
        return failed.push(true);
      } else if (
        inputsUser[input] !== "" &&
        !error.error[input] &&
        inputsUser[input].length > 3
      ) {
        // Not add failled
        return failed.push(false);
      }
    });
    // If any errors remove animation else add
    failed.every((item) => !item)
      ? buttonTarget.current.classList.remove("formNoValid")
      : buttonTarget.current.classList.add("formNoValid");
  };

  const handleRegister = (ev) => {
    ev.preventDefault();
    const button = listButtons[nameButton];
    let echec = false;

    // If empty input => seterror & filter errors inputs
    button.inputs.forEach((input) => {
      if (error.error[input] || inputsUser[input] === "") {
        dispatch(
          setError({
            nameError: input,
            status: true,
            msgError: error.listMsg[input],
          })
        );
        echec = true;
      }
    });
    // If any errors dispatch button action
    if (!echec) {
      switch (nameButton) {
        case "register":
          dispatch(register({ test: "test" }));
          break;
        case "loggin":
          dispatch(loggin({ test: "test" }));
          break;
        case "editUsername":
          dispatch(editUsername({ test: "test" }));
          break;
        case "editMail":
          dispatch(editMail({ test: "test" }));
          break;
        case "editPwd":
          dispatch(editPwd({ test: "test" }));
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    // Remove Animation on Loaded
    buttonTarget.current.classList.remove("formNoValid");
  }, []);

  return (
    <button
      ref={buttonTarget}
      type="button"
      className={`buttonAction button_${nameButton}`}
      name={nameButton}
      onMouseEnter={checkValidity}
      onClick={handleRegister}
    >
      {listButtons[nameButton].content}
    </button>
  );
};

export default ButtonAction;
