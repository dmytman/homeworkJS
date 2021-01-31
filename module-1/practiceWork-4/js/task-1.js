console.log('task-1');

let range = prompt('Введіть число від 55 до 99');


const result = range <= 99 && range >= 55;
console.log(result); 

if (result === true) {
    console.log('Число потрапляє в діапазон');
  } else {
    console.log('Число не потрапляє в діапазон');
  }