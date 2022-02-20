import React from "react";
import SideBarItem from "./SideBarItem/SideBarItem";
import s from "./sideBar.module.css";

const SideBar = ({ sidebar }) => {
  return (
    <div>
      <h3 className={s.title}>Friends</h3>

      <SideBarItem sidebar={sidebar}/>
    </div>
  );
};

export default SideBar;
