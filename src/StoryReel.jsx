import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
  return (
      <div className="storyReel">
        {/** Story */}
        <Story 
          image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          profileSrc="https://randomuser.me/api/portraits/men/1.jpg"
          title="ajani"
        />
        <Story 
          image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
          title="john"
        />
        <Story 
          image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
          title="adam"
        />
        <Story 
          image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
          title="jake"
        />
        <Story 
          image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
          title="jake"
        />

      </div>
  )
}

export default StoryReel