console.log('task-3');

let userName = prompt('Введіть своє імя');
let surName = prompt('Введіть своє прізвище');

if (userName.length >= 4 && surName.length >= 5) { 
    const u = userName.length + surName.length;
        console.log(alert(`Cумі букв імені і прівища = ${u}`));
    } else {
        console.log(alert('Упс'));
    }