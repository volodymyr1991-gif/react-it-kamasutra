import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import SideBarContainer from "./SideBar/sideBarContainer";

const Navigation = ({sidebar}) => {
  return (
    <nav className={s.nav}>
      
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink to="/"  activeClassName={s.activeLinc} >
            Home
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink to="/dialogs" activeClassName={s.active}  >
            Messages
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink to="/profile" activeClassName={s.active}  >
            Profile
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink to="/news" activeClassName={s.active}  >
            News
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink to="/music" activeClassName={s.active}  >
            Music
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink to="/setings" activeClassName={s.active}  >
            Settings
          </NavLink>
        </li>
      </ul>
      <SideBarContainer />
    </nav>
  );
};

export default Navigation;
