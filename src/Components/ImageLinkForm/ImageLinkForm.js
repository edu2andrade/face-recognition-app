import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div className="pa2">
      <p className="white-80 f5">
        This Alien will detect faces in your pictures. Give it a try!
      </p>
      <div className="bg-pattern center mw6 ma3 pa4 br3 shadow-5">
        <div className="flex">
          <input
            className="bn w-70 br0 pa2 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="bn w-30 br0 link pv2 bg-red white pointer dim"
            onClick={onBtnSubmit}
          >
            Detect!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
