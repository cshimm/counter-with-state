import React, {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(c => c + 1)
    const incrementDelay = () => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 2000);
    }
    const incrementTwiceIncorrect = () => {
        setCount(count + 1)
        setCount(count + 1)
    }
    const incrementTwiceCorrect = () => setCount(count => count + 2);
    const resetCount = () => setCount(0)
    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementDelay}>Increment after Delay</button>
            <button onClick={incrementTwiceIncorrect}>Increment Twice Incorrect</button>
            <button onClick={incrementTwiceCorrect}>Increment Twice Correct</button>
            <button onClick={resetCount}>Reset</button>
        </>
    )
}