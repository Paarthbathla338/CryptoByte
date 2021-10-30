import React,{useState,useEffect} from 'react'
import axios from "axios"
import Coin from './Coin';


function Marketplace() {
    const [coins,setCoins]=useState([])
    const [search, setSearch] = useState('');

    // coins
    useEffect(()=>{
        axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=24h%2C7d')
        .then(res=>{
            setCoins(res.data) 
            console.log(res.data)})
    })
    const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

    return (
        <>
        <div className="data">
        {filteredCoins.map(coin => {
            return(
        
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          
              style={{display:"flex", flexDirection:"row"}}
              
          />
          )
       

        })}        
        </div>
        </>
)

}

export default Marketplace

