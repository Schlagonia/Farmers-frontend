import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import link from '../resources/External_link.png';

function Choice(props) {

    const [ choice, setChoice ] = useState('')

    return (
        <div className="vote-choice" onClick={() => props.choose(props.id)}>
            <div className="check-box">
                {props.chosen == props.id  ? 
                    <p>{String.fromCharCode(10004)}</p>:
                    <p> </p>
                 }
            </div>
            <div className="choice-content">
                <div className='choice-text'>
                    <p>-Lend AVAX on Trader Joe</p>
                </div>
                <div className="link-square">
                    <a 
                        href="https://traderjoexyz.com/#/lending/supply/0xC22F01ddc8010Ee05574028528614634684EC29e" 
                        target="_blank" 
                        className="choice-link">
                            <img src={link} className="external-link"/>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Choice;