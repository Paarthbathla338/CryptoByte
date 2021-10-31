import React from 'react'
import "./Watchlist.css"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import axios from 'axios'
import {useState,useEffect} from 'react'


function Watchlist() {
    const [val,setVal]=useState([])
    const [price,setPrice]=useState([])
    const [fun,setFun]=useState([])
    console.log(val)
    console.log(price)
    console.log(fun)


    

    const balance=25000

    




    return (
        <div className="Watchlist">
        <h2 className="Watchlisth2">Welcome,Guest </h2>
        <h4 className="watch"><AccountBalanceIcon/> Balance= ${balance}</h4>
        <form>
            <label className="label">Enter Symbol</label>
            <input type="text" className="input" placeholder="symbol" onChange={event=>setVal(event.target.value)}/>
            <label className="label1">Enter Price</label>
            <input type="text" className="price" placeholder="price" onInput={event=>setPrice(event.target.value)}/>
            <label className="label2">Buy/Sell</label>
            <input type="text" className="func" placeholder="func" onInput={event=>setFun(event.target.value)}/>


        </form>

        
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
