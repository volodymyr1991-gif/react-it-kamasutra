import React from "react";
import s from './BackGround.module.css'
import socialImg from '../../../images/social.png'
import ava from '../../../images/ava.jpg'

const ProfileInfo = () => {
return(
    <div>
    <div>
    <img src={socialImg} alt=''/>
    </div>
    <div className={s.description}>
        <div className={s.descriptionImgWrap}>
        <img src={ava} alt='' width='200' height='200'/>
        </div>
        
        <p>Name</p>
       
    </div>
    </div>
)
}

export default ProfileInfo