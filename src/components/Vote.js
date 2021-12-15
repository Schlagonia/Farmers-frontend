import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import Choice from './Choice'

function Vote() {
  const [ choice, setChoice ] = useState('')
  const [ option, setOption ] = useState('')

  const submitChoice = (e) => {
    e.preventDefault()
    alert(choice)
  }

  const submitOption = (e) => {
    e.preventDefault()
    alert(option)
  }

  return (
    <div className='home-section'>
      <p className='mint-title' >Vote on how to deploy the Farmers Treasury!</p>
      <form className='vote' onSubmit={submitChoice}>
        <Choice />
        
        <input 
          className='vote-submit' 
          type="submit" 
          value="Submit" 
          />
      </form>
      <form
        className="add-option"
        onSubmit={submitOption}
      >
        <input
          type='text'
          value={option}
          onChange={(e) => setOption(e.target.value)}
          />
          <input
            type='submit'
            value='submit'
            />
      </form>
    </div>
  );
}

export default Vote;