"use client";

import { useState } from "react";

const Page = () => {
  const [text, setText] = useState("");
  const handleHideClick = () => {
    if (text === "") {
      setText(" Hello I'm hidden text");
    } else {
      setText("");
    }
  };
  return (
    <main>
      <div className="container">
        <button onClick={handleHideClick}>toggle</button>
        <span>{text}</span>
      </div>
    </main>
  );
};

export default Page;
