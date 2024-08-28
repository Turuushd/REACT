"use client";

import { useState } from "react";

const Page = () => {
  const [color, setColor] = useState("");
  return (
    <main>
      <div className="container">
        <div className="dasgal-five">
          <button onClick={() => setColor("red")}>red</button>
          <button onClick={() => setColor("green")}>green</button>
          <button onClick={() => setColor("black")}>black</button>
          <button onClick={() => setColor("purple")}>purple</button>
          <button onClick={() => setColor("yellow")}>yellow</button>
          <div className="box" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </main>
  );
};

export default Page;
