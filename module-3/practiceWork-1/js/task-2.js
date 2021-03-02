console.log('task-2.js');

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
const item = Object.values(salaries); 
for (const a of item) {      
    sum += a;
    }
   console.log(sum);
