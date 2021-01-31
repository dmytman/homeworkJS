console.log('task-2');


const adults = prompt('Введіть свій вік');

if (adults >= 0 && adults <= 16 ) {
    console.log(alert('Ви потрапили в 1 вікову групу до дітей'));
  } else if (adults >= 17 && adults <= 60 ) {
    console.log(alert('Ви потрапили в 2 вікову групу до дорослих'));
  } else if (adults >= 61 && adults <= 100 ) {
    console.log(alert('Ви потрапили в 3 вікову групу до пенсіонерів'));
  } else {
    console.log(alert('вас не існує)'));
  }




