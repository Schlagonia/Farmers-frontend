import React, { useState } from "react";
import farmer from '../resources/wheat-field.jpg';

function Banner() {


  return (
    <>
      <div className='home-section'>

        <div className="home-section-content">
        
          <div className="intro-farmers">
           <img src={farmer} className='farmer' />
          </div>
          
        <div className="intro-text-box">
        <p className='home-section-title' id="home-section-title-right">Welcome to the Farm:</p>
        <p className="intro-section-p">
        AVAX Farmers is a unique NFT project built on top of the Avalanche Blockchain
        <br></br>
        <br></br>
        The Farmers NFT aims to be the first of its kind, where the funds raised fromt the mint
        are collectevily used to farm the ripe fields of the Avalanche ecosystem.
        <br></br>
        </p>
        
        <button className='home-section-more' >
      
          {String.fromCharCode(8681)}
        </button>
        </div>

        </div>
        
        
      </div>
      <div className='home-section' id="two">

        <p className='home-section-title' >How it Works:</p>
        <div className="home-section-content">
        <div className="home-section-text-box">
        <p className="home-section-p">
        In most projects the proceeds from the mint go directly into the pockets of the creators of the project. This leaves the value
        of the NFT reliant purely on the demand for the artwork which can vary widely. The AVAX Farmers aim to change that. 
        <br></br>
        <br></br>
        All funds raised during the mint will go to AVAX Farmers treasury and will be deployed in the Avalanche ecosystem based on the
        Farmer holders votes. This creates a defacto Investment DAO run by the NFT holders. At any time a holder of the NFT can burn their
        NFT and get back the equal amount of their portion of the treasury. This creates a literal floor price for every NFT that the price 
        can't go under. 
        <br></br>
        <br></br>
        Votes for farming allocations will be done quarterly and each NFT counts as one vote.   
        <br></br>
        <br></br>
        This not only helps bring value to AVAX and the protocols built on it but creates a literal floor price
        
        for the project, while keeping the NFT upside!
        <br></br>
        </p>
        </div>
          <div className="hiw-farmers">
            <img src={farmer} className='farmer' />
            <img src={farmer} className='farmer' />
            <img src={farmer} className='farmer' />
          </div>
        </div>
        
        
      </div>
    </>
  );
}

export default Banner;