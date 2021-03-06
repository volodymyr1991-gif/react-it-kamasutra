const ADD_MESAGE = "ADD-MESAGE";
const UPDATE_NEW_POST_MESAGE = "UPDATE-NEW-POST-MESAGE";

let initialState = {
  mesages: [
    { id: 1, mesage: "hi my friend" },
    { id: 2, mesage: "Hov are you" },
    { id: 3, mesage: "whot your name" },
    { id: 1, mesage: "React" },
    { id: 1, mesage: "html" },
  ],
  newPostMesage: "incubator.com",
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "AndreMarky" },
    { id: 1, name: "Taras" },
    { id: 1, name: "Sofia" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESAGE: {
      let newPostMesage = {
        id: 6,
        mesage: state.newPostMesage,
      };

      let stateCopy = { ...state };
      stateCopy.mesages = [...state.mesages];

      stateCopy.mesages.push(newPostMesage);
      stateCopy.newPostMesage = "";

      return stateCopy;
    }

    case UPDATE_NEW_POST_MESAGE: {
      let stateCopy = { ...state };
      stateCopy.newPostMesage = action.newText;

      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMesageActionCreator = () => ({ type: ADD_MESAGE });

export const updateNewMesageActionCreator = (text) => ({
  type: UPDATE_NEW_POST_MESAGE,
  newText: text,
});

export default dialogsReducer;
