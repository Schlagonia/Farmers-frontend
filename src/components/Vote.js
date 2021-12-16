import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import Choice from './Choice'

function Vote() {
  const [ choice, setChoice ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ protocol, setProtocol ] = useState('')
  const [ link, setLink ] = useState('')
  const [ assets, setAssets ] = useState('')

  const submitChoice = (e) => {
    e.preventDefault()
    alert(choice)
  }

  const submitOption = (e) => {
    e.preventDefault()
    if(description && protocol && link && assets){
      alert(description)
    } else{
      alert('Enter all require information')
    }
  }

  return (
   <> 
    <div className='home-section'>
      <p className='mint-title' >Vote on how to deploy the Farmers Treasury!</p>
      <p className="subtitle">Choose from one of the options below</p>
      <form className='vote' onSubmit={submitChoice}>
        <Choice 
          chosen={choice}
          id='AVAX'
          choose={(id) => setChoice(id)}
        />
        
        <input 
          className='vote-submit' 
          type="submit" 
          value="Submit" 
          />
      </form>
    </div>
    <div  className='home-section' id="two">
      <p className="mint-title">Submit a new investment option!</p>
      <form
        className="vote"
        onSubmit={submitOption}
      >
        <div className='input-option'>
          <p>Description: </p>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='input-option'>
        <p>Prototocl: </p>
        <input
          type='text'
          value={protocol}
          onChange={(e) => setProtocol(e.target.value)}
          />
        </div>
        <div className='input-option'>
        <p>Assets: </p>
        <input
          type='text'
          value={assets}
          onChange={(e) => setAssets(e.target.value)}
          />
        </div>
        <div className='input-option'>
          <p>Link: </p>
        <input
          type='text'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <input
            type='submit'
            value='Submit'
            className='vote-submit'
            />
      </form>
    </div>
   </> 
  );
}

export default Vote;