import React from "react";

import {
  addMesageActionCreator,
  updateNewMesageActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessages = () => {
          store.dispatch(addMesageActionCreator());
        };

        let onChangeMesage = (mesage) => {
          let action = updateNewMesageActionCreator(mesage);
          store.dispatch(action);
        };

        return (
          <Dialogs
            onAddMesage={addMessages}
            updateChangeTextMesages={onChangeMesage}
            mesages={state.profilePage.mesages}
            dialogs={state.profilePage.dialogs}
            updateNewTextMesages={state.profilePage.newPostMesage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
