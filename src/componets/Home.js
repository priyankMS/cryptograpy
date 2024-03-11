import React from 'react';
import './Home.css'; // Import your CSS file for styling

function Home({ cryptoData }) {
  return (
    <div>
      <h1>Cryptocurrency List</h1>
      <div className="crypto-container">
        {cryptoData.map(crypto => (
          <div className="crypto-box" key={crypto.id}>
            <strong>{crypto.name}</strong>
            <p className='price'>Price: ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
            <p>Symbol: {crypto.symbol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
