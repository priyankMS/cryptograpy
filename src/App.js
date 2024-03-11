import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';

function App() {
 
  const [cryptoData, setCryptoData] = useState([]); //useState to store the data from the API
  const url ="https://api.coincap.io/v2/assets"
 

  console.log(cryptoData);
   const fetchData = async () => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCryptoData(data.data);

    } catch (error) {
      console.log("Error", error);
    }
   }

    
   useEffect(()=>{
      fetchData();
   },[])



  return (


    <div className="App">
       <Header cryptoData={cryptoData}/>
       <Home cryptoData={cryptoData}/>
    </div>
  );
}

export default App;
