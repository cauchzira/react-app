import React from "react";

const PhotoProfile = ({userAvatar}) => {
  return (
    <>
      <img className="photo" src={userAvatar} alt="" />
    </>
  );
};

export default PhotoProfile;
