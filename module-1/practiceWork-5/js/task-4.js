console.log('task-4');




do {
  name = prompt('Введіть імя свого улюбленого героя менше 6 букв')
    if (name.length > 6) {
        console.log('Забагато букв в імені');
     break
    }
    
  console.log('Ваш герой: ', name);

}while (name.length < 6);
