import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import Header from  './components/Header';
import MintDashboard from './components/MintDashboard';
import Banner from './components/Banner';
import Vote from "./components/Vote";
import Market from "./components/Market";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const [ show, setShow ] = useState('vote');

  const content = {
    home : (
      <div>
        <Banner />
        <MintDashboard />
      </div>
    ),
    vote : (
      <Vote />
    ),
    market: (
      <Market />
    ), 
    portfolio: (
      <Portfolio />
    )
  }
  return (
    <>
      <Header
        home={() => setShow('home')}
        vote={() => setShow('vote')}
        portfolio={() => setShow('portfolio')}
        market={() => setShow('market')}
        mint={() => setShow('home')}
        />
     {content[show]}
     <Footer />
    </>
  );
}

export default App;