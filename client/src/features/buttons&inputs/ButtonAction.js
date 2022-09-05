/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../error/error.slice";
import { toggleLoader } from "../loaders/loader.slice";
import { validShape } from "../PannelShape/shape.slice";
import {
  deleteAccount,
  edit,
  loggin,
  loggout,
  register,
} from "../user/user.slice";
import SpinnerButton from "./SpinnerButton";
import "./style.scss";

/*******    ACTION BUTTONS     *******/

const ButtonAction = ({ nameButton }) => {
  const buttonTarget = useRef();
  const dispatch = useDispatch();
  // State
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const loader = useSelector((state) => state.loader);
  // Colors edit buttons
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
      col3: "rgb(41, 77, 160, 0.1)",
    },

    loggin: {
      name: "loggin",
      content: "Se connecter",
      inputs: ["mail", "password"],
      col1: "#6a11cb",
      col2: "#2575fc",
      col3: "rgb(255, 255, 242, 0.01)",
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

    deleteAccount: {
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
      col2: "rgba(96,221,142,1)",
      col1: "rgba(24,138,141,1)",
      col3: "rgba(0, 118, 16, 0.01)",
    },
  };

  // Check validity all inputs form
  const checkValidity = (ev) => {
    ev.preventDefault();
    const button = listButtons[nameButton];
    // Regex list
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

    // If errors add animation else remove animation class
    if (failed.every((item) => !item)) {
      buttonTarget.current.classList.remove("formNoValid");
      if (!loader[nameButton]) {
        buttonTarget.current.disabled = false;
      }
    } else {
      // If not animate
      const classList = [];
      buttonTarget.current.classList.forEach((item) => {
        classList.push(item);
      });
      if (classList.every((classValid) => classValid !== "formNoValid")) {
        // Animate negative
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
            easing: "linear",
          }
        );

        buttonTarget.current.classList.add("formNoValid");
        buttonTarget.current.disabled = true;
      }
    }
  };

  // Handle button action "Register" & "Loggin" & "Loggout" & "Edits" & "Delete" & "ValidShape"
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
            msgError:
              error.errorMsg[input] !== null
                ? error.errorMsg[input]
                : error.listMsg[input],
          })
        );
        echec = true;
      }
    });
    // If any errors dispatch button action
    if (!echec) {
      // Dispatch actions
      switch (nameButton) {
        case "register":
          dispatch(register(nameButton));
          break;
        case "loggin":
          dispatch(loggin(nameButton));
          break;
        case "loggout":
          dispatch(loggout(nameButton));
          break;
        case "deleteAccount":
          dispatch(deleteAccount(nameButton));
          break;
        case "editUsername":
        case "editMail":
        case "editPwd":
          dispatch(edit(nameButton));
          break;
        case "validShape":
          if (user.isLoggin === true && user.id !== -1) {
            dispatch(validShape());
            dispatch(toggleLoader(nameButton));
          }
          break;

        default:
          break;
      }
      if (nameButton !== "validShape") {
        dispatch(toggleLoader(nameButton));
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
      // console.log(loader[nameButton]);
      // Remove pulsing animation loader
      buttonTarget.current.animate(
        [
          { boxShadow: "0 0 0 0px rgba(0, 0, 0, 0)" },
          { boxShadow: "0 0 0 0px rgba(0, 0, 0, 0)" },
        ],
        {
          duration: 1000,
          iterations: Infinity,
        }
      );
      buttonTarget.current.disabled = false;
    } else if (loader[nameButton]) {
      buttonTarget.current.disabled = true;
      buttonTarget.current.animate(
        [
          { boxShadow: `0 0 0 -10px rgba(255, 255, 255)` },
          { boxShadow: `0 0 0 10px ${listButtons[nameButton].col3}` },
        ],
        {
          duration: 1000,
          iterations: Infinity,
        }
      );
    }
  }, [loader, error, nameButton, listButtons]);

  return (
    <button
      ref={buttonTarget}
      type="button"
      className={`buttonAction button_${nameButton} `}
      name={nameButton}
      onMouseEnter={checkValidity}
      onClick={handleClick}
      style={{
        background: `linear-gradient(to top, ${listButtons[nameButton].col1}, ${listButtons[nameButton].col2})`,
      }}
    >
      {/* CONTENT BUTTON */}
      {!loader[nameButton] && listButtons[nameButton].content}

      {/* SPINNER BUTTON */}
      {loader[nameButton] && <SpinnerButton />}
    </button>
  );
};

export default ButtonAction;
