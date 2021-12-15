import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function Choice() {

    const [ choice, setChoice ] = useState('')

    return (
        <div className="vote-choice">
          <div className="squaredOne">
            <input
                id="squaredOne"      
                name="one"
                value='one'
                type='checkbox'
                onChange={(e) => setChoice(e.target.value)}
            />
            <label for="squaredOne"></label>
          </div>
          <p>Lend AVAX on Trader Joe. Current APY: 13%</p>
        </div>
    )
}

export default Choice;