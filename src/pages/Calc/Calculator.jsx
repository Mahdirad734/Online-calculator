import { useState } from "react";
import styles from "./calculator.module.css"

function Calculator() {
  const [num, setNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [int, setInt] = useState(null);
  const [display, setDisplay] = useState("0");

  const handleClearOperator = (op) => {
    setDisplay("0");
    setNum("");
    setInt(null);
    setOperator(null);
  };
  const handleBackspace = () => {
    if (int !== null && num === "" && operator === null) {
      const newInt = int.toString().slice(0, -1);
      if (newInt === "") {
        setDisplay("0");
        setNum("");
        setInt(null);
      } else {
        setDisplay(newInt);
        setInt(parseFloat(newInt));
      }
      return;
    }
    if (num.length >= 0) {
      const newNum = num.slice(0, -1);
      if (newNum === "") {
        setDisplay("0");
        setNum("");
      } else {
        setDisplay(newNum);
        setNum(newNum);
      }
      return;
    }
  };

  const handleClickNumber = (item) => {
    if(num.length === 20 ) return ;
    if (int !== null && operator === null && num === "") {
      const getInt = int.toString();
      setNum(getInt);
      setInt(null);
      return;
    }
    // just one time includes '.'
    if (item === ".") {
      if (num.includes(".")) return;
      if (num === "") {
        setDisplay("0.");
        setNum("0.");
      } else {
        setDisplay(num + item);
        setNum(num + item);
      }
    } else {
      setDisplay(num + item);
      setNum(num + item);
    }
  };
  const handleClickOprator = (op) => {
    if (num !== "") {
      if (int === null) {
        setOperator(op);
        setInt(parseFloat(num));
        setNum("");
      } else if (int !== null && operator !== null) {
        // int  + op +  num
        const result = calculate(int, parseFloat(num), operator);
        // first check reslut is NAN ?
        if (isNaN(result)) {
          setDisplay("Error");
          setNum("");
          setInt(null);
          setOperator(null);
          return;
        }
        // round decimal numbers ;
        setInt(result);
        setDisplay(formatNumber(result));
        setNum("");
        // done Calc with before operator
        setOperator(op);
      }

      // if after Equal , click on operator : int !== null but
      // num === null , so :
    } else if (int !== null) {
      setOperator(op);
    }
  };

  const handleEquals = () => {
    if (num !== "" && int !== null && operator !== null) {
      const result = calculate(int, parseFloat(num), operator);
      // first check reslut is NAN ?
      if (isNaN(result)) {
        setDisplay("Error");
        setNum("");
        setInt(null);
        setOperator(null);
        return;
      }
      setInt(result);
      setDisplay(formatNumber(result));
      setNum("");
      setOperator(null);
    }
  };

  // fixed decimal number & handle error for Display :
  const formatNumber = (value) => {
    if (typeof value !== "number" || isNaN(value)) {
      return "Error";
    }
    return parseFloat(value.toFixed(4)).toString();
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : NaN;

      default:
        return b;
    }
  };

  console.log("num", num);
  console.log("int", int);
  console.log("operator", operator);
  console.log("_______________________");

  return (
    <div className={styles.bodyCalc}>
      <h2 className={styles.titleCalculator}>React Calculator</h2>
      <div className={styles.CalculatorWrapper}>
        <div>
          <h2>
            {operator !== null
              ? `${int !== null ? int : ""}  ${operator} ${num}`
              : display}
          </h2>
        </div>
        <div className={styles.clearWrapper}>
          <button onClick={() => handleClearOperator("C")}>C</button>
          <button onClick={() => handleBackspace("back")}>⌫</button>
        </div>
        <div>
          {["7", "8", "9", "x"].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "x" ? handleClickOprator("*") : handleClickNumber(item)
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          {["4", "5", "6", "-"].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "-"
                  ? handleClickOprator(item)
                  : handleClickNumber(item)
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          {["1", "2", "3", "+"].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "+"
                  ? handleClickOprator(item)
                  : handleClickNumber(item)
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.lastNumberBtn}>
          {[".", "0", "/", "="].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "/"
                  ? handleClickOprator(item)
                  : item === "="
                  ? handleEquals(item)
                  : handleClickNumber(item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
