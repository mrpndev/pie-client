import { useState } from "react";

const StatePractice = () => {
    //    [curr_value, update]
    const [count, setCount] = useState( () => {
        console.log("Function ran")
        return 4
    })
    console.log(count)
    function decCount() {
        setCount(count - 1)
    }

    function incCount() {
        setCount(count + 1)
    }

    return (
        <>
           <button onClick={decCount}>-</button>
           <span>{count}</span> 
           <button onClick={incCount}>+</button>
        </>
    )
}

export default StatePractice