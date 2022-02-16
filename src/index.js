import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import store from "./redux/redux-store";

let renderEntaurTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          mesages={state.mesagesPage}
          dialogs={state.profilePage}
          sidebar={state.sideBar}
          newProfileMesage={state.profilePage}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
      ,
    </React.StrictMode>,

    document.getElementById("root")
  );
};

renderEntaurTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntaurTree(state);
});

// updateNewPostText={store.updateNewPostText.bind(store)}
// addMesage={store.addMesage.bind(store)}
// updateNewPostMesage={store.updateNewPostMesage.bind(store)}
