function Display({ currentValue, previousOperation }) {
  // Shorten long decimal numbers for display only.
  function formatDisplayValue(value) {
    if (value === "Error") {
      return value;
    }

    // Only shorten numbers with more than 6 decimal places.
    if (/^-?\d+\.\d{7,}$/.test(value)) {
      return `${value.slice(0, value.indexOf(".") + 7)}...`;
    }

    return value;
  }

  return (
    <div className="calculator-display">
      <div className="previous-operation">
        {previousOperation}
      </div>

      <div className="current-value" title={currentValue}>
        {formatDisplayValue(currentValue)}
      </div>
    </div>
  );
}

export default Display;