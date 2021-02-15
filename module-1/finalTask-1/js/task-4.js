console.log('task-4');

const credits = 23580;
const pricePerDroid = 3000;
const queDroid = prompt('Скільки ви хочете купити дроїдів?');
let totalPrice = queDroid * pricePerDroid;

while(true) {
if (queDroid === null) {
    console.log('Скасовано користувачем!');
break
} 
if  (totalPrice > credits) {
    alert('Недостатнто коштів на рахунку!')
    break
}
else{
    const remainder = credits - totalPrice;
    console.log(remainder);
    alert(
      `Ви купили ${queDroid} дроїдів, на рахунку залишилося ${remainder} кредитів.`
    );
    break
} 
}
