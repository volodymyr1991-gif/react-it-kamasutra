import { React } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../images/images.png";

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/home">
        <img className={s.logo} src={logo} alt="" />
      </NavLink>
    </header>
  );
};

export default Header;
