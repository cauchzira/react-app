import React from "react";
import {Link} from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <h1 className="header_title">V-Chat</h1>
      </div>
      <div className="header_buttons">
        <Link className="header_link" to="/profile">
          Профиль
        </Link>
        <Link className="header_link" to="/messanger">
          Мессенджер
        </Link>
      </div>
    </div>
  );
};

export default Header;
