import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db, { collection, onSnapshot } from './firebase';

function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // Set up a real-time listener to the "posts" collection
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Clean up listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(({ id, data: { profilePic, image, username, timestamp, message } }) => (
        <Post
          key={id}
          profilePic={profilePic}
          image={image}
          username={username}
          timestamp={timestamp}
          message={message}
        />
      ))}
    </div>
  );
}

export default Feed;
