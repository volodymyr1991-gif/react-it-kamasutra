import React from "react";

import s from "./SideBarItem.module.css";
import avatar from "../../../../images/ava.png";

const SideBar = (props) => {

console.log(props.sidebar.sidebar);
 
  return (
    <div>
      <ul className={s.list}>
        {props.sidebar.sidebar.map((p) => (
          <li className={s.listItem}>
            <img className={s.sideBarAva} src={avatar} alt="" />
          <p className={s.listItemName}>{p.name}</p>
          </li>
        ))}
  
      </ul>
    </div>
  );
};

export default SideBar;
