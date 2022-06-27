import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFields } from "../user/user.slice";
import "./style.scss";

/*******    TEXT INPUTS     *******/

const InputText = ({ nameInput }) => {
  const dispatch = useDispatch();
  const valueField = useSelector((state) => state.user[nameInput]);
  const status = useSelector((state) => state.error);

  // List fields config
  const fieldConfigs = {
    username: {
      type: "text",
      placholder: "Pseudo",
      max: 15,
    },
    mail: {
      type: "mail",
      placholder: "Email",
      max: 50,
    },
    password: {
      type: "password",
      placholder: "Mot de passe",
      max: 15,
    },
    usernameEdited: {
      type: "text",
      placholder: "Nouveau pseudo",
      max: 15,
    },
    mailEdited: {
      type: "mail",
      placholder: "Nouvelle adresse mail",
      max: 50,
    },
    holdPwd: {
      type: "password",
      placholder: "Ancien mot de passe",
      max: 15,
    },
    newPwd: {
      type: "password",
      placholder: "Nouveau mot de passe",
      max: 15,
    },
  };

  // Control fields
  const handleField = (ev) => {
    ev.preventDefault();
    dispatch(changeFields({ name: ev.target.name, value: ev.target.value }));
  };

  return (
    // Set :error div
    <div className={status.error[nameInput] ? "inputUser_error" : "inputUser"}>
      {/* INPUT */}
      <input
        type={fieldConfigs[nameInput].type}
        // Set :invald input
        className={
          !status.error[nameInput]
            ? "inputUser-input"
            : "inputUser-input_invalid"
        }
        name={nameInput}
        placeholder={fieldConfigs[nameInput].placholder}
        value={valueField}
        onChange={handleField}
        required
      />

      {/* ERROR INPUT MESSAGE */}
      <p
        className={
          status.error[nameInput]
            ? " inputUser-error_visible"
            : "inputUser-error"
        }
      >
        {status.errorMsg[nameInput]}
      </p>
    </div>
  );
};

export default InputText;
