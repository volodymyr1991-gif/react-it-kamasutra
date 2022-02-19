import React from "react";
import SideBarItem from './SideBarItem/SideBarItem'
import s from "./sideBar.module.css";
import StoreContext from "../../../StoreContext";

const SideBar = ({sidebar}) => {
  return (
    <div>
      <h3 className={s.title}>Friends</h3>
      <StoreContext.Consumer>
        {
          (store)=>{
            console.log();
            return(
<SideBarItem sidebar={store.getState().sideBar.sidebar}/>
            )
          }
        }
      </StoreContext.Consumer>
      
    </div>
  );
};

export default SideBar;
