import React from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment =() => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1 className={classes.title}>{count}</h1>
            <button className={classes.btn} onClick={increment}>Increment</button>
            <button className={classes.btn} onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;