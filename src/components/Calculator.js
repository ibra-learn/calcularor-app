import { useState } from "react";

function Calculator() {
  //display value
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState("");
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (e) => {
    const digit = e.target.innerText;
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (displayValue.indexOf(".") === -1) setDisplayValue(displayValue + ".");
  };

  const performOperation = (e) => {
    setOperator(e.target.innerText);
    setFirstOperand(displayValue);
    setWaitingForSecondOperand(true);
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        setDisplayValue(parseFloat(firstOperand) + parseFloat(displayValue));
        break;
      case "-":
        setDisplayValue(parseFloat(firstOperand) - parseFloat(displayValue));
        break;
      case "/":
        const result = parseFloat(firstOperand) / parseFloat(displayValue);
        setDisplayValue(String(result));
        break;
      case "x":
        setDisplayValue(parseFloat(firstOperand) * parseFloat(displayValue));
        break;
      default:
        break;
    }
    setWaitingForSecondOperand(false);
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-item calc-display">{displayValue}</div>
      <div className="calculator-item" onClick={clearDisplay}>
        clear
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        7
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        8
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        9
      </div>
      <div className="calculator-item" onClick={performOperation}>
        /
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        4
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        5
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        6
      </div>
      <div className="calculator-item" onClick={performOperation}>
        -
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        1
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        2
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        3
      </div>
      <div className="calculator-item" onClick={performOperation}>
        x
      </div>
      <div className="calculator-item" onClick={inputDecimal}>
        ,
      </div>
      <div className="calculator-item" onClick={inputDigit}>
        0
      </div>
      <div className="calculator-item" onClick={() => calculate()}>
        =
      </div>
      <div className="calculator-item" onClick={performOperation}>
        +
      </div>
    </div>
  );
}

export default Calculator;
