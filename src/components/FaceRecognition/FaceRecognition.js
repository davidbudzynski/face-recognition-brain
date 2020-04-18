import React from "react";

const FaceRecogniton = ({ imageUrl }) => {
  return (
    <div className="center na">
      <div className="absolute mt2">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecogniton;
