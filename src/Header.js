import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header_img"
          // className="header_icon"
          src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
          alt="tinder Logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
