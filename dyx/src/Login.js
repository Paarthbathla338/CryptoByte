import React from 'react'
import fire from "./fire"
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";



function Login() {

    const provider = new GoogleAuthProvider();
    const SignIn= ()=>{    const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
          })
    }



    return (
        <div>
        <button onClick={SignIn}>Sign In With Google</button>
            
        </div>
    )
}

export default Login
