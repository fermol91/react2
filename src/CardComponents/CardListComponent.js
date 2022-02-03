import React, {useState, useEffect} from 'react';
import CartWidget from './CartWidget'

const CardListComponent = () => {
    const [coins, setCoins] = useState ([]);

    useEffect (() => {
        fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
        .then((response) => response.json())
        .then((json) => setCoins(json));

    }, []);

  return (
    
    <div>
        {coins.map((coin) => {
            return(
                <div>
                <CartWidget data={coin} />

            </div>
            )
            
                     
        })}
        
    </div>

  );
  
};

export default CardListComponent;
