import {React,Component} from "react";
import s from './Profile.module.css'
import MayPosts from "./MayPosts/MayPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MayPostsContainer from "./MayPosts/MayPostsContainer";



const Profile = (props) => {

    return(
        <div className={s.profile}>
       <ProfileInfo/>
        
        {/* <MayPosts posts={props.posts}  newPostText={props.newPostText} dispatch={props.dispatch}/> */}
        <MayPostsContainer />
      </div>
    )
};

export default Profile