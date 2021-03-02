console.log('task-4.js');

const cafe = {
    name: 'Republic',
    width: 200,
    height: 300,
    personal: 5,
    hr: true,
    sum() {
        const sum = Number(this.width) * Number(this.height);
        return sum;
    },
};

const entries1 = Object.entries(cafe);
for (const entries2 of entries1) {
    const a = entries2[0];
    const b = entries2[1];
    console.log(`Ключ ${a} - Значення ${b}`);
}
console.log('P =', cafe.sum());