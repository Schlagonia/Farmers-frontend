import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function Portfolio() {
    const [ oneDay, setOneDay ] = useState(0);
    const [ oneWeek, setOneWeek ] = useState(0);
    const [ oneMonth, setOneMonth ] = useState(0);
    const [ oneYear, setOneYear ] = useState(0);

  return (
    <div className='home-section'>
        <p className='mint-title' >Track the performance of the Farmers Treasury!</p>
        <div className="chart">

        </div>
        <div className="returns">
            <p className="return">24hr return: {oneDay.toFixed(2)}%</p>
            <p className="return">7D return: {oneWeek.toFixed(2)}%</p>
            <p className="return">30D return: {oneMonth.toFixed(2)}%</p>
            <p className="return">1Y return: {oneYear.toFixed(2)}%</p>
        </div>
    </div>
  );
}

export default Portfolio;