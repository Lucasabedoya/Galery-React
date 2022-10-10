import { useState } from "react";

export const useCounter = ( initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const sumar = () => {
        setCounter(counter + 1);
    };

    const restar = () => {
        setCounter(counter - 1);
    };

    const reiniciar = () => {
        setCounter(initialValue);
    };

    return { counter, sumar, restar, reiniciar };

};