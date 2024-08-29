"use client";

import { useState } from "react";

const Page = () => {
  const [password, setPassword] = useState("password");
  const [repeat, setRepeat] = useState("password");
  const handleClick = () => {
    if (password === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };
  const handleRepeatClick = () => {
    if (repeat === "password") {
      setRepeat("text");
    } else {
      setRepeat("password");
    }
  };

  const [input, setInput] = useState("");
  const upper = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  const lower = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  const sign = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    ".",
    ",",
    "/",
    "-",
    "_",
  ];

  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  let check = input.length >= 8;

  let check2 = false;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < upper.length; j++) {
      if (input[i] === upper[j]) {
        check2 = true;
      }
    }
  }

  let check3 = false;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (input[i] === lower[j]) {
        check3 = true;
      }
    }
  }

  let check4 = false;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (input[i] === digits[j]) {
        check4 = true;
      }
    }
  }

  let check5 = false;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < sign.length; j++) {
      if (input[i] === sign[j]) {
        check5 = true;
      }
    }
  }

  const [reinput, setReinput] = useState("");

  let passwordsMatching = input === reinput;

  return (
    <main>
      <div className="container">
        <div>
          <p>Password</p>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type={password}
          />
          <button onClick={handleClick}>show/hide</button>
        </div>
        <div>
          <p>Password repeat</p>
          <input
            value={reinput}
            onChange={(e) => {
              setReinput(e.target.value);
            }}
            type={repeat}
          />
          <button onClick={handleRepeatClick}>show/hide</button>
        </div>
        <p>
          <input type="checkbox" checked={check} />
          <span>Atleast 8 characters</span>
        </p>
        <p>
          <input type="checkbox" checked={check2} />
          <span>Atleast 1 upper case letter</span>
        </p>
        <p>
          <input type="checkbox" checked={check3} />
          <span>Atleast 1 lower case letter</span>
        </p>
        <p>
          <input type="checkbox" checked={check4} />
          <span>Atleast 1 digit</span>
        </p>
        <p>
          <input type="checkbox" checked={check5} />
          <span>Atleast 1 contains one of those (!@#$%^&*.,/-_)</span>
        </p>
        <p>
          <input type="checkbox" checked={passwordsMatching} />
          <span>Repeat password match </span>
        </p>
      </div>
    </main>
  );
};

export default Page;
