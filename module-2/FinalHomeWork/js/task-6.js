console.log('task-6');

let input;
const numbers = [];
let total = 0;


do {
    input = prompt('Введіть число -');
    const a = Number(input);

if (input === null ) {
    break; 
}
    numbers.push(a);
    console.log(numbers);

    
} while (true);
if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
}
console.log(`Загальна сума чисел дорівнює ${total}`);