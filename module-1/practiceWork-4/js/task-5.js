console.log('task-5');

let cost;
const lang = (prompt('Введіть свою країну : ua, en, ru, fr. '));
console.log(lang)

switch (lang) {
  case 'ua':
    cost = alert('Ваш місяць Лютий');
    break;

  case 'en':
    cost = alert('Your month is February');
    break;

  case 'ru':
    cost = alert('Ваш месяц Февраль');
    break;

  case 'fr':
    cost = alert('Votre mois est février');
    break;

  default:
    console.log('Invalid subscription type');
}
