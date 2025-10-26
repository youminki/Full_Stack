import { useState } from 'react';

export default function Counter() {
    // 상태 훅을 사용하여 카운트 값을 관리합니다.
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl font-bold mb-4">Count: {count}</div>
            <div className="space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
}
