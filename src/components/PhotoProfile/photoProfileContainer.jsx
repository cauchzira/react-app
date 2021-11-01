import React from "react";
import PhotoProfile from "./photoProfile";
import Avatar from "../../images/avatar.png";
import "./styles.scss";

const PhotoProfileContainer = () => {
  return (
    <>
      <PhotoProfile userAvatar={Avatar} />
    </>
  );
};

export default PhotoProfileContainer;
