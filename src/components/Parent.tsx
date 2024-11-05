import React, {useState, useCallback} from 'react';

interface IChildComponentProps {
    increment: () => void;
}

interface IParentComponentProps {
    isAdmin: boolean;
}

// Child Component
const ChildComponent: React.FC<IChildComponentProps> = React.memo(({increment}) => {
    console.log("ChildComponent re-rendered");
    return <button onClick={increment}>Increment</button>;
});


// Parent Component
const ParentComponent: React.FC<IParentComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({isAdmin, ...props}) => {
    const [count, setCount] = useState<number>(0);
    const [otherState, setOtherState] = useState<boolean>(false);

    // Memoize the increment function using useCallback
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <ChildComponent increment={increment}/>
            <button {...props} onClick={() => setOtherState(!otherState)}>
                Toggle other state
            </button>
        </div>
    );
};

export default ParentComponent;