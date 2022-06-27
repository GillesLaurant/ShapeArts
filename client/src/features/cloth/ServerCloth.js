import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCloth } from "./cloth.slice";

/*******    SERVER CLOTH     *******/

const ServerCloth = () => {
  const dispatch = useDispatch();
  const cloth = useSelector((state) => state.cloth.status);
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    console.log("cloth", socket);
    if (socket) {
      // dispatch(requestCloth());
      // dispatch(getCloth());
    }
  }, [socket, cloth, dispatch]);

  return <div className="serverCloth" />;
};

ServerCloth.propTypes = {};

export default ServerCloth;
