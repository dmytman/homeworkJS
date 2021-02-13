console.log('task-3');

const ADMIN_PASSWORD = 'jqueryismyjam';
let massage = prompt('Введіть пароль:')

if (massage === ADMIN_PASSWORD) {
    massage = 'Ласкаво просимо!';

} else if (massage === null) {
    massage = 'Скасовано користувачем!';

} else {
    massage = 'Доступ заборонений, невірний пароль!';
}
alert(massage);