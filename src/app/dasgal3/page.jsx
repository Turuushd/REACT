"use client";

import { useState } from "react";

const Page = () => {
    const [firstvalue, setFirstvalue] = useState(0);
    const [secondvalue, setSecondvalue] = useState(0);
    const [operator,setOperator] = useState("+");

    let result = 0;
    switch(operator){
        case "+":
            result = Number(firstvalue) + Number(secondvalue);    
            break;
        case "-":
            result = firstvalue - secondvalue;    
            break;
        case "*":
            result = firstvalue * secondvalue;    
            break;
        case "/":
            result = firstvalue / secondvalue;    
            break;
    }
    
    return (
        <main>
            <div className="container">
                <div className="dasgal-two">
                    <input value={firstvalue} type="text" onChange={(e)=>setFirstvalue(e.target.value)} />
                    <select value={operator} onChange={(e)=>{
                        setOperator(e.target.value)
                    }}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                    <input value={secondvalue} type="text" onChange={(e)=>setSecondvalue(e.target.value)} /> =
                    <span>{result}</span>
                </div>
            </div>
        </main>
    );
};

export default Page;