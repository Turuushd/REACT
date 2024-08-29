"use client";

import { useState } from "react";

const Page = () => {
    const [input, setInput] = useState("");
    return (
      <main>
        <div className="container">
            <textarea value={input} onChange={(e)=> {
                if (e.target.value.length <= 100){
                    setInput(e.target.value);
                }
            }}></textarea>
            <span>{input.length}/100</span>
        </div>
      </main>
    );
};  

export default Page;