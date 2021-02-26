console.log('task-1');


const  myAverageScore = function(array) {
    let a = 0;
  let total = 0;
    for (let i = 0; i < array.length; i += 1 ) {
        a +=array[i];
      }
      total = a / array.length; 
    if (total >= 91 && total <= 100) {
        return `Ваш середній бал ${total}, Myaveragescore: A`;;
      }
    
      if (total >= 81 && total <= 90) {
        return `Ваш середній бал ${total}, Myaveragescore: B`;        return `Ваш середній бал ${total}, Myaveragescore: B`;;
      }
    
      if (total >= 71 && total <= 80) {
        return `Ваш середній бал ${total}, Myaveragescore: C`;;
      }
    
      if (total <= 70) {

        return `Ваш середній бал ${total}, Myaveragescore: D`;;
      }
      if (total > 100) {
    
        return `Ви ввели не дійсне число`;
      }
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));