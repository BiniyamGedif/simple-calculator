import { useEffect, useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import calculate from "./utils/calculate";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  function handleButtonClick(value) {
    // Clear the calculator.
    if (value === "AC") {
      setCurrentValue("0");
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(false);
      return;
    }

    // Enter a digit.
    if (/^\d$/.test(value)) {
      if (waitingForOperand || currentValue === "Error") {
        setCurrentValue(value);
        setWaitingForOperand(false);
      } else {
        setCurrentValue((current) =>
          current === "0" ? value : current + value
        );
      }

      return;
    }

        // Add a decimal point.
    if (value === ".") {
      if (waitingForOperand || currentValue === "Error") {
        setCurrentValue("0.");
        setWaitingForOperand(false);
      } else if (!currentValue.includes(".")) {
        setCurrentValue((current) => current + ".");
      }

      return;
    }

    // Delete the last character.
    if (value === "⌫") {
      if (currentValue === "Error" || waitingForOperand) {
        return;
      }

      setCurrentValue((current) => {
        const shortened = current.slice(0, -1);

        return shortened === "" || shortened === "-" ? "0" : shortened;
      });

      return;
    }

    // Toggle between positive and negative.
    if (value === "±") {
      if (currentValue === "Error") {
        return;
      }

      setCurrentValue((current) =>
        current.startsWith("-") ? current.slice(1) : `-${current}`
      );

      return;
    }

    // Select an arithmetic operator.
    if (["+", "−", "×", "÷"].includes(value)) {
      if (currentValue === "Error") return;

      if (operator && !waitingForOperand) {
        const result = calculate(previousValue, currentValue, operator);

        if (result === "Error") {
          setCurrentValue("Error");
          setPreviousValue(null);
          setOperator(null);
          setWaitingForOperand(true);
          return;
        }

        setCurrentValue(String(result));
        setPreviousValue(String(result));
      } else {
        setPreviousValue(currentValue);
      }

      setOperator(value);
      setWaitingForOperand(true);
      return;
    }

    // Calculate the result.
    if (value === "=") {
      if (!operator || previousValue === null || waitingForOperand) {
        return;
      }

      const result = calculate(previousValue, currentValue, operator);

      setCurrentValue(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  }

    useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key;

      // Prevent browser shortcuts or default behavior for supported keys.
      if (/^\d$/.test(key) || [".", "+", "-", "*", "/", "Enter", "Backspace", "Escape"].includes(key)) {
        event.preventDefault();
      } else {
        return;
      }

      // Digits and decimal point.
      if (/^\d$/.test(key) || key === ".") {
        handleButtonClick(key);
        return;
      }

      // Arithmetic operators.
      const operatorMap = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷",
      };

      if (operatorMap[key]) {
        handleButtonClick(operatorMap[key]);
        return;
      }

      // Calculate, delete, or clear.
      if (key === "Enter") {
        handleButtonClick("=");
      } else if (key === "Backspace") {
        handleButtonClick("⌫");
      } else if (key === "Escape") {
        handleButtonClick("AC");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Remove the listener when the component unmounts.
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <main className="app">
      <section className="calculator">
        <Display
          currentValue={currentValue}
          previousOperation={
            operator && previousValue !== null
              ? `${previousValue} ${operator}`
              : ""
          }
        />

        <Keypad onButtonClick={handleButtonClick} />
      </section>
    </main>
  );
}

export default App;