import React from 'react';

import DownLoadIcon from './icons/download';
import './SimpleDownloadButton.scss';

const SimpleDownloadButton = (props) => {
  return (
    <div className="simple-download-button-container">
      <button
        className={`simple-download-button ${
          props.buttonType !== undefined &&
          `simple-download-button--${props.buttonType}`
        }`}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <span className="simple-download-button__icon">
          <span>
            <DownLoadIcon />
          </span>
        </span>
        <span className="simple-download-button__text">
          <span>{props.children}</span>
        </span>
      </button>
      <span className="simple-download-text">{props.children}</span>
    </div>
  );
};
export default SimpleDownloadButton;
