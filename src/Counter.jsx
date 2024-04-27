import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>+1</button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                } else {
                    alert("Can't go for negetive");
                }
            }}>-1</button>
        </div>
    )
}