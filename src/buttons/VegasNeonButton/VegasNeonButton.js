import './VegasNeonButton.scss';
import React from 'react';

const VegasNeonButton = (props) => {
  return (
    <button
      className={`vegas-neon-button ${
        props.buttonType !== undefined &&
        `vegas-neon-button--${props.buttonType}`
      }`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default VegasNeonButton;
