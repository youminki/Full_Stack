import { useEffect, useState} from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>Timer Component: {count}</div>;
};

export default Timer;