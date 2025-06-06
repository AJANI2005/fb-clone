import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender/>
        <Post 
          profilePic="https://randomuser.me/api/portraits/men/1.jpg"
          image="https://randomuser.me/api/portraits/men/1.jpg"
          username="John Doe"
          timestamp={Date.now()}
          message="Hello, this is a test post!"
        />
    </div>
  )
}

export default Feed