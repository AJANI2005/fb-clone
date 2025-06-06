import React from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider'; 
import db from './firebase'; 
import { serverTimestamp } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore'; // Import Firestore functions

function MessageSender() {

    const [input, setInput] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    const [{ user }, dispatch] = useStateValue();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input && !imageUrl) {
            return; // Prevent submission if both fields are empty
        }
        // some db stuff
        const newData = { 
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user?.photoURL,
            username: user?.displayName,
            image: imageUrl,
        };
        addDoc(collection(db, "posts"), newData);

        // Handle form submission logic here
        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar
                    className="messageSender__avatar"
                    src={user?.photoURL}
                    alt={user?.displayName || "User Avatar"}

                />
                <form>
                    <input
                        className="messageSender__input"
                        placeholder={`What's on your mind ${user?.displayName}?`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='Image URL (Optional)' 
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>

                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender