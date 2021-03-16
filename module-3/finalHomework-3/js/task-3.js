console.log("task-3.js");

const findBestEmployee = function (employees) {
  const values = Object.entries(employees);
  const entries1 = Object.entries(employees);
    for (const entries2 of entries1) {
  const a = entries2[0];
  const b = entries2[1];
      console.log(`ім'я ${a} - кількість задач ${b}`);
  }
  let best = values[0];
    
   for (const entry of values) {
     if (entry[1] > best[1]) {
       best = entry;
     }
   }
   return best[0];
    };


/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux