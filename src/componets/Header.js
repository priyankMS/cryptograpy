import * as React from 'react';
import Box from '@mui/material/Box';
import bitcoin from "../assets/image/bitcoin.png";
import etherium from "../assets/image/etherium.jpg"
import tether  from "../assets/image/tether.png"
import solana from "../assets/image/solana.png"

export default function Header({ cryptoData }) {
  // Slice the first four elements from cryptoData
  const topFourCryptoData = cryptoData.slice(0, 4);

  return (
    <Box  display="flex" flexDirection="row" justifyContent="center" alignItems="center"  sx={{ gap: '10px', marginTop: "20px" }}>
      {topFourCryptoData.map((crypto, index) => (
        <Box
          key={index}
          height={200} width={200} bgcolor="black" alignItems="center" gap={4} p={2}
          sx={{ border: '2px solid grey', borderRadius: '16px', color: 'white' }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: "5px", marginTop: "10px" }}>
            {crypto.id === 'bitcoin' && <img src={bitcoin} alt='my-image' width={50} height={40} />}
            {crypto.id === 'etherium' && <img src={etherium} alt='my-image' width={50} height={40} />}
            {crypto.id === 'tether' && <img src={tether} alt='my-image' width={50} height={40} />}
            {crypto.id === 'solana' && <img src={solana} alt='my-image' width={50} height={40} />}
            <div style={{ marginLeft: "10px" }}>
              <h2 >{crypto.name}</h2>
              <p >{crypto.priceUsd}</p>
            </div>
          </div>
        </Box>
      ))}
    </Box>
  );
}
