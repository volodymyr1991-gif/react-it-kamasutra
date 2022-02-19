import React, { createRef } from "react";
import s from "./MayPosts.module.css";
import Post from "./Post/Post";


const MayPosts = (props) => {
  let newPostsText = React.createRef();

  let addPosts = () => {
    // props.dispatch(addPostActionCreator());
    props.onAddPosts()
  };

  let onPostChange = () => {
    let text = newPostsText.current.value;
    // props.dispatch(updateNewPostTextActionCreator(text));
    props.updateNewPostText(text)
  };

  return (
    <div className={s.post}>
      <h3> May post</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostsText}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPosts}>Add post</button>
      </div>
      <div className={s.post}>
        <Post posts={props.posts} />
      </div>
    </div>
  );
};

export default MayPosts;
