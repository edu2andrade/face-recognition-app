import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center middle mw6">
      <div className="absolute"> 
        <img id="inputimage" alt="" src={imageUrl} width="400px" />
        <div className="bounding-box" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;