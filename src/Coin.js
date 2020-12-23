import React from 'react'
import './Coin.css'

const Coin = ({image,symbol,price,volume,name ,priceChange,high_24h,low_24h}) => {
    return (
      
    <tr>
        <td><img src={image}  height="30px"></img></td>
        <td>{name}</td>
        
        <td>${price.toLocaleString()}</td>
        <td className={priceChange<0 ? 'red-text' :'green-text'}>{priceChange}%</td>
        <td className='green-text'>${high_24h}</td>
        <td className='red-text'>${low_24h}</td>
        <td>${volume}</td>
        
    </tr>
        
    )
}

export default Coin

