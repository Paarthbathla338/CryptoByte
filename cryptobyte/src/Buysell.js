import React from 'react'

function Buy_sell() {
    return (
        <div className="form">
            <form>
            <button>BUY</button>
            <button>SELL</button>
            <label>
    Symbol
    <input type="text" name="name" className="symbollabel"/>
  </label>
  <label>Amount</label>
  <input type="text"  defaultValue="0.00 USD" className="amountlabel"/>
  <label>Price Per Token</label>
  <input type="text"  defaultValue="0.00 USD" className="pptlabel"/>

            </form>
        </div>
    )
}

export default Buy_sell
