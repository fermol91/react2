import React, {useState, useEffect} from 'react';
import CartWidget from './CartWidget'

const CardListComponent = () => {
    const [coins, setCoins] = useState ([]);

    useEffect (() => {
        fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
        .then((response) => response.json())
        .then((json) => setCoins(json.Data));

    }, []);

  return (
    
    <div>
        {coins.map((coin) => {
            return(
                <div key={coin.ID}>
                    <CartWidget Data={coin} />
                </div>
            );
        })}
    </div>
  );

};
export default CardListComponent;
