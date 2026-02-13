import { useState } from "react"

export function Vote({name}) {
    const [count, setCount] = useState(0);

    const btnStyle = {
        border: '1px solid gold',
        borderRadius: '3px',
        margin: '8px',
        backgroundColor: 'white',
        color: 'blue'
    };

    const incraseLike = () => {
        const newCount = count + 1;

        setCount(newCount);
    }
   return (
    <>
        <button onClick={incraseLike} style={btnStyle}>{name} ({count})</button>
    </>
   ) 
}