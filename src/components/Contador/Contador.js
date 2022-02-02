import React, {useState} from "react";


const Contador = () => {

    const stock = 8;
    const initial = 1;
    
    const [counter, setCounter] = useState(1);
        
    const handlerCounterUp = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    };
    const handlerCounterDown = () => {
        if (counter > initial){
            setCounter(counter - 1);
        }
    };

    return (
        <div className="Contador">
            <h1>Mi Contador</h1>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>Incrementar</button>
            <button onClick={handlerCounterDown}>Decrementar</button>
        </div>
    );
};

export default Contador;