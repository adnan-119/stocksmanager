import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Stocks() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState({ top_gainers: [], stocks_in_loss: [], most_bought: [] });
    const [stock, setstock] = useState(
        {
            ticker: '',
            price: '',
            change_amount: '',
            change_percentage: '',
            volume: ''
        }
    );
    async function fetchData() {
        try {
            const response = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
            console.log(response.data);
            setData({
                top_gainers: response.data.top_gainers || [],
                stocks_in_loss: response.data.top_losers || [],
                most_bought: response.data.most_actively_traded || []
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    async function buystock(stock){
        console.log("Buying Stock");
        
        try 
        {
          const response = await axios.post('http://localhost:2123/storemystock', stock);
          if (response.status === 200) 
          {
            //It will set all fields to ""
            setstock({
                ticker: '',
                price: '',
                change_amount: '',
                change_percentage: '',
                volume: ''
            });
          }
          setMessage(response.data);
          setError(''); //set error to ""
          
        } 
        catch(error) 
        {
          setError(error.response.data);
          setMessage(''); //set message to ""
        }


    }
    useEffect(() => {
        fetchData();
        
    }, []);

    return (
        <div>
            {document.title = "Stocks"}
            <div className="main-div">
                <div>
                    <h2>Top Stocks</h2>
                    <div align="center" className="outsideboxes" >
                        <table>
                            <tr>
                        {data.top_gainers.map((stock, index) => (
                            
                            <div key={index} className="insideboxes"style={{margin:"10px"}}>
                                <div className='pintopstocks'>
                               <td> <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.ticker}`}</i></td>
                               <td> <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.price}`}</i></td>
                                <td >{(stock.change_amount>0)?
                                    <div>
                                     <i className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>:
                                     <div>
                                        
                                        <i className="font-insideboxes" style={{color:"rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>
                                     }</td>
                                </div>
                                
                                <div className="button-container">
                                    <button className="BuySmallButton" onClick={buystock}>Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                            
                        ))}
                        </tr>
                        </table>
                    </div>
                    <br />
                    <h2>Stocks In Loss</h2>
                    <div align="center" className="outsideboxes">
                        {data.stocks_in_loss.map((stock, index) => (
                            <div key={index} className="insideboxes"style={{margin:"10px"}}>
                                <div className='pintopstocks'>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.ticker}`}</i>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.price}`}</i>
                                {(stock.change_amount>0)?
                                    <div>
                                     <i className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>:
                                     <div>
                                        
                                        <i className="font-insideboxes" style={{color:"rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>
                                     }
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <h2>Most Bought on our Website</h2>
                    <div align="center" className="outsideboxes">
                        {data.most_bought.map((stock, index) => (
                            <div key={index} className="insideboxes"style={{margin:"10px"}}>
                                <div className='pintopstocks'>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.ticker}`}</i>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.price}`}</i>
                                {(stock.change_amount>0)?
                                    <div>
                                     <i className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>:
                                     <div>
                                        
                                        <i className="font-insideboxes" style={{color:"rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>
                                     }
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sub-main-div">
                    <div className="verticalbox">
                        <h2>Trending</h2>
                        <div align="center" className="outsideboxes">
                        {data.most_bought.map((stock, index) => (
                            <div key={index} className="insideboxes">
                                <div className='pintopstocks'>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.ticker}`}</i>
                                <i className="font-insideboxes">&nbsp;&nbsp; {`${stock.price}`}</i>
                                {(stock.change_amount>0)?
                                    <div>
                                     <i className="font-insideboxes" style={{color:"rgb(81, 201, 81)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>:
                                     <div>
                                        
                                        <i className="font-insideboxes" style={{color:"rgb(255, 0, 0)"}}>&nbsp;&nbsp; {`${stock.change_percentage}`}</i>
                                     </div>
                                     }
                                </div>
                                <div className="button-container">
                                    <button className="BuySmallButton">Buy</button>
                                    <button className="SellSmallButton">Sell</button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}