import React from "react";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MayPosts from "./MayPosts";

import {connect} from 'react-redux'

// const MayPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onAddPosts = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MayPosts
//             onAddPosts={onAddPosts}
//             updateNewPostText={onPostChange}
//             newPostText={state.mesagesPage.newPostText}
//             posts={state.mesagesPage.posts}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) =>{
  return{
    newPostText: state.mesagesPage.newPostText,
    posts: state.mesagesPage.posts
  }
};

let mapDispatchToProps= (dispatch)=>{
  return{
    onAddPosts: ()=>{
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text)=>{
      let action = updateNewPostTextActionCreator(text);
     dispatch(action);
    }

  }
}

const MayPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MayPosts)

export default MayPostsContainer;
