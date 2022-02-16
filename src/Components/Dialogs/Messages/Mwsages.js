import React from "react";
import s from "./Mesages.module.css";

const Mesages = ({ mesages }) => {
  return (
    <div>
      <ul className={s.messagesList}>
        {mesages.map((mesage) => (
          <li key={mesage.id} className={s.massageListItem}>
            <p>{mesage.mesage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mesages;
