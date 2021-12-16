import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import WalletConnect from  './walletConnect';

function Market() {
  const [ backing, setBacking ] = useState(0)
  const [floor, setFloor ] = useState(0)

  return (
    <>
    <div className='home-section' style={{ minHeight: 'none' }}>
      <p className='mint-title' >Buy and Sell your AVAX Farmers!</p>
      <div className="your-farmers">
        <p className="subtitle">Your Farmers</p>
        <div className="farmers">
          
        </div>
      </div>
    </div>
    <div className="home-section" id="two">
      <p className="subtitle">Farmers Market</p>
      <div className="market-stats">
        <div className="stat">
          <p>Backing per Farmer</p>
          <p>{backing.toFixed(2)} AVAX</p>
        </div>
        <div className="stat">
          <p>Floor Price</p>
          <p>{floor.toFixed(2)} AVAX</p>
        </div>
      </div>
      <div className="market">

      </div>
    </div>
    </>
  );
}

export default Market;