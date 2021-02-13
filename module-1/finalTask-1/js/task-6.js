console.log('task-6');

let input;
let total = 0;

do {
    input = prompt('Введіть число');
    const number = Number(input);

    if (input === null) {
        break
}      
    
    if (Number.isNaN(number)) {
        alert(`Було написано не число, спробуйте ще раз`);
        continue;
}
    
    total += number;
    console.log(number);
} while (true);
alert(`Загальна сума чисел дорівнює ${total}`);
