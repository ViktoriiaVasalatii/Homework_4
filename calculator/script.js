const action = prompt("Enter the action");
const firstNumber = +prompt("Enter the first number");
const secondNumber = +prompt("Enter the second number");
let result;

switch (action) {
    case "add":
    result = firstNumber+secondNumber;
    alert(`${firstNumber}+${secondNumber} = ${result}`);
        break;
    case "sub":
    result = firstNumber-secondNumber;
    alert(`${firstNumber}-${secondNumber} = ${result}`);
        break;
    case "mult":
    result = firstNumber*secondNumber;
    alert(`${firstNumber}*${secondNumber} = ${result}`);
         break;
    case "div":
    result = firstNumber/secondNumber;
    alert(`${firstNumber}/${secondNumber} = ${result}`);
        break;
            
    default:
    alert("Error");
        break;
}