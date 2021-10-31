import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
        <Link to="/" style={{textDecoration: 'none',color:"white"}}><div className="heading"><h2>CryptoByte</h2></div></Link>
        <h2 className="Watchlisth2">Welcome,Guest</h2>

        <div className="options">
        <Link to="/marketplace" style={{textDecoration: 'none',color:"white"}}><h3 className="h33">MarketPlace</h3></Link>
        <Link to="/auth" style={{textDecoration: 'none',color:"white"}}><h3 className="h32">Sign In / Sign Up</h3></Link>
        </div>
        </div>
    )
}

export default Navbar
