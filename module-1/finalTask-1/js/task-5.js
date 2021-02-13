console.log('task-5');

let cost;
const text = prompt('Введіть імя країни, куда ви хочете заказати доставку');
const country = text.toLowerCase();
switch (country) {
  case "китай":
    cost = 100;
    break;

  case "чилі":
    cost = 250;
    break;

  case "австрія":
    cost = 170;
    break;

  case "індія":
    cost = 80;
    break;

  case "ямайка":
    cost = 120;
    break;

  default:
    alert("У вашій країні доставка недоступна");
}

alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);

