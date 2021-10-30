import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' class="cryptoimage" />
          <h4>{name} ({symbol.toUpperCase()})</h4>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>Price: <span>${price}</span></p>
          <p className='coin-volume'>Volume: ${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'><strong>% Change: </strong>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'><strong>% Change: </strong>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
