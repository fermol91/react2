import React, {useState} from "react";


const Contador = () => {

    
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(8);
    
    const handlerCounterUp = () => {
        setCounter(counter + 1);
    };
    const handlerCounterDown = () => {
        setCounter(counter - 1);
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