const operatorVar = prompt("Enter the operator that you want to use");

const operand1 = prompt("Enter the First Value");

const operand2 = prompt("Enter the Second Value");


var result;
if (operatorVar == "*") {
  result = operand1 * operand2;
} else if (operatorVar == "-") {
  result = operand1 - operand2;
} else if (operatorVar == "/") {
  result = operand1 / operand2;
} else if (operatorVar == "+") {
  result = parseInt(operand1) + parseInt(operand2);
} else {
  alert("Invalid Operator");
}

alert("The result is : " + result);

