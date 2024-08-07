import { useState } from "react";

function Calculator() {
  //display value
  const [displayValue, setDisplayValue] = useState(0);

  const inputDigit = function (e) {
    console.log(e.target.innerText);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-item calc-display"></div>
      <div className="calculator-item">clear</div>
      <div className="calculator-item" onClick={inputDigit}>
        7
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        8
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        9
      </div>
      <div className="calculator-item">/</div>
      <div className="calculator-item" onClick={inputDigit}>
        4
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        5
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        6
      </div>
      <div className="calculator-item">-</div>
      <div className="calculator-item" onClick={inputDigit}>
        1
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        2
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        3
      </div>
      <div className="calculator-item">x</div>
      <div className="calculator-item">,</div>
      <div className="calculator-item">0</div>
      <div className="calculator-item">=</div>
      <div className="calculator-item">+</div>
    </div>
  );
}

export default Calculator;
