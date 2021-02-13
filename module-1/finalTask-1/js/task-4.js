console.log('task-4');

const credits = 23580;
const pricePerDroid = 3000;
const queDroid = prompt('Скільки ви хочете купити дроїдів?');
let totalPrice = queDroid * pricePerDroid;

if (queDroid === null) {
    console.log('Скасовано користувачем!');
} else {
    console.log(totalPrice);
}
if (totalPrice > credits) {
    console.log('Недостатнто коштів на рахунку!')
} else {
    const remainder = credits - totalPrice;
    console.log(remainder);
    alert(
      `Ви купили ${queDroid} дроїдів, на рахунку залишилося ${remainder} кредитів.`
    );
}