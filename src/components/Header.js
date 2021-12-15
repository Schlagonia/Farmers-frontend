import React from "react";
import { useMoralis } from "react-moralis";
import WalletConnect from  './walletConnect';

function Header(props) {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div className='header'>
    <p 
      className='header-title' 
      onClick={props.home}>
      The AVAX Farmers!
    </p>
    <p
      className="header-link"
      onClick={props.mint}
      >Mint
    </p>
    <p  
      className="header-link"
      onClick={props.vote}
      >Vote
    </p>
      <p
      className="header-link"
      onClick={props.market}
      >Market
    </p>
      <p
      className="header-link"
      onClick={props.portfolio}
      >Portfolio
    </p>
     <WalletConnect />
    </div>
  );
}

export default Header;