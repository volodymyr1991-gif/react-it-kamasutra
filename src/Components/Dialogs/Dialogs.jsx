import React from "react";
import DialogItem from "./DialogItem/DialogItme";
import s from "./Dialogs.module.css";
import Mesages from "./Messages/Mwsages";
import { addMesageActionCreator, updateNewMesageActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let newMessages = React.createRef();

  let addMessages = () => {
 props.dispatch(addMesageActionCreator())
  };

  let onChangeMesage = () => {
    let mesage = newMessages.current.value;
  props.dispatch(  updateNewMesageActionCreator(mesage));
  };

  return (
    <div className={s.dialogs}>
      <DialogItem dialogs={props.dialogs} />

      <div>
        <Mesages mesages={props.mesages} />
      </div>
      <div>
       <div>
       <textarea
          ref={newMessages}
          onChange={onChangeMesage}
          value={props.newPostMesage}
        />
       </div>
       <div>
       <button onClick={addMessages}>Add messages</button>
       </div>
        
      </div>
      <div></div>
    </div>
  );
};

export default Dialogs;
