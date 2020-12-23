import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import Coin from './Coin';
import NavBar from './NavBar';
import Spinner from './Spinner';
import Table from './Table';
import Footer from './Footer';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    e.preventDefault()
    console.log(e)
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <NavBar/>
     <div className='coin-app'>
       <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div> 
     
 
      {filteredCoins.length===0
     
          ?
           <Spinner/>:
           <Table filteredCoins={filteredCoins}/>}    
    </div>
    </>
  );
}

export default App;
