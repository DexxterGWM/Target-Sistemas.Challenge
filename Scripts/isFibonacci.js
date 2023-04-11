export default function isFibbonacci(num) {
  let fib1 = 0; let fib2 = 1;

  while (fib2 < num) { [fib1, fib2] = [fib2, fib1 + fib2]; }
  return fib2 === num;
}

const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const num = parseInt(numberInput.value);

  if (isNaN(num)) { result.id = 'inv'; result.textContent = 'Please, enter a valid number.'; }
  else if (isFibbonacci(num)) { result.id = 'yes'; result.textContent = `The number "${num}" is part of the Fibonacci sequence!`; }
  else { result.id = 'not'; result.textContent = `The number "${num}" is not part of the Fibonacci sequence.`; }
});