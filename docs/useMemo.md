````
import React, { useState, useMemo } from 'react';

// Factorial calculation (expensive function for demonstration)
const factorial = (n) => {
    console.log("Computing factorial...");
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

const FactorialComponent = () => {
    const [number, setNumber] = useState(5);
    const [counter, setCounter] = useState(0);

    // Memoize the result of factorial calculation
    const factorialResult = useMemo(() => factorial(number), [number]);

    return (
        <div>
            <h1>Factorial of {number} is: {factorialResult}</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={() => setCounter(counter + 1)}>
                Re-render Component
            </button>
            <p>Counter: {counter}</p>
        </div>
    );
};

export default FactorialComponent;

````