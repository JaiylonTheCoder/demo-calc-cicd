// helpers.js

// Function to calculate the result based on operator
export function calculate(num1, operator, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return "Error"; // Return "Error" for invalid operands
    }

    switch (operator) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        // Add more cases for other operations here
        default:
            return "Error"; // Return "Error" for invalid operator
    }
}
