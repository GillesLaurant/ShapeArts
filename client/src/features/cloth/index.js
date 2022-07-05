import React from "react";
import { useSelector } from "react-redux";
import ErrorLoading from "../error/ErrorLoading";
import LoaderCloth from "../loaders/LoaderCloth";
import ServerCloth from "./ServerCloth";
import UserCloth from "./UserCloth";

/*******    CLOTHS CONTAINER     *******/

const ClothsContainer = () => {
  const loading = useSelector((state) => state.loader.cloth);
  const error = useSelector((state) => state.error.error.socket);

  return (
    <div className="clothsContainer">
      {loading && (
        <div className="loaderCloth">
          {!error && <LoaderCloth />}
          {error && <ErrorLoading />}
        </div>
      )}
      <UserCloth />
      <ServerCloth />
    </div>
  );
};

export default ClothsContainer;
