import React from "react";
import { useMoralis } from "react-moralis";

export default function WalletConnect() {
  const { authenticate, isAuthenticated, isAuthenticating, logout, user } = useMoralis();

  let button = <button className='wallet-connect' onClick={() => authenticate()}>Connect Wallet</button>

  if (isAuthenticated) {
    button = <button className='wallet-connect' onClick={() => logout()}>{user.attributes.ethAddress}</button>
  }

  return (
    <div>
      {button}
    </div>
  );
}
