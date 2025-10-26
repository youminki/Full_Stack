import { useState } from 'react';
import {useEffect } from 'react';
import { data } from 'react-router-dom';

export default function HelloEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => console.log(data));
            console.log(data)
            setCount(data.length);
    }, []);

    const onClick = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }

    return (
        <div>
            <div>Hello, useEffect!</div>
            <div>Count: {count}</div>
            <button onClick={onClick}>Increment</button>
        </div>
    );          

}