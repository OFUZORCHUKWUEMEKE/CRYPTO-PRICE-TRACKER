import React from 'react'
// import Spinner from './Spinner'
import Coin from './Coin'

const Table = ({filteredCoins}) => {
  const  style ={
    fontFamily:'monospace'
  }
    return (
      <>
        <div class="table-responsive mt-5"> 
        <table class="table table-hover table-dark">
          
            <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">coin</th>
               
               <th scope="col">$Current Price</th>
               <th scope="col">Price-Change 24hr%</th>
               <th scope="col">$High_24hr</th>
               <th scope="col">$Low_24hr</th>
               <th scope="col">$24hr_Volume</th>

               
            </tr>
          </thead>
         <tbody>
          {
           filteredCoins.map(coin=>{
            return(
           <Coin  
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            high_24h={coin.high_24h}
            low_24h={coin.low_24h}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}/>
          )
        })
      }
     

   
         
         </tbody>
      </table>
   </div>
   <p className="center-align mt-3" style={style}>Developed by OFUZOR CHUKWUEMEKE💻 </p>
   </>
    )
}

export default Table
