import "./styles.css";
import { useState } from "react";

function random(n) {
  return Math.floor(Math.random() * n);
}

function randomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

export default function App() {
  const [name, setName] = useState("John Doe");
  const [color, setColor] = useState(randomColor());

  function handleClick(e) {
    const target = e.target;
    const input = target.previousSibling;
    setName(input.value);
  }

  function handleClick2() {
    setColor(randomColor());
  }

  return (
    <div className="App">
      <div>
        <p>hello, {name} </p>
        <input type="text" />
        <button onClick={handleClick}>update name</button>
      </div>

      <div className="box" style={{ backgroundColor: color }}>
        <button onClick={handleClick2}>change background color</button>
      </div>
    </div>
  );
}
