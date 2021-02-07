console.log('task-4');

name = prompt('Введіть імя свого улюбленого героя менше 6 букв')


do {
    if (name.length > 6) {
        console.log('Забагато букв в імені');
        break
    }
    
  console.log('Ваш герой ', name);
  break
 
}while (name.length < 6);
