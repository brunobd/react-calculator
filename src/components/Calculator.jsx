import { useState } from "react";
import "./Calculator.css";
import { Textfit } from "react-textfit";
export default function Calculator() {
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [operator, setOperator] = useState(null);

  function inputDigit(digit) {
    if (operator == null) {
      if (firstOperand.toString().includes(".") && digit === ".") {
        return;
      }
      if (firstOperand === 0) {
        if (digit === ".") {
          setFirstOperand(firstOperand + digit);
        } else {
          setFirstOperand(digit);
        }
      } else {
        setFirstOperand(firstOperand + digit);
      }
    } else {
      if (secondOperand.toString().includes(".") && digit === ".") {
        return;
      }
      if (secondOperand === 0) {
        if (digit === ".") {
          setSecondOperand(secondOperand + digit);
        } else {
          setSecondOperand(digit);
        }
      } else {
        setSecondOperand(secondOperand + digit);
      }
    }
  }

  function clear() {
    setFirstOperand(0);
    setSecondOperand(0);
    setOperator(null);
  }
  function invertSign() {
    setFirstOperand(-firstOperand);
  }
  function operatorHandler(operator) {
    setOperator(operator);
  }

  function percentage() {
    setFirstOperand(firstOperand / 100);
  }

  function evaluate() {
    if (operator === null) {
      return;
    }
    if (operator === "+") {
      setFirstOperand(parseFloat(firstOperand) + parseFloat(secondOperand));
    } else if (operator === "-") {
      setFirstOperand(firstOperand - secondOperand);
    } else if (operator === "*") {
      setFirstOperand(firstOperand * secondOperand);
    } else {
      setFirstOperand(firstOperand / secondOperand);
    }
    setOperator(null);
    setSecondOperand(0);
  }

  return (
    <div className="calculator-grid" >
      <Textfit className="output" max={70} mode="single">
        {operator == null ? firstOperand : secondOperand}
      </Textfit>
      <button className="btn-gray-light" onClick={clear}>
        {firstOperand === 0 ? "AC" : "C"}
      </button>
      <button className="btn-gray-light" onClick={invertSign}>
        +/-
      </button>
      <button className="btn-gray-light" onClick={percentage}>
        %
      </button>
      <button
        className="btn-orange"
        onClick={(e) => operatorHandler(e.target.value)}
        value={"/"}
      >
        ÷
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={7}
      >
        7
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={9}
      >
        9
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={8}
      >
        8
      </button>
      <button
        className="btn-orange"
        onClick={(e) => operatorHandler(e.target.value)}
        value={"*"}
      >
        ×
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={4}
      >
        4
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={5}
      >
        5
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={6}
      >
        6
      </button>
      <button
        className="btn-orange"
        onClick={(e) => operatorHandler(e.target.value)}
        value={"-"}
      >
        -
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={1}
      >
        1
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={2}
      >
        2
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={3}
      >
        3
      </button>
      <button
        className="btn-orange"
        onClick={(e) => operatorHandler(e.target.value)}
        value={"+"}
      >
        +
      </button>
      <button
        className="btn-gray-dark btn-large"
        onClick={(e) => inputDigit(e.target.value)}
        value={0}
      >
        0
      </button>
      <button
        className="btn-gray-dark"
        onClick={(e) => inputDigit(e.target.value)}
        value={"."}
      >
        .
      </button>
      <button className="btn-orange" onClick={evaluate}>
        =
      </button>
    </div>
  );
}
