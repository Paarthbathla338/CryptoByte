import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
        <Link to="/" style={{textDecoration: 'none',color:"white"}}><div className="heading"><h2>CryptoByte</h2></div></Link>

        <div className="options">
        <Link to="/marketplace" style={{textDecoration: 'none',color:"white"}}><h3 className="h33">MarketPlace</h3></Link>

        <h3 className="h32">Sign In / Sign Up</h3>
        </div>
        </div>
    )
}

export default Navbar
