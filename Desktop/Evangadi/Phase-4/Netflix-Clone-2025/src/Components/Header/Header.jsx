import React, { useState } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/Neflixlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Left side: Logo + Nav */}
        <div className="header_left">
          <div className="header_logo">
            <img src={NetflixLogo} alt="Netflix logo" />
          </div>

          <ul
            className={`header_left_list ${menuOpen ? "mobile_menu_open" : ""}`}
          >
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li className="browse-language">Browse by Languages</li>
          </ul>
        </div>

        {/* Right side icons */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon className="dropdown_arrow" />
            </li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="mobile_menu_toggle" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Header;
