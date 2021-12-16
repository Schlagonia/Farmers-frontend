import React, { useState, useRef } from "react";
import { useMoralis } from "react-moralis";
import WalletConnect from  './walletConnect';

function Header() {
  const { isAuthenticated, user } = useMoralis();
  const [ toMint, setToMint ] = useState(1);
  const [ mintPrice, setMintPrice ] = useState(1);
  const [ minted, setMinted ] = useState(0);
  const goToMint = useRef();

  const mint = () => {
    alert(toMint)
  } 

  const increase = () => {
    if(toMint < 10){
      setToMint(toMint + 1)
    }
  }

  const decrease = () => {
    if(toMint > 1){
      setToMint(toMint - 1)
    }
  }

  return (
    <div className='home-section' ref={goToMint} id="mint">
        <p className='mint-title'>Mint a Farmer!</p>
        <div className="mint-section-content">
          <p style={{ fontSize: '2.5rem'}}>Get your part of the future of NFT's</p>
          <p className="mint-p">Current Mint price: {mintPrice} AVAX</p>

          {!isAuthenticated ? <WalletConnect /> : 
          <>
          <div className="'mintbox">
          <div className="tomint-box"> 
            <button 
              className="tomint"
              onClick={decrease}
              >
              -
            </button>
            <p className="tomint-amount">{toMint}</p>
            <button
              className="tomint"
              onClick={increase}>
              +
            </button>
          </div>
            
          </div>
          <button 
               className='mint' 
                onClick={mint} >
                MINT
            </button>
            </> }
          <p className="mint-p">Max of 10 per mint</p>
          <p style={{ fontSize: '2.5rem', paddingTop: '2.5%' }}>{minted}/10,000 Minted</p>
        </div>
    </div>
  );
}

export default Header;