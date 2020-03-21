import "./styles.css";
//referenciar elementos del html
let binaryInput = document.querySelector("#binaryInput");
let decimalInput = document.querySelector("#decimalInput");
let btnConvert = document.querySelector("#convert");
let btn1 = document.querySelector("#btn1");
let btn0 = document.querySelector("#btn0");

function addNum(number) {
  binaryInput.value += number;
}

function verificacion(input, output) {
  let binaryValue = input.value;
  if (binaryValue.search(/[2-9]|[A-z]/) === -1) {
    output.value = "";
    input.value = "";
    let decimalValue = parseInt(binaryValue, 2);
    output.value = decimalValue;
  } else {
    alert("Your number is not binary");
    output.value = "";
    input.value = "";
  }
}

btn0.onclick = () => addNum(0);
btn1.onclick = () => addNum(1);
btnConvert.onclick = () => verificacion(binaryInput, decimalInput);
