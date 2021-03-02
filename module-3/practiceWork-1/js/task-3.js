console.log('task-3.js');

const calculator = {
    a: prompt('Введіть перше число'),
    b: prompt('Введіть друге число'),
    sum() {
        const sum = Number(this.a) + Number(this.b);
        return sum;
    },
    mult() {
        const x = Number(this.a) * Number(this.b);
        return x;
    },
   
};
console.log('sum =', calculator.sum());

console.log('mult =', calculator.mult());
