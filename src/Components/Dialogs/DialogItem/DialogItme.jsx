import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogItem.module.css";
import avatar from "../../../images/ava.png";

const DialogItem = (props) => {
  let path = "/dialogs/ ";

  return (
    <>
      <ul className={s.dialogsList}>
        {props.dialogs.map((d) => (
          <li className={s.dialogsItem}>
            <NavLink to={`${path}${d.id}`} className={s.dialogsName}>
              <div className={s.dialogsAva}>
                <img src={avatar} alt="" />
              </div>

              <p className={s.dialogsName}>{d.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DialogItem;
