import { React, Component } from "react";
import s from "./Post.module.css";

// class Post extends Component{

//   render(){
//     const postData = this.props.props.props
//     console.log('dara',postData);
//     return(
//       <div className={s.post}>
//       <ul className={s.postList}>
//         {postData.map((post) => (
//           <li className={s.postListItem}>
//             <img className={s.postImg}
//               src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
//               alt=""
//             />
//             <p>{post.mesage}</p>
//             <p>age:{post.age}</p>
//             <p>Like:{post.like}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//     )
//   }
// }

const Post = ({ posts }) => {
  return (
    <div className={s.post}>
      <ul className={s.postList}>
        {posts.map((post) => (
          <li className={s.postListItem}>
            <img
              className={s.postImg}
              src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
              alt=""
            />
            <p>{post.mesage}</p>
            <p>age:{post.age}</p>
            <p>Like:{post.like}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
