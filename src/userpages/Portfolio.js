import React, { useState, useEffect } from 'react';
import MyStocksdata from './data/trendingstocks.json';
import graphdata from './data/graph.json';
import { Line } from "react-chartjs-2";
import  'chart.js/auto';

export default function Portfolio() {
  const [count, setCount] = useState(0);
  const [MyStocks, setMyStocks] = useState([]);
  const [chartData, setChartData] = useState({
    labels: graphdata.map((data) => data.year), // X-axis labels
    datasets: [
      {
        label: "Users gained",
        data: graphdata.map((data) => data.userGain),
        // Add any additional dataset properties here if needed
      },
    ],
  });
  

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white' // Solid white color for x-axis labels
        }
      },
      y: {
        ticks: {
          color: 'white' // Solid white color for y-axis labels
        }
      }
    }
  };

  useEffect(() => {
    let sum = 0;
    MyStocks.map((stock) => {
      sum += parseFloat(stock.current_price);
      return sum;
    });
    
    setCount(sum);
    setMyStocks(MyStocksdata);
    // Update only the datasets property, keep labels intact
    setChartData(prevState => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0], // Keep existing dataset properties
          data: graphdata.map((data) => data.userGain), // Update data property
        },
      ],
    }));
  }, [MyStocks]);

  return (
    <div className="portfolio-container">
      <div className="main-div-portfolio">
        <div className="verticalboxportfolio">
          <h2>My Stocks</h2>
          <div align="center" className="outsideboxes">
            {MyStocks.map((Mystock, index) => (
              <div key={index} className="insideboxes">
                <div className="pintopstocks"style={{marginTop:"15px"}}>
                  <i >&nbsp;&nbsp; {Mystock.symbol} </i>
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.sname} </i>
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.current_price}</i>
                  {
                  (Mystock.change_percent>0)?
                  <i className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; {`${Mystock.change_percent}%`}</i>:
                  <i className="font-insideboxes" style={{color:" rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${Mystock.change_percent}%`}</i>
                  }
                  
                  <i className="font-insideboxes">&nbsp;&nbsp; {Mystock.sector}</i>
                </div>
                <div className="button-container-portfolio">
                  <button className="BuySmallButton">Buy</button>
                  <button className="SellSmallButton">Sell</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sub-main-div-portfolio" style={{marginLeft:"40px"}}>
        <div className="verticalboxportfolio">
          <h2 style={{ marginLeft: "0px" }}>My Graph</h2>
          <div className="outsideboxgraph">
            <Line data={chartData} options={options} />
          </div>
        </div>
        <div className="verticalboxportfolio">
          <h2>Investments</h2>
          <div className="outsideboxinvestments"  style={{alignItems:"center"}}>
            
            <div style={{marginRight:"10px",alignItems:"center"}} >
            <b style={{color:"white",marginLeft:"45px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px"}}>Invested</b>
            <h1 style={{color:"white",marginLeft:"45px"}}>{`$1907.63`}</h1>
            </div>
            <div>
              <b style={{color:"white",marginLeft:"45px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"20px"}}>Current Value</b>
              <h1 style={{color:"white",marginLeft:"65px"}}>{` $${count.toFixed(2)}`}</h1>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}