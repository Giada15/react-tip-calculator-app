import { useState } from "react";
import "./index.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const totTips = (bill * ((tip1 + tip2) / 2)) / 100;
  const total = bill + totTips;

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <Bill bill={bill} onSetBill={setBill} />
      <Tip tip={tip1} onSelect={setTip1}>
        How did you like the service?
      </Tip>
      <Tip tip={tip2} onSelect={setTip2}>
        How did your friend like the service?
      </Tip>

      {bill > 0 && (
        <>
          <Output bill={bill} totTips={totTips} total={total} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div className="line">
      <label>How much was the bill?</label>
      <input
        type="input"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Tip({ tip, onSelect, children }) {
  return (
    <div className="line">
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, totTips, total }) {
  return (
    <h3>
      You pay ${total} (${bill} + ${totTips} tip)
    </h3>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
