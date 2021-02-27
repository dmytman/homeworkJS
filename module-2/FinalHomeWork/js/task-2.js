console.log('task-2');

const calculateEngravingPrice = function (message, pricePerWord) {


let aray = message.split(' ');
let sum = pricePerWord * aray.length;

    for (let index = 0; index < aray.length; index += 1) {
        console.log(`Ваша сума вийшла на ${sum}`);
    }
    return (`Кількість слів - ${aray.length}`);
  };

  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); 
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); 
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); 