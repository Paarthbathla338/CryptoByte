import React from 'react'
import "./Watchlist.css"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import axios from 'axios'
import {useState,useEffect} from 'react'


function Watchlist() {
    const [val,setVal]=useState([])
    const [price,setPrice]=useState([])
    const [fun,setFun]=useState([])
    const [qty,setQty]=useState([])

    console.log(val)
    console.log(price)
    console.log(fun)
    console.log(qty)



    
const order=()=>{alert(`Order Executed-Bought ${val} for ${price} and quantity ${qty}. Status:Success`)}
    


    




    return (
        <div className="Watchlist">
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
        <div className="formdiv">
        <h3 className="info">Buy {val} * {qty} Qty</h3>
        <form className="form">
            <label className="label"> Symbol </label>
            <input type="text" className="input" placeholder="" onChange={event=>setVal(event.target.value)}/>
            <label className="label1"> Price</label>
            <input type="text" className="price" placeholder="" onInput={event=>setPrice(event.target.value)}/>
            <label className="label2"> Quantity</label>
            <input type="text" className="qty" placeholder="" onInput={event=>setQty(event.target.value)}/>
            <label className="label3">Buy/Sell</label>
            <input type="text" className="func" placeholder="" onInput={event=>setFun(event.target.value)}/>


        </form>
            <button className="it" onClick={order}>Initiate Transaction</button>

        
        </div>





        </div>
        
    )
    
}


// const id= ()=>{ 
//         const val=document.querySelector("input").value
//         console.log(val)
//     }
//     const price=()=>{ 
//         const pr=document.querySelector("price").value
//         console.log(pr)
//     }
//     const fun=()=>{ 
//         const bs=document.querySelector("func").value
//         console.log(bs)
//     }



export default Watchlist
