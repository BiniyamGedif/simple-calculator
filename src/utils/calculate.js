function calculate(firstNumber, secondNumber, operator) {
  const first = Number(firstNumber);
  const second = Number(secondNumber);

  let result;

  switch (operator) {
    case "+":
      result = first + second;
      break;

    case "−":
      result = first - second;
      break;

    case "×":
      result = first * second;
      break;

    case "÷":
      if (second === 0) {
        return "Error";
      }

      result = first / second;
      break;

    default:
      return second;
  }

  // Prevent displaying unnecessary floating-point digits.
  return Number(result.toPrecision(12));
}

export default calculate;