import React, { useRef, useEffect } from "react";
import "./style.scss";

/*******    LOADER START     *******/

const LoaderCloth = () => {
  const loader = useRef();

  useEffect(() => {
    loader.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  return (
    <div className="loaders">
      {
        <>
          <div className="loaders_cloth" />
          <div className="loaders_cloth" ref={loader} />
          <div className="loaders_cloth" />
        </>
      }
    </div>
  );
};

export default LoaderCloth;
