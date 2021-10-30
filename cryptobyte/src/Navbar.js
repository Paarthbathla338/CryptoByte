import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"


function Navbar() {
    return (
        
        <><div className="navbar">

            <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <span>Crypto Byte</span>
                </Link>

            </div>

            <div className="opts">

                <Link to="/MarketPlace" style={{ textDecoration: 'none' }}><span>MarketPlace</span></Link>






            </div>

            <div className="opts2">
                <Link to="/buy_sell" style={{ textDecoration: 'none' }}>Buy/Sell</Link>


            </div>

            <div className="opts3">
                Your Orders


            </div>
            <div className="opts4">
                Portfolio
            </div>
            

        
            

        </div>
        <div className="market">
                <div className="promotee">
                    <h3 className="promote1">TRADE CRYPTO CONFIDENTLY </h3>
                    <h3 className="promote2">WITH OUR</h3>
                    <h3 className="promote3">CUTTING EDGE TECHNOLOGY</h3>
                    <button style={{ display: "flex", flexDirection: "Column", width: "300px", height: "40px", marginLeft: "60px", justifyContent: "center", borderRadius: "8px" }}>
                        <h4 style={{ textAlign: "center", justifyContent: "center", margin: "auto", }}>Sign Up for Your Free Trial</h4>
                    </button>


                </div>


                <div className="chart">
                    <img src="https://t4.ftcdn.net/jpg/02/03/66/93/360_F_203669387_m7IvXlkV0FQwA69Xpt8AwlAdO5Ih05Mc.jpg" style={{ width: "501px", height: "275px", paddingLeft: "400px", }} alt="chartimg" />
                </div>


            </div>
            </>

        
            

    )
}

export default Navbar
