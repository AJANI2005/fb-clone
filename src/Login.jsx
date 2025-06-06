import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider, signInWithPopup, GoogleAuthProvider } from './firebase'; // Adjust the import path as necessary
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: user
                });
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook Text" />
            </div>
            <Button type="submit" className="login__button"
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login