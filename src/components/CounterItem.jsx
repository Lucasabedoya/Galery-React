import {useCounter} from "../helpers/useCounter";


export const CounterItem = ({tittle,url}) => {

    const { counter, sumar, restar, reiniciar } = useCounter();


    return(
        <>
            <div className="container-counter">

                <p>Counter : {counter}</p>

                <button onClick={ sumar }>Sumar</button>
                <button onClick={ restar }>Restar</button>
                <button onClick={ reiniciar }>Reiniciar</button>
        
            </div>
        </>
    )
};