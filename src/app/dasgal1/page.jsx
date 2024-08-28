"use client";

import { useState } from "react";

const Page = () => {
    const [counter, setCounter] = useState(0);
    const handlePlusClick = () => {
        setCounter(counter + 1);
    };
    const handleMinusClick = () => {
        setCounter(counter - 1);
    };  
    return (
        <main>
            <div className="container">
                <div className="dasgal">
                    <button onClick={handleMinusClick}>-</button>
                    <span>{counter}</span>
                    <button onClick={handlePlusClick}>+</button>
                </div>
            </div>
        </main>
    );
};

export default Page;