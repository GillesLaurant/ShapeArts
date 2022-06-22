import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "./SpinnerButton";
import {
  register,
  loggin,
  editUsername,
  editMail,
  editPwd,
} from "../app/user.slice";
import { setError } from "../error/error.slice";
import "./style.scss";

/*******    ACTION BUTTONS     *******/

const ButtonAction = ({ nameButton }) => {
  const buttonTarget = useRef();
  const dispatch = useDispatch();
  const { error, user, loader } = useSelector((state) => state);
  const colorsEdit = {
    col1: "#30cdf0",
    col2: "#330867",
    col3: "rgba(10, 57, 101, 0.01)",
  };

  // List buttons
  const listButtons = {
    register: {
      name: "register",
      content: "S'inscrire",
      inputs: ["username", "mail", "password"],
      col1: "#007adf",
      col2: "#00ecbc",
      col3: "rgb(41, 77, 160, 0.01)",
    },
    loggin: {
      name: "loggin",
      content: "Se connecter",
      inputs: ["mail", "password"],
      col1: "#6a11cb",
      col2: "#2575fc",
      col3: "rgb(41, 77, 160, 0.01)",
    },
    editUsername: {
      name: "editUsername",
      content: "Modifer",
      inputs: ["usernameEdited"],
      col1: colorsEdit.col1,
      col2: colorsEdit.col2,
      col3: colorsEdit.col3,
    },
    editMail: {
      name: "editMail",
      content: "Modifier",
      inputs: ["mailEdited"],
      col1: colorsEdit.col1,
      col2: colorsEdit.col2,
      col3: colorsEdit.col3,
    },
    editPwd: {
      name: "editPwd",
      content: "Modifier",
      inputs: ["holdPwd", "newPwd"],
      col1: colorsEdit.col1,
      col2: colorsEdit.col2,
      col3: colorsEdit.col3,
    },
    loggout: {
      name: "loggout",
      content: "Se déconnecter",
      inputs: [],
      col1: "#9b23ea",
      col2: "#5f72bd",
      col3: "rgb(95, 1, 183, 0.01)",
    },
    delete: {
      name: "deleteAccount",
      content: "Se désinscrire",
      inputs: [],
      col1: "#6713d2",
      col2: "#cc208e",
      col3: "rgb(147, 27, 83, 0.01)",
    },
    validShape: {
      name: "validShape",
      content: "Valider",
      inputs: [],
      col1: "#b3ffab",
      col2: "#12fff7",
      col3: "rgba(0, 118, 16, 0.01)",
    },
  };

  // Check validity all inputs form
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

    // if (nameButton === "validShape") {
    //   return console.log("validShape");
    // }

    // If empty input => seterror
    button.inputs.forEach((input) => {
      if (!regex[input].test(user[input])) {
        // Add failed
        return failed.push(true);
      } else if (
        user[input] !== "" &&
        !error.error[input] &&
        user[input].length > 3
      ) {
        // Not add failled
        return failed.push(false);
      }
    });
    if (failed.length === 0) {
      console.log(failed);
    }
    // If errors add animation else remove animation class
    if (failed.every((item) => !item)) {
      buttonTarget.current.classList.remove("formNoValid");
    } else {
      buttonTarget.current.animate(
        [
          { transform: "translateX(-10px)" },
          { transform: "translateX(10px)" },
          { transform: "translateX(-10px)" },
          { transform: "translateX(10px)" },
          { transform: "translateX(0px)" },
        ],
        {
          duration: 1800,
          // iterations: Infinity,
          easing: "linear",
          // fillMode: Forwards
        }
      );
      buttonTarget.current.classList.add("formNoValid");
    }
  };

  // Handle button action "Register" & "Loggin" & "Loggout" & "Edits" & "Delete"
  const handleClick = (ev) => {
    ev.preventDefault();
    const button = listButtons[nameButton];
    let echec = false;

    // If empty input => seterror & filter errors inputs
    button.inputs.forEach((input) => {
      if (error.error[input] || user[input] === "") {
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
          dispatch(register(nameButton));
          break;
        case "loggin":
          dispatch(loggin(nameButton));
          break;
        case "editUsername":
          dispatch(editUsername(nameButton));
          break;
        case "editMail":
          dispatch(editMail(nameButton));
          break;
        case "editPwd":
          dispatch(editPwd(nameButton));
          break;
        case "deleteAccount":
          dispatch(editPwd(nameButton));
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

  useEffect(() => {
    // Add pulsing animation loader
    if (!loader[nameButton]) {
      // buttonTarget.current.classList.remove(`pulse_${nameButton}`);
      buttonTarget.current.disabled = false;
    }
    // Remove pulsing animation loader

    if (loader[nameButton]) {
      // buttonTarget.current.classList.add(`pulse_${nameButton}`);
      buttonTarget.current.disabled = true;
      buttonTarget.current.animate(
        [
          { boxShadow: `0 0 0 -10px ${listButtons[nameButton].col1}` },
          { boxShadow: `0 0 0 10px ${listButtons[nameButton].col3}` },
        ],
        {
          duration: 1000,
          iterations: Infinity,
        }
      );
    }
  }, [loader]);

  return (
    <button
      ref={buttonTarget}
      type="button"
      className={`buttonAction button_${nameButton} pulse_${
        loader[nameButton] ? nameButton : "out"
      }`}
      name={nameButton}
      onMouseEnter={checkValidity}
      onClick={handleClick}
      style={{
        background: `linear-gradient(to top, ${listButtons[nameButton].col1}, ${listButtons[nameButton].col2})`,
        animation: `pulse_${nameButton} 1s infinite`,
      }}
    >
      {/* CONTENT BUTTON */}
      {!loader[nameButton] && listButtons[nameButton].content}

      {/* SPINNER BUTTON */}
      {!!loader[nameButton] && <SpinnerButton />}
    </button>
  );
};

export default ButtonAction;
