import React from "react";

const PhotoProfile = ({photo}) => {
  return (
    <>
      <img className="photo" src={photo} alt="" />
    </>
  );
};

export default PhotoProfile;
