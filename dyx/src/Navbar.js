import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
import fire from "./fire"


function Navbar() {
    const provider = new GoogleAuthProvider();
    const SignIn= (user)=>{    const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return user
            // ...
          })
    }

    return (
        <div className="navbar">
        <Link to="/" style={{textDecoration: 'none',color:"white"}}><div className="heading"><h2>CryptoByte</h2></div></Link>
        <h2 className="Watchlisth2">Welcome,CyByte</h2>

        <div className="options">
        <Link to="/marketplace" style={{textDecoration: 'none',color:"white"}}><h3 className="h33">MarketPlace</h3></Link>
        <Link to="/" style={{textDecoration: 'none',color:"white"}}><h3 className="h32" onClick={SignIn}>Sign In / Sign Up</h3></Link>
        </div>
        </div>
    )
}

export default Navbar
