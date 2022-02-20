import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import store from "./redux/redux-store";
import  { Provider } from "react-redux";


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <App
          // mesages={state.mesagesPage}
          // dialogs={state.profilePage}
          // sidebar={state.sideBar}
          // newProfileMesage={state.profilePage}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
        />
      </Provider>
        
      </BrowserRouter>
      ,
    </React.StrictMode>,

    document.getElementById("root")
  );




// store.subscribe(() => {
//   let state = store.getState();
//   renderEntaurTree(state);
// });

// updateNewPostText={store.updateNewPostText.bind(store)}
// addMesage={store.addMesage.bind(store)}
// updateNewPostMesage={store.updateNewPostMesage.bind(store)}
