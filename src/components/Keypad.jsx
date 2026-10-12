function Keypad({ onButtonClick }) {
  const buttons = [
    { label: "AC", type: "utility" },
    { label: "⌫", type: "utility" },
    { label: "÷", type: "operator" },
    { label: "×", type: "operator" },

    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "−", type: "operator" },

    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "+", type: "operator" },

    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "=", type: "equals" },

    { label: "±", type: "utility" },
    { label: "0", type: "number" },
    { label: ".", type: "number" },
  ];

  return (
    <div className="calculator-keypad">
      {buttons.map((button) => (
        <button
          key={button.label}
          type="button"
          className={`calculator-button ${button.type} ${
            button.label === "=" ? "equals-button" : ""
          }`}
          onClick={() => onButtonClick(button.label)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default Keypad;