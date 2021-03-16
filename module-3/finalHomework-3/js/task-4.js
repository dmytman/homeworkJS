console.log("task-4.js");

const countTotalSalary = function (employees) {
    const values = Object.values(employees);
    const entries1 = Object.entries(employees);
    for (const entries2 of entries1) {
        const a = entries2[0];
        const b = entries2[1];
        console.log(`ім'я ${a} - зарплата ${b}`);
    }
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return  total; 
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log('загальна сума зарплати усіх працівників (в цьому списку) =',
    countTotalSalary({
    })
); // 0

console.log('загальна сума зарплати усіх працівників (в цьому списку) =',
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log('загальна сума зарплати усіх працівників (в цьому списку) =',
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400