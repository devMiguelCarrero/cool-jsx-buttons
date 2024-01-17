import "./Gaming3DButton.scss";
import React from "react";

const Gaming3DButton = (props) => {
  return (
    <span
      className={`gaming-3d-button-container ${
        props.baseType !== undefined &&
        `gaming-3d-button-container--${props.baseType}`
      }`}
    >
      <button
        className={`gaming-3d-button ${
          props.buttonType !== undefined &&
          `gaming-3d-button--${props.buttonType}`
        }`}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </span>
  );
};
export default Gaming3DButton;
