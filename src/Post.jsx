import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__avatar">
          <Avatar src={profilePic} />
        </div>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp).toLocaleString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
        {image && <img src={image} alt={message} />}
      </div>
    </div>
  )
}

export default Post