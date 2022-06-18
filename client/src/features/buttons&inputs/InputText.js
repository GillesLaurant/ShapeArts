import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFields } from "../app/user.slice";

import "./style.scss";

const InputText = ({ nameInput }) => {
  const USERNAME_REGEX = /^[A-Za-z_-]/;
  const dispatch = useDispatch();
  const valueField = useSelector((state) => state.user[nameInput]);
  const status = useSelector((state) => state.error);

  // Initialize config
  const fieldConfigs = [
    {
      type: "text",
      placholder: "pseudo",
      max: 15,
    },
    {
      type: "mail",
      placholder: "Email",
      max: 50,
    },
    {
      type: "password",
      placholder: "Mot de passe",
      max: 15,
    },
  ];

  // Sort config / input
  const returnContrains = () => {
    switch (nameInput) {
      // username
      case "username":
      case "usernameEdited":
        return fieldConfigs[0];
      // mail
      case "mail":
      case "mailEdited":
        return fieldConfigs[1];
      // password
      case "password":
      case "holdPwd":
      case "newPwd":
        return fieldConfigs[2];

      default:
        return fieldConfigs[0];
    }
  };

  // Control fields
  const handleField = (ev) => {
    ev.preventDefault();
    dispatch(changeFields({ name: ev.target.name, value: ev.target.value }));
  };

  return (
    <div className={status.error[nameInput] ? "inputUser_error" : "inputUser"}>
      {/* INPUT */}
      <input
        type={returnContrains().type}
        className={
          !status.error[nameInput]
            ? "inputUser-input"
            : "inputUser-input_invalid"
        }
        name={nameInput}
        placeholder={returnContrains().placholder}
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
