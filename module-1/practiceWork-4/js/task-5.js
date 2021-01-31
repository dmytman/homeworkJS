console.log('task-5');

let cost;
const lang = (prompt('Введіть свою країну : ua, en, ru, fr. '));
console.log(lang)

switch (lang) {
  case 'ua','укр':
    cost = alert('Ваш місяць Лютий');
    break;

  case 'en','англ':
    cost = alert('Your month is February');
    break;

  case 'ru','рус':
    cost = alert('Ваш месяц Февраль');
    break;

  case 'fr','фр':
    cost = alert('Votre mois est février');
    break;

  default:
    console.log('Invalid subscription type');
}
