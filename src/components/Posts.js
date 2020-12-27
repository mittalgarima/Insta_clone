import React from "react";
import './Posts.css'
import Avatar from '@material-ui/core/Avatar';

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
function Posts({username,caption,imageUrl}) {
  return(
    <div className="posts">
    <div className="posts_header">
   <Avatar  className="posts_avatar" alt="Jade Scarlado"  src="https://images.unsplash.com/photo-1551843951-401d1d6225d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/> 
<h3>{username}</h3>
</div>
<img  className="posts_img" alt=" " src={imageUrl}/>

<div className="Post_icon">
<li><FavoriteBorderIcon/></li>
<li><CommentIcon/></li>
<li><SendIcon/></li></div> 

   <h4 className="posts_text"><strong>{username}</strong>{caption}</h4> 
   
   </div>
  )
}


export default Posts;