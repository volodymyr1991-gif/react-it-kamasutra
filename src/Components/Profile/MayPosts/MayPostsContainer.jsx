import React from "react";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MayPosts from "./MayPosts";

const MayPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onAddPosts = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MayPosts
            onAddPosts={onAddPosts}
            updateNewPostText={onPostChange}
            newPostText={state.mesagesPage.newPostText}
            posts={state.mesagesPage.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MayPostsContainer;
