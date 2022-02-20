import { connect } from "react-redux";
import {
  addMesageActionCreator,
  updateNewMesageActionCreator,
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    mesages: state.profilePage.mesages,
    dialogs: state.profilePage.dialogs,
    updateNewTextMesages: state.profilePage.newPostMesage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMesage: () => {
      dispatch(addMesageActionCreator());
    },
    updateChangeTextMesages: (mesage) => {
      let action = updateNewMesageActionCreator(mesage);
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
