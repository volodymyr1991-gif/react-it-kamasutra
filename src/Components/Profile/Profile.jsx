import {React,Component} from "react";
import s from './Profile.module.css'
import MayPosts from "./MayPosts/MayPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// class Profile extends Component{
//   render(){
//     console.log(this.props.item);
//     return(
//       <div className={s.profile}>
//        <ProfileInfo/>
        
//         <MayPosts props={this.props.item}/>
//       </div>
//     )
//   }
// }

const Profile = (props) => {
  console.log(props.posts);
    return(
        <div className={s.profile}>
       <ProfileInfo/>
        
        <MayPosts posts={props.posts}  newPostText={props.newPostText} dispatch={props.dispatch}/>
      </div>
    )
};

export default Profile